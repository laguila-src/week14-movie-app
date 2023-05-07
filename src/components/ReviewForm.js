import React, { useState } from "react";
import ReviewList from "./ReviewList";


//	ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. 
//	When submitted, the review should be added to the movie. All this data can be stored in 
//	an array, no networking or database needed for this assignment.
export default function ReviewForm() {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState('');

  return (
    <>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        setReviews([{
          id: reviews.length,
          text: text
        }, ...reviews]);
      }}>Submit</button>

      <h5>Reviews:</h5>
      <ul className="reviews-list">
        {reviews.map(item => (
			    <li key={item.id}>
            {`"${item.text}"`}
          </li>
        ))}
      </ul>
      <ReviewList reviewList={reviews} />
    </>
  );
}