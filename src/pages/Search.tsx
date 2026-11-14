import { Manga } from "../types/Manga";
import { useState } from "react";
import { searchManga } from "../api/MangaAPI";
import "./Search.css"
const Search = () => {


    type errors = string | null
    const start: errors = null
    const mangas: Manga[] = []
    const[search,updateSearch] = useState("")
    const[results,updateResults] = useState(mangas)
    const[loading,updateLoading] = useState(false)
    const[error,updateError] =  useState<errors>(start)

    async function handleSearch () {
        updateError(null)
        if(search.trim() == ""){return}
        updateLoading(true)
        updateResults([])
        try {
            const list = await searchManga(search)
            updateResults(list)
        }
        catch (error) {
            if (error instanceof Error) {
                updateError(error.message)

              }

            else 
            {
            updateError(String(error))

            }
        }
        finally {
        updateLoading(false)
            }
    }

    return (
        <div className="search-page">
        <h1 className="search-title">Find a Manga!</h1>
        <input className="search-input" type="text" id="query" placeholder="Search for Manga" value={search} onChange={(s) => updateSearch(s.target.value)}></input>
        <button className="search-button" type="button" content="Search" onClick={() => handleSearch()} ></button>
        <p className="search-status">
            {loading ? "Loading..." : null}
            <br />
            {error !== null ? error : null}        
        </p>
        <div className="manga-grid">
        {results.map((manga) => (<div className="manga-card" key={manga.mal_id}> 
            <h3 className="manga-title">{manga.title}</h3>
                    <img className="manga-image" src={manga.images.webp.large_image_url ?? "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Iconoir_remove-media-image.svg/960px-Iconoir_remove-media-image.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
        } />
        </div>))
        }
        </div>
        </div>
    )



}

export default Search