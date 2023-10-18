
import { defineStore, } from 'pinia'

import { IEmployeeCard, LEVELS_MAP, LEVEL_NAMES, TLevelNames, } from 'src/types/emloyee-card'

import { getCollection, } from 'src/boot/firebase'

const EMPLOYEE_LIST: Array<IEmployeeCard> = []

export const useStoreEmployeeCards = defineStore('employee-cards', {
  state: () => ({
    isFilterVisible: false,
    employeeList: EMPLOYEE_LIST,
    selectedFromLevel: null,
    selectedFromPosition: null,
  }),
  getters: {
    isEmployeeList: (state) => state.employeeList.length > 0,
    filteredEmployeeList: ({
      isFilterVisible,
      employeeList,
      selectedFromLevel,
      selectedFromPosition,
    }) =>
      isFilterVisible
        ? selectedFromLevel || selectedFromPosition
          ? employeeList.filter(
            ({ level, position, }) =>
              level === selectedFromLevel || position === selectedFromPosition
          )
          : employeeList
        : employeeList,
    optionsFromLevel: () => LEVEL_NAMES,
    optionsFromPosition: ({ employeeList, }) => [
      ...new Set(employeeList.map(({ position, }) => position)),
    ],
  },
  actions: {
    async getEmployeeList () {
      const employees = await getCollection('employees')

      const NEW_EMPLOYEE_LIST: Array<IEmployeeCard> = []

      employees.forEach((doc) =>
        NEW_EMPLOYEE_LIST.push({
          id: doc.id,
          name: doc.data().name as string,
          email: doc.data().email as string,
          position: doc.data().position as string,
          level: doc.data().level as string,
          description: doc.data().description as string,
        })
      )

      if (NEW_EMPLOYEE_LIST.length) {
        this.employeeList = NEW_EMPLOYEE_LIST
      }
    },
    getColorFromLevel: (level: TLevelNames) =>
      LEVELS_MAP.find(({ name, }) => name === level)?.color,
  },
})
