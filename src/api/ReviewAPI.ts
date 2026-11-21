import { Review } from "../types/Review";
import axios from "axios";


export async function getReviews(mangaID: number): Promise<Review[]> {
    const response = await axios.get("http://localhost:8080/reviews", {
        params: { mangaID }
    });

    const data: Review[] = response.data;
    return data;
}

export async function addReview(review: Review) : Promise<Review> {
    const response = await axios.post("http://localhost:8080/reviews", review)
    return response.data
}

export async function updateReview(id: string, content : string, stars: number) : Promise<boolean> {
    const response = await axios.put("http://localhost:8080/reviews", {
        content : content, stars : stars
    }, {params : {id}})
    if(response.data){return true}
    return false;
}

export async function deleteReview(id : string) : Promise <boolean> {
    const response = await axios.delete("http://localhost:8080/reviews", {params: {id}})
    if(response.data){return true}
    return false;
}