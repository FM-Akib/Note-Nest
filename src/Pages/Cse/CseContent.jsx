import { useParams } from "react-router-dom";


const CseContent = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            CSSSSSSSSSSSSSSSSSSSSSSSEEEEEEEEEEEEEEEEEh1
            <h1>{id}</h1>

            
        </div>
    );
};

export default CseContent;