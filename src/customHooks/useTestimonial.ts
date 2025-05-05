import { useEffect, useState } from "react";
import axios from "axios";
import { ReactNode } from "react";

// Define your testimonial type
export interface tTypes {
    name: string;
    designation: string;
    comment: string;
}

const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState<tTypes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ReactNode | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("https://navami.infartechnologies.com/get_testimonial_api");
        setTestimonials(res.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return { testimonials, loading, error };
};

export default useTestimonials;
