import express from 'express';
import cors from 'cors'

type Review = {
    id: number;
    username: string;
    mangaId: number;
    title: string;
    content: string;
    stars: number;
    datePosted: string;
}

const reviews : Review[]= [{
    id: 1,
    username: "xavier",
    mangaId: 1234,
    title: "Tokyo Ghoul",
    content: "One of my favorite manga.",
    stars: 5,
    datePosted: "2026-11-14"
}] 
const app = express();
const port = 8080
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/reviews/:mangaID',(req,res) => {
    res.send(reviews.filter((review) => {return review.mangaId == Number(req.params.mangaID)}))
})

app.post('/reviews', (req,res) => {
    try{
        reviews.push(req.body)
        console.log("Successfully added review")
        res.send("Successfully Posted!")
    }
    catch (error) {
        console.log("Couldnt add review" )
        res.send("Error Posting")
    }
    

})

// PUT - will edit a review/analysis 
//Delete - will delete a review/analysis
//Will use firebase 

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});