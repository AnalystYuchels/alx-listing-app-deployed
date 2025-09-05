import React from "react";

type Property = {
  id: number;
  title: string;
  location: string;
  price: number;
  description: string;
  imageUrl: string;
};

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-3xl mx-auto p-6 border rounded-2xl shadow-md">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-64 object-cover rounded-xl mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-2">{property.location}</p>
      <p className="text-indigo-600 font-bold mb-4">${property.price}/night</p>
      <p className="text-gray-700 leading-relaxed">{property.description}</p>
    </div>
  );
}
