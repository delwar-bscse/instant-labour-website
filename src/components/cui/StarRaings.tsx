"use client"

import React, { useState } from 'react';

const StarRating = ({rating, setRating}:{rating: number, setRating: React.Dispatch<React.SetStateAction<number>>}) => {
  // const [rating, setRating] = useState(3);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
  };

  const handleMouseEnter = (index: number) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`star ${i <= (hoverRating || rating) ? 'active' : ''}`}
          onClick={() => handleClick(i)}
          onMouseEnter={() => handleMouseEnter(i)}
          onMouseLeave={handleMouseLeave}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill={i <= (hoverRating || rating) ? '#FFC823' : 'gray'}
          stroke="none"
        >
          <polygon points="12,0 15,8 23,8 17,13 19,21 12,16 5,21 7,13 1,8 9,8" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="star-rating">
      <div className="stars flex space-x-1">{renderStars()}</div>
      {/* <p>Rating: {rating}</p> */}
    </div>
  );
};

export default StarRating;
