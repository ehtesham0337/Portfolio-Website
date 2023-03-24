import { useEffect, useState } from "react";

export default function useWindowSize() {
  const init = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(init);

  function handleWindowSizeChange() {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth - 8);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width;
}
