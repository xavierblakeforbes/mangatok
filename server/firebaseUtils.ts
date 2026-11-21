import { addDoc, collection, getDocs, query, where, deleteDoc,doc, updateDoc} from "firebase/firestore";
import { Review } from "../shared-types/Review";
import { db } from "./firebase";
//Add review to database
export const addReviewToDB = async (review : Review): Promise<string | null> => {
  try {
    const reviews = collection(db, "Reviews");
    const docRef = await addDoc(reviews, review);
    return docRef.id;
  } catch (error) {
    console.error("Error adding review to DB:", error);
    return null;
  }
};

//Fetches reviews for a certain manga id
export const fetchReviews = async (mangaId: number): Promise<Review[]> => {
  try {
    const reviews = collection(db, "Reviews");
    const reviewsQuery = query(reviews, where("mangaId", "==", mangaId));
    const querySnapshot = await getDocs(reviewsQuery);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Review[];

  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
};

//Deletes a certain review 
export const deleteReviewFromDB = async (id : string) : Promise<boolean> => {
    try {
    const review = doc(db, "Reviews", id )
    await deleteDoc(review);
    return true;
  } catch (e) {
    console.error("Error deleting review from database:", e);
    return false;
  }
}

//Updates a certain review 
export const updateReviewFromDB = async(id: string, text: string, rating : 1 | 2 | 3 | 4 | 5 ) : Promise<boolean> => {

    try {
        const review = doc(db,"Reviews",id)
        await updateDoc(review, {content : text,
            stars : rating
        })
        return true;

    } catch (e) {
        console.error("Error updating review from database: ",e)
        return false;
    }
}
