import { useEffect, useState } from "react";
import axios from "axios";
import { ReactNode } from "react";

// Define the response type
export interface PicType {
  pic: string; // using string here, not StaticImageData, as the API returns a URL string
}

const useGallery = () => {
  const [gallery, setGallery] = useState<PicType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ReactNode | null>(null);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const result = await axios.get("https://navami.infartechnologies.com/get_gallery_api");
        setGallery(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return { gallery, loading, error };
};

export default useGallery;
