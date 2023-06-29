declare module '*.json' {
  const value: Array<{
    id: number
    description: string
    alt: string
    location: string
    minified: string
  }>
  export default value
}

declare module '*.jpg' {
  const value: string
  export default value
}
