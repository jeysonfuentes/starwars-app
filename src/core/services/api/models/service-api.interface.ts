export interface IResponseAPI<T> {
  count: number
  next: string
  previous: string
  results: Array<T>
}

