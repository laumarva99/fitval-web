import { useEffect, useState } from "react";

type LoadingProps = {
  text: string;
};

// "Cargando...". Si pasan 5 segundos, avisa de que el servidor se está despertando
export function Loading({ text }: LoadingProps) {
  const [slow, setSlow] = useState(false);

  useEffect(() => {
    // A los 5 segundos, avisamos de que va lento
    const timeout = setTimeout(() => {
      setSlow(true);
    }, 5000);

    // Limpieza: si el componente desaparece antes, cancelamos el temporizador
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <p className="loading">
      {text}
      {slow && " El servidor se está despertando: puede tardar hasta un minuto."}
    </p>
  );
}