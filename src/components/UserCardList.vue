<template>
  <div class="row">
    <q-toggle
      v-model="storeEmployeeCards.isFilterVisible"
      class="q-mb-md q-mr-md"
      color="pink"
      icon="filter_list_alt"
      label="Фильтры"
      size="xl"
    />
    <template v-if="storeEmployeeCards.isFilterVisible">
      <q-select
        v-model="storeEmployeeCards.selectedFromLevel"
        :options="storeEmployeeCards.optionsFromLevel"
        class="q-mb-md"
        label="По уровню"
        style="width: 200px"
        clearable
        outlined
      />
      <div class="q-mr-md" />
      <q-select
        v-model="storeEmployeeCards.selectedFromPosition"
        :options="storeEmployeeCards.optionsFromPosition"
        class="q-mb-md"
        label="По должности"
        style="width: 300px"
        clearable
        outlined
      />
    </template>
  </div>
  <q-linear-progress
    v-if="!storeEmployeeCards.isEmployeeList"
    class="q-mt-sm"
    indeterminate
  />
  <div
    v-else
    class="row q-gutter-md users-list"
  >
    <q-card
      v-for="{
        id,
        name,
        email,
        position,
        level,
        description,
      } in storeEmployeeCards.filteredEmployeeList"
      :key="id"
      style="overflow-x: auto"
      bordered
    >
      <q-card-section style="height: 140px; overflow-y: auto">
        <div class="text-subtitle1">
          {{ name }}
        </div>
        <q-badge :color="storeEmployeeCards.getColorFromLevel(level)">
          #{{ level }}
        </q-badge>
        <div class="text-subtitle2">
          {{ position }}
        </div>
        <div class="text-subtitle2">
          {{ email }}
        </div>
      </q-card-section>

      <q-separator
        dark
        inset
      />

      <q-card-section style="height: 100px; overflow-y: auto">
        {{ description }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useStoreEmployeeCards, } from 'src/stores/store-employee-cards'

const storeEmployeeCards = useStoreEmployeeCards()

storeEmployeeCards.getEmployeeList()
</script>

<style lang="scss">
@import "./scss/user-card-list";
</style>
