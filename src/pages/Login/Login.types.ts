export interface LoginForm {
  email: {
    value: string
  },
  password: {
    value: string
  }
} 

export interface LoginData {
  id: number,
  email: string,
  password: string,
  name: string
  access_token: string
}