import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UseLenis } from "../components/LenisContext";

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = UseLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
};
