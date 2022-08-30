import { useEffect, useState } from "react";

const useNetworkState = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine || false);

  const setOnline = () => {
    setIsOnline(true);
  }

  const setOffline = () => {
    setIsOnline(false);
  }

  useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    }
  }, []);

  return isOnline;
}

export default useNetworkState;