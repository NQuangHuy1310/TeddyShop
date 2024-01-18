export interface route {
  path: string
  element: React.ComponentType
  layout: React.ComponentType<any>
  children?: route[]
}
