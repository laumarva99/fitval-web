import { useEffect, useState } from "react";
import type { Plan } from "../../app/types";

// Pide los planes al montar el componente
export function usePlans() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/plans`)
      .then((response) => {
        // fetch no falla con un 404 o un 500: lo comprobamos nosotros
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        return response.json();
      })
      .then((data: Plan[]) => {
        setPlans(data); // han llegado los planes
      })
      .catch(() => {
        setError("No se han podido cargar los planes."); // algo ha fallado
      })
      .finally(() => {
        setLoading(false); // ya no carga, vaya bien o mal
      });
  }, []); // [] = solo una vez, al abrir la página

  return { plans, loading, error };
}