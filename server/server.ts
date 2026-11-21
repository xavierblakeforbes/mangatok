import express from 'express';
import cors from 'cors'
import { fetchReviews,deleteReviewFromDB,updateReviewFromDB,addReviewToDB } from './firebaseUtils';




const app = express();
const port = 8080
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get("/reviews", async (req, res) => {
  try {
    const { mangaID } = req.query;
    const reviews = await fetchReviews(Number (mangaID));
    res.json(reviews);
  } catch (e: unknown) {
    res.status(500).json({ error: e });
  }
});



// POST - will post a review/analysis 
app.post("/reviews", async (req, res) => {
  try {
    const review  = req.body;
    if (!review.title || !review.username || !review.mangaId || !review.content || !review.stars || !review.datePosted) {
      throw new Error("Reviews must have a username, mangaID, title, content, stars, and datePosted");
    }
    const reviewID = await addReviewToDB(review);
    if (!reviewID) {
      throw new Error("Failed to add review");
    }
    res.status(201).json({ id: reviewID, ...review });
  } catch (e: unknown) {
    res.status(400).json({ error: e });
  }
});


//Delete - will delete a review/analysis

app.delete("/reviews", async (req, res) => {
  try {
    const {id} = req.query;
    const success = await deleteReviewFromDB(String (id));
    if (!success) {
      throw new Error("Failed to delete review");
    }
    res.status(200).json({ message: "Review deleted successfully" });
  } catch (e: unknown) {
    res.status(400).json({ error: e });
  }
});

//Update - will update a review/analysis

app.put("/reviews", async(req,res) => {

    try {
        const {id} = req.query
        const {content} = req.body
        const {stars} = req.body
        if(stars > 5 || stars < 1){throw new Error("Ratings must be from 1-5")}
        const success = await updateReviewFromDB(String (id) ,content, stars)
        if (!success) {
            throw new Error("Failed to update review")
        }
        res.status(200).json({message : "Review updated successfully"})
    } catch ( e: unknown) {
        res.status(400).json({error: e})
    }

} )

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});