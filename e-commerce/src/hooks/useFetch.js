import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

// apiUrl + `/products?populate=*&[filters][type][$eq]=${type}` 


const useFetch =  (url) => {
const [data, setData] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [err, setErr] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {

            setIsLoading(true);
            const res = await makeRequest.get(url);
         
            setData(res.data.data)
            console.log(res);
            
          } catch (error) {
            setErr(true);
          }
          setIsLoading(false);
        };

        fetchData();

    }, [url]);
    
    return { data, isLoading, err }
}

export default useFetch;