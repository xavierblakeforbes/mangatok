import { Review } from "../types/Review";

export async function getReviews(mangaID : number) : Promise<Review[]> {

    const response = await fetch(`http://localhost:8080/reviews/${mangaID}`)
    if(!response.ok){throw new Error (`error ${response.status}`)}
    const data : Review[] = await response.json()
    return data
}