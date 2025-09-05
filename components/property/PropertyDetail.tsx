import React from "react";
import Image from "next/image";

interface PropertyDetailProps {
  name: string;
  imageUrl: string;
  description: string;
  address: string;
  price: number;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({
  name,
  imageUrl,
  description,
  address,
  price,
}) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Image
      src={imageUrl}
      alt={name}
      width={600}
      height={400}
      className="w-full h-64 object-cover rounded-md"
    />
    <h2 className="mt-4 text-2xl font-semibold">{name}</h2>
    <p className="text-gray-600 mt-2">{description}</p>
    <p className="text-gray-500 text-sm mt-1">{address}</p>
    <p className="mt-4 font-bold text-lg">${price} / night</p>
  </div>
);

export default PropertyDetail;
