import { defineStore, } from 'pinia'

import { Notify, } from 'quasar'

import {
  ELevelsNames,
  type IEmployeeCard,
  type TLevelNames,
} from 'src/types/emloyee-card'

import { addDoc, } from 'src/boot/firebase'

const defaultLevel: TLevelNames = ELevelsNames[0]

const employeeCard: IEmployeeCard = {
  id: '',
  name: '',
  email: '',
  position: '',
  level: defaultLevel,
  description: '',
}

export const useStoreNewEmployee = defineStore('new-employee', {
  state: () => ({
    ...employeeCard,
    loading: false,
  }),
  actions: {
    toggleLoading () {
      this.loading = !this.loading
    },
    add () {
      this.toggleLoading()
      addDoc('employees', {
        name: this.name,
        email: this.email,
        position: this.position,
        level: this.level,
        description: this.description,
      })
        .then(() =>
          Notify.create({
            color: 'green-4',
            textColor: 'white',
            icon: 'how_to_reg',
            message: `Сотрудник "${this.name}" добавлен`,
          })
        )
        .catch((error) => {
          this.createErrorMessage(error)
        })
        .finally(() => {
          this.toggleLoading()
        })
    },
    onReset () {
      this.id = ''
      this.name = ''
      this.email = ''
      this.position = ''
      this.level = defaultLevel
      this.description = ''
    },
    createErrorMessage (error: { code?: string }): void {
      Notify.create({
        color: 'red-5',
        textColor: 'white',
        icon: 'warning',
        message: error?.code,
      })
    },
  },
})
