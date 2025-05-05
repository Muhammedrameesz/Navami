import { useEffect, useState } from "react";
import axios from "axios";
import { ReactNode } from "react";

// Define Team type
export interface teamType {
  name: string;
  pic: string;
}

const useTeam = () => {
  const [Team, setTeam] = useState<teamType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ReactNode | null>(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const result = await axios.get("https://navami.infartechnologies.com/get_members_api");
        setTeam(result.data);
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

    fetchTeam();
  }, []);

  return { Team, loading, error };
};

export default useTeam;
