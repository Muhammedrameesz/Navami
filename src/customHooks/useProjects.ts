import { useState, useEffect, ReactNode } from "react";
import axios from "axios";


export interface ProjectType {
    pic: string;           
    name: string;
    project_status: string;           
    location: string;
    description: string;     
  }

//   <div dangerouslySetInnerHTML={{ __html: project.description }} />

  

export default function useProjects() {
  const [Projects, setProjects] = useState<ProjectType[]>([]);
  const [error, setError] = useState<ReactNode | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await axios.get(`https://navami.infartechnologies.com/get_projects_api`);
        setProjects(result.data);
        setError(null);
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

    fetchProjects();
  }, []);

  return { Projects, error, loading };
}
