import React from 'react'

export interface CardProps {
  title: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl }) => (
  <div className="border rounded shadow-md p-4">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded mb-2" />
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
)

export default Card;
