<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="leftDrawerOpen ? 'menu_open' : 'menu'"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> {{ APP_NAME }} </q-toolbar-title>

        <div>{{ title }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <SidebarDrawer />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, } from 'vue'

import { TITLE, } from 'src/utils/meta'

import SidebarDrawer from 'components/SidebarDrawer.vue'

const leftDrawerOpen = ref(false)
const title = ref(TITLE)
const APP_NAME = import.meta.env.VITE_NAME_FULL

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
