export interface Profile {
  id: number,
  email: string,
  name: string
}
export interface UserState {
  jwt: string | null,
  loginErrorMessage?: string,
  profile?: Profile 
}

export interface UserInitState {
  jwt: string | null
}