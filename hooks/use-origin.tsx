import { useEffect, useState } from "react";

//hook by mieć dostęp do window object, który nie istnieje w SSR
//sprawdzamy czy window jest dostępne, jeśli tak sprawdzamy czy wiemy ze istnieje location jesli tak uzywamy origin
export const useOrigin = () => {
  const [mounted, setMounted] = useState(false);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return "";
  }

  return origin;
};
