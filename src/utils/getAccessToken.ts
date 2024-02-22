export const getAccessTokenFromLocalStorage: string | null = (localStorage.getItem('access_token') || '') as
  | string
  | null
