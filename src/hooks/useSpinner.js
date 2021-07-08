import { useCallback, useState } from "react";
import Spinner from "../assets/animation/spinner.png";

const useSpinner = () => {
  const [isLoading, setIsLoading] = useState(true);
  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  return { isLoading, onLoad, Spinner };
};

export default useSpinner;
