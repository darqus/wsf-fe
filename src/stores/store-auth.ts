/* eslint-disable @typescript-eslint/no-confusing-void-expression */
/* eslint-disable @typescript-eslint/promise-function-async */
/* eslint-disable @typescript-eslint/return-await */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { defineStore, } from 'pinia'

import { Notify, } from 'quasar'

import { type IState, type TUser, } from 'src/types/auth'

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail, // updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth, } from 'src/boot/firebase'

const defaultCurrentUser: TUser = null

const storeAuth: IState = {
  email: '',
  password: '',
  loading: false,
  currentUser: defaultCurrentUser,
}

export const useStoreAuth = defineStore('auth', {
  state: () => storeAuth,
  getters: {
    loggedIn: ({ currentUser, }: IState) => currentUser !== null,
    currentEmail: ({ currentUser, }: IState) => currentUser?.email as string,
  },
  actions: {
    toggleLoading () {
      this.loading = !this.loading
    },
    // https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0#create_a_password-based_account
    onRegister () {
      this.toggleLoading()
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then(({ user, }) => {
          const { uid, email, } = user

          if (this.email === email && uid) {
            this.router.push({ path: '/login', }).then(() =>
              Notify.create({
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: `Пользователь c id ${uid} зарегистрирован на email ${email}`,
              })
            )
          }
        })
        .catch((error: NodeJS.ErrnoException) => {
          this.createErrorMessage(error)
        })
        .finally(() => {
          this.toggleLoading()
        })
    },
    // https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0#sign_in_a_user_with_an_email_address_and_password
    onLogin () {
      this.toggleLoading()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(({ user, }) =>
          user
            ? this.router.push({ path: '/account', }).then(() => {
              this.onResetForm()
            })
            : null
        )
        .catch((error: NodeJS.ErrnoException) => {
          this.createErrorMessage(error)
        })
        .finally(() => {
          this.toggleLoading()
        })
    },
    getCurrentUser () {
      onAuthStateChanged(auth, (currentUser) => {
        this.currentUser = currentUser
      })
    },
    onResetForm () {
      this.email = ''
      this.password = ''
    },
    onLogout (goToLogin?: boolean) {
      this.toggleLoading()
      signOut(auth)
        .then(() =>
          goToLogin
            ? this.router.push({ path: '/login', }).then(() => {
              this.onPostLogout()
            })
            : this.onPostLogout()
        )
        .catch((error: NodeJS.ErrnoException) => {
          this.createErrorMessage(error)
        })
        .finally(() => {
          this.toggleLoading()
        })
    },
    onForgot () {
      this.toggleLoading()
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.router.push({ path: '/login', }).then(() => {
            Notify.create({
              color: 'green-4',
              textColor: 'white',
              icon: 'cloud_done',
              message:
                'Проверьте почту и перейдите по ссылке для восстановления пароля',
            })
            this.password = ''
          })
        })
        .catch((error: NodeJS.ErrnoException) => {
          this.createErrorMessage(error)
        })
        .finally(() => {
          this.toggleLoading()
        })
    },
    onPostLogout () {
      Notify.create({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Вы вышли из системы',
      })
      this.onResetForm()
    },
    createErrorMessage (error: NodeJS.ErrnoException) {
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: error?.code,
      })
    },
  },
})
