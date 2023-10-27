type TLevel = {
  key: string
  name: string
  color: string
}

export const LEVELS_MAP: TLevel[] = [
  {
    key: 'PADAVAN',
    name: 'Падаван',
    color: 'secondary',
  },
  {
    key: 'JEDY',
    name: 'Джедай',
    color: 'primary',
  },
  {
    key: 'SITH',
    name: 'Ситх',
    color: 'dark',
  },
]

const LEVEL_KEYS = LEVELS_MAP.map(({ key, }) => key)

export const LEVEL_NAMES = LEVELS_MAP.map(({ name, }) => name)

export const LEVEL_COLORS = LEVELS_MAP.map(({ color, }) => color)

const ELevelsNamesMap = {}
const EColorStatusesMap = {}

LEVELS_MAP.forEach(({ key, name, color, }) => {
  ELevelsNamesMap[key] = name
  EColorStatusesMap[key] = color
})

export const ELevelsNames = LEVEL_NAMES

export const EColorStatuses = LEVEL_COLORS

export type TLevelNames = typeof LEVEL_KEYS[keyof typeof LEVEL_KEYS]

export type IEmployeeCard = {
  id: string
  name: string
  email: string
  position: string
  level: TLevelNames
  description: string | ''
}
