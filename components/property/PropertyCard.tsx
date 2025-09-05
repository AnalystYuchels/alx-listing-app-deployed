import React from "react";

type Property = {
  id: number;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
};

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1">{property.title}</h2>
        <p className="text-gray-600 text-sm mb-2">{property.location}</p>
        <p className="text-indigo-600 font-bold">${property.price}/night</p>
      </div>
    </div>
  );
}
