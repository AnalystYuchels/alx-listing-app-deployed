import React from "react";
import Image from "next/image";

interface PropertyCardProps {
  name: string;
  imageUrl: string;
  location: string;
  price: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ name, imageUrl, location, price }) => (
  <div className="border rounded-lg overflow-hidden shadow-sm">
    <Image
      src={imageUrl}
      alt={name}
      width={400}
      height={250}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm">{location}</p>
      <p className="mt-2 font-semibold">${price} / night</p>
    </div>
  </div>
);

export default PropertyCard;
