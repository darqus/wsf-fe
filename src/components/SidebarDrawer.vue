<template>
  <q-list>
    <q-item-label header>
      {{ t('titles.mainMenu') }}
    </q-item-label>

    <UserAvatar />

    <RouterMenuLink
      v-for="link in ROUTER_MENU_LINKS"
      :key="link.title"
      v-bind="link"
    />

    <div class="q-pa-md">
      <ThemeToggler />
    </div>
  </q-list>

  <div
    v-if="storeAuth.loggedIn"
    class="q-pa-md"
  >
    <q-btn
      :disable="storeAuth.loading"
      :loading="storeAuth.loading"
      color="primary"
      label="Выйти"
      size="md"
      no-caps
      outline
      @click="storeAuth.onLogout(true)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, } from 'vue'
import { useI18n, } from 'vue-i18n'

import { useStoreAuth, } from 'src/stores/store-auth'

import RouterMenuLink from 'components/RouterMenuLink.vue'
import ThemeToggler from 'components/ThemeToggler.vue'
import UserAvatar from 'components/UserAvatar.vue'

const { t, } = useI18n()
const storeAuth = useStoreAuth()
const ROUTER_MENU_LINKS = computed(() => [
  {
    title: 'Главная',
    icon: 'home',
    path: '/',
    visible: storeAuth.loggedIn,
  },
  {
    title: 'Зарегистрироваться',
    icon: 'person_add',
    path: '/register',
    visible: !storeAuth.loggedIn,
  },
  {
    title: 'Войти',
    icon: 'login',
    path: '/login',
    visible: !storeAuth.loggedIn,
  },
  {
    title: 'Профиль',
    icon: 'account_circle',
    path: '/account',
    visible: storeAuth.loggedIn,
  },
  {
    title: 'Добавить сотрудника',
    icon: 'person_add',
    path: '/new',
    visible: storeAuth.loggedIn,
  },
])

onMounted(() => {
  storeAuth.getCurrentUser()
})
</script>
