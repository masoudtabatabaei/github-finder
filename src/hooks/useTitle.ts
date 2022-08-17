import { useEffect } from "react";

const useTitle = (title:string) => {
    useEffect(() => {
        const prevTitle = document.title;
        document.title = title;
        return () => {
            document.title = prevTitle;
        }
    },[]);
}

export default useTitle;