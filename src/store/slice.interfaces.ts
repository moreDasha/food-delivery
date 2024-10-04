export interface UserState {
  jwt: string | null,
  loginErrorMessage?: string
}

export interface UserInitState {
  jwt: string | null
}