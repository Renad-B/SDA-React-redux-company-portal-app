import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./companiseSlice";
import { RootState } from "../store";

const Companies=()=>{

const {data, isLoadeing, error} = useSelector((state:RootState)=>state.companiseR);

const dispatch = useDispatch()

useEffect (()=>{
dispatch(fetchData());
},[dispatch]);

if(isLoadeing){
    return <p>Loading the data</p>
}

if(error){
    return <p>{error.message}</p>
}


    return ( 
         <div>
         <h2>Companies App</h2>
         {data.length>0&&data.map((company)=> {
            return <div key={company.id}>
                <h2>{company.id}</h2>
            </div>
         })}
        </div>
        )
   
};


export default Companies;