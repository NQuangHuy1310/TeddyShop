export const getCookie = (name: string): string => {
  const cookies: string[] = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    const cookie: string = cookies[i].trim()
    const cookieParts: string[] = cookie.split('=')

    const cookieName: string = cookieParts[0]
    const cookieValue: string = cookieParts[1]

    if (cookieName === name) {
      return cookieValue
    }
  }

  return ''
}
