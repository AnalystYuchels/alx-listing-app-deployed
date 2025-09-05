import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

type Property = {
  id: number;
  title: string;
  location: string;
  price: number;
  description: string;
  imageUrl: string;
};

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">Loading property details...</p>;
  }

  if (!property) {
    return <p className="text-center mt-10 text-red-500">Property not found</p>;
  }

  return <PropertyDetail property={property} />;
}
