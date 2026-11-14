import { APIResponse } from "../types/Manga";
import { Manga } from "../types/Manga";


export async function getTopManga(): Promise<Manga[]> {

    const response = await fetch("https://api.tenrai.org/v1/top/manga?type=manga&filter=bypopularity&limit=10")
    if(!response.ok){throw new Error (`error ${response.status}`)}
    const data : APIResponse = await response.json()
    return data.data

}

export async function searchManga(query : string): Promise<Manga[]> {
    const response = await fetch(`https://api.tenrai.org/v1/manga?type=manga&q=${query}`)
    if(!response.ok){throw new Error (`error ${response.status}`)}
    const data : APIResponse = await response.json()
    return data.data
}