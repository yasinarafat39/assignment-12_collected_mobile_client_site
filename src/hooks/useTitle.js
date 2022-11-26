import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Collected Mobile`;
    }, [title]);
}


export default useTitle;