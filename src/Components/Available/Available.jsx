import { use } from "react";
import Playercard from "../PlayerCard/Playercard";

const Available = ({playersPromise, setAvailableBalance, availableBalance, selectPlayers, setSelectedPlayers}) => {
    const availablePlayers = use(playersPromise);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {
                availablePlayers.map(player => <Playercard setSelectedPlayers = {setSelectedPlayers} selectPlayers = {selectPlayers} availableBalance = {availableBalance} setAvailableBalance = {setAvailableBalance} player = {player}></Playercard>)
            }
        </div>
    );
};

export default Available;