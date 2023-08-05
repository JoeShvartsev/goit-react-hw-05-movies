import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'Api/fetchByReviewsDetails';
import { useCallback } from 'react';

export const Review = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  
  const fetchData =useCallback( async () => {
    const data = await getReviews(movieId);
    setReviews(data.results);
  },[movieId]);

  useEffect(() => {
    fetchData();
    
  }, [movieId,fetchData]);

  

  return (
    <>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <div key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </div>
        ))
      ) : (
        <p>Sorry, no reviews for this movie yet</p>
      )}
    </>
  );
};




