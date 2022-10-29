import React,{useState, useEffect} from 'react';


function Products(){
    const [data, setData] = useState([]);
    const getData=()=>{
        fetch(data.json,
            {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson){
            console.log(myJson)
            setData(myJson)
        });
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <>
           {data && data.lenght > 0 && data.map((item)=> <p>item.name</p>)}  
        </>
    )
}

export default Products


