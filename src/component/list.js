import CONFIG from "../globals/config";

function List({name, link}){

    return (    
        <li><a href={CONFIG.BASE_URL+link} className="link-dark rounded">{name}</a></li>
    )
}

export default List;
