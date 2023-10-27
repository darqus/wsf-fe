type UnknownObjectMap = Record<string | number, any>

export type TUser = UnknownObjectMap | null

export type IState = {
  email: string
  password: string
  loading: boolean
  currentUser: TUser
}
