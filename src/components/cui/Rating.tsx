"use client";
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface RatingProps {
  value: number;
  size?: number; // size in px
  color?: string; // Tailwind color
  className?: string;
  showValue?: boolean;
  maxStars?: number;
  onRatingChange?: (value: number) => void;
  editable?: boolean;
}

const Rating: React.FC<RatingProps> = ({
  value,
  size = 24,
  color = "text-amber-400",
  className = "",
  showValue = false,
  maxStars = 5,
  onRatingChange,
  editable = false,
}) => {
  const clampedValue = Math.min(Math.max(value, 0), maxStars);

  // Interactive state
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleClick = (newValue: number) => {
    if (editable && onRatingChange) onRatingChange(newValue);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (!editable) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const isHalf = e.clientX - rect.left < rect.width / 2;
    setHoverValue(index + (isHalf ? 0.5 : 1));
  };

  const displayValue = hoverValue ?? clampedValue;
  const fullStars = Math.floor(displayValue);
  const hasHalfStar = displayValue - fullStars >= 0.5;
  const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div
      className={`flex items-center gap-1 ${className} ${
        editable ? "cursor-pointer" : "cursor-default"
      }`}
      onMouseLeave={() => setHoverValue(null)}
    >
      {/* Full stars */}
      {Array.from({ length: fullStars }, (_, i) => (
        <div
          key={`full-${i}`}
          onClick={() => handleClick(i + 1)}
          onMouseMove={(e) => handleMouseMove(e, i)}
          className="transition-transform hover:scale-110"
        >
          <FaStar className={`${color}`} style={{ width: size, height: size }} />
        </div>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <div
          onClick={() => handleClick(fullStars + 0.5)}
          onMouseMove={(e) => handleMouseMove(e, fullStars)}
          className="transition-transform hover:scale-110"
        >
          <FaStarHalfAlt
            className={`${color}`}
            style={{ width: size, height: size }}
          />
        </div>
      )}

      {/* Empty stars */}
      {Array.from({ length: emptyStars }, (_, i) => (
        <div
          key={`empty-${i}`}
          onClick={() =>
            handleClick(fullStars + (hasHalfStar ? 1 : 0) + i + 1)
          }
          onMouseMove={(e) =>
            handleMouseMove(e, fullStars + (hasHalfStar ? 1 : 0) + i)
          }
          className="transition-transform hover:scale-110"
        >
          <FaRegStar
            className={`${color}`}
            style={{ width: size, height: size }}
          />
        </div>
      ))}

      {/* Optional numeric value */}
      {showValue && (
        <span className="ml-2 text-gray-600 font-medium">
          {clampedValue.toFixed(1)}
        </span>
      )}
    </div>
  );
};

export default Rating;
