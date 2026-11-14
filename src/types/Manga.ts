type WebpImages = {
    image_url: string | null
    small_image_url: string | null
    large_image_url: string | null
}
type Authors = {
    mal_id : number 
    type : string
    name : string 
    url : string 
    role : string | null
    chapters : number | null
}

type Manga = {
    mal_id : number
    type : string | null 
    rank : number | null
    title : string 
    score : number | null
    images :  {webp : WebpImages}
    synopsis : string | null
    authors : Authors[]
    

}
type APIResponse = {
    data : Manga []
}

export type {Manga}
export type {APIResponse}
