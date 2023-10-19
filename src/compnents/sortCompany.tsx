import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { sortCompanise } from "./companiseSlice";

const SortCompany = () => {
     
    const dispatch =useDispatch();
    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) =>{
     dispatch(sortCompanise(event.target.value));
    };

    return (
    <div>
        <label htmlFor="sort">Sort by: </label>
        <select name="sort" id="sort" onChange={handleOptionChange}>
            <option value="id" defaultValue="Id">Id</option>
            <option value="login">Login</option>
        </select>
    </div>
    );
};

export default SortCompany;