import { useEffect, useState } from "react";


function useFetchapi(apiPath, extra=""){
    var [apidata, setApiData] = useState([]);


    useEffect(()=>{
        fetch(apiPath)
        .then(res=>res.json())
        .then(value=>{
            // console.log(value)
            setApiData(value.results)
        })
    },[extra])

    return(apidata)
}

export default useFetchapi;