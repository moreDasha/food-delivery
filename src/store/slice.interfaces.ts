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

export interface CartProduct {
  id: number,
  amount: number
}

export interface CartState {
  products: CartProduct[]
}

export interface CartInitState {
  products: CartProduct[] | []
}