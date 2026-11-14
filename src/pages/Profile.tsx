
import { UserProfile } from "../types/Profile";
import "./Profile.css";

const Profile = () => {

    const userProfile: UserProfile = {
        username: "xavier",
        pfp: "https://i.redd.it/of1ea4l1nj8a1.jpg",
        favorites: [],
        topManga: null,
        posts: [{
            title: "Full metal alchemist",
            content: "Very cool",
            mangaId: 1234,
            datePosted: "11/13/26"
        }]
    }

    return (
        <div className="profile-page">
            <h1>Profile</h1>
            <div className="profile-header">
                <div className="profile-identity">
                    <img className="profile-pfp" src={userProfile.pfp != null ? userProfile.pfp : "https://static.vecteezy.com/system/resources/thumbnails/002/534/006/small_2x/social-media-chatting-online-blank-profile-picture-head-and-body-icon-people-standing-icon-grey-background-free-vector.jpg"} />

                    <h2>{userProfile.username}</h2>
                </div>

                <div className="profile-top-manga">
                    Top Manga: {userProfile.topManga == null ? "This user has not selected a top manga" : userProfile.topManga.title}
                    <img src={userProfile.topManga != null ? (userProfile.topManga.images.webp.small_image_url == null? "https://static.thenounproject.com/png/1554489-200.png" : userProfile.topManga.images.webp.small_image_url ): "https://static.thenounproject.com/png/1554489-200.png"} />
                </div>
            </div>
            <div className="profile-content">
            <div className="profile-favorites">
                Favorites:
                <div className="favorites-row">
                    {userProfile.favorites.map((manga) => <div className="favorite-card">
                        <h2>{manga.title}</h2>
                        <img src={manga.images.webp.small_image_url == null ? "https://static.thenounproject.com/png/1554489-200.png" : manga.images.webp.small_image_url} />
                    </div>)}
                </div>
            </div>
            </div>


            <div className="profile-posts">
                <div className="profile-post-column">
                    Posts

                    Reviews:
                    {userProfile.posts.filter((post) => "stars" in post).map((review) => <div className="post-card">
                        <h2>{review.title} <br /> {review.datePosted}</h2>
                        <h3>Stars: {review.stars} / 5 <br /> {review.content}</h3>
                    </div>)}
                </div>

                <div className="profile-post-column">
                    Analyses:
                    {userProfile.posts.filter((post) => !("stars" in post)).map((analysis) => <div className="post-card">
                        <h2>{analysis.title} <br /> {analysis.datePosted}</h2>
                        <h3>{analysis.content}</h3>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default Profile

