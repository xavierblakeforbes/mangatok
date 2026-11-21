type Review = {
    id: string;
    username: string;
    mangaId: number;
    title: string;
    content: string;
    stars: 1 | 2 | 3 | 4 | 5;
    datePosted: string;
}
type Analysis = {
    title: string 
    content: string 
    mangaId: number
    datePosted: string
}
export type {Review}
export type {Analysis}