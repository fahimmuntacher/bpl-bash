import SelectedCart from "../SelectedCard/SelectedCart";

const Selected = ({selectPlayers, handleCardDelete, setToggle}) => {
    
    return (
        <>
       
            {
                selectPlayers.map(select => <SelectedCart handleCardDelete = {handleCardDelete} select = {select}></SelectedCart>)
            }

            <button onClick={() => setToggle(true)} className="btn border-1 border-gray-400 text-xl bg-[#E7FE29]">Add More</button>
        </>
    );
};

export default Selected;