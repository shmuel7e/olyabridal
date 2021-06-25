
import { useEffect } from "react";

const useHideHeader = () => {

    useEffect(() => {
        const headerElement = document.getElementById("header");
        headerElement.style.backgroundColor = "black";
        return () => {
            headerElement.style.backgroundColor = "initial";
        }
    }, [])

}

export default useHideHeader;