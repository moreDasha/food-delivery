export interface LoginForm {
  email: {
    value: string
  },
  password: {
    value: string
  }
} 

export interface LoginData {
  email: string,
  password: string,
  access_token: string
}