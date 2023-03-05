export type Reaction = {
  thumbsUp: number
  wow: number
  heart: number
  rocket: number
  coffee: number
}
export type Post = {
  id: string
  title: string
  body: string
  date: string
  author: number
  reaction: Reaction
}