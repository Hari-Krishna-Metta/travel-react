import { useState } from "react";

function Cards({id,name,info,image,price,removeTour}) {
    const[readmore,setReadmore] = useState(false);
    function handlereadmore() {
        const newState = !readmore;
        setReadmore(newState);
    }
    const description = readmore?info:`${info.substring(0,200)}...`;
    return (
        <>
        <div className="card">
        <img src={image} className = "image" alt=""></img>
        <h4>{price}</h4>
        <h4>{name}</h4>
        <div>
        {description}
        <span onClick={handlereadmore} className="read-more">{readmore?`show less`:`read more`}</span>
        </div>
        <button onClick={() => removeTour(id)} className="btn">Not Interested</button>
        </div>
        </>
    );
}
export default Cards;