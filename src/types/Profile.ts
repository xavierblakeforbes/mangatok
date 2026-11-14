import { Manga } from "./Manga"
import { Review, Analysis } from "./Review"
type UserProfile = {
    username : string 
    pfp : string | null 
    favorites: Manga[]
    topManga: Manga | null 
    posts: (Analysis | Review)[]
}
export type {UserProfile}
