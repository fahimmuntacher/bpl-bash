
const SelectedCart = ({select, handleCardDelete}) => {
    function cardDelete () {
        handleCardDelete(select.price ,select.playerId)
    }

    return (
        <div>
            <div className="border-1 mb-2.5 border-gray-300 shadow-sm flex justify-between items-center p-3 rounded-xl">
                <div>
                    <div className="flex items-center gap-5">
                        <img className="h-[100px] w-[120px] object-cover rounded-xl" src= {select.playerImg} alt="" />
                        <div>
                            <h1 className="font-bold text-2xl">{select.playerName}</h1>
                            <h2 className="font-semibold text-lg text-gray-500">{select.playerRole}</h2>
                        </div>
                    </div>
                </div>
                <div className="cursor-pointer" onClick={cardDelete}>
                    <img src="https://i.ibb.co.com/spJvy4TN/Frame.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedCart;