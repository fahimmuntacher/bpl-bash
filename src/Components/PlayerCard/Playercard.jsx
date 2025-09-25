import { useState } from "react";
import { toast } from "react-toastify";

const Playercard = ({player, setAvailableBalance, availableBalance, setSelectedPlayers, selectPlayers}) => {
    const [selected, setSelected] = useState(false); 
    return (
          <div class="card bg-gray-100 sm:w-auto w-11/12 border-2 border-gray-400 shadow-sm mx-auto">
          <figure className='p-3'>
            <img className='rounded-2xl h-[300px] object-cover'
              src={player.playerImg}
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <div>
              <h2 class="card-title text-2xl font-bold"><img className='border-2 rounded-[50%] p-1' src="https://i.ibb.co.com/DDXsgxCY/Group.png" alt="" />{player.playerName}</h2>
            </div>
            <div className='flex justify-between items-center border-b-2 pb-3 border-gray-300'>
              <div className='flex items-center gap-2.5 bg-gray-100 border-2 p-1 border-gray-300 rounded-lg'>
                <img src="https://i.ibb.co.com/5Xq4r0gz/Group.png" alt="" />
                <p className='text-xl'>{player.PlayerCountry}</p>
              </div>
              <div>
                <button class="btn text-lg">{player.playerRole}</button>
              </div>
            </div>
            
            <div class="card-actions flex justify-between items-center">
              <div>
                <div className='flex flex-col space-y-1.5'>
                  <h1 className='font-bold text-xl'>Rating: <span className='text-2xl'>{player.rating}</span></h1>
                   
                    <h2 className='font-bold text-xl'>Price: $<span id="player-price">{player.price}</span></h2>
                  </div>
                
                  
              </div>
                <button disabled = {selected} onClick={
                    () => {
                        if(availableBalance < player.price){
                           return toast('Not enough money!!')
                        }
                        else if(selectPlayers.length >= 6){
                            return toast("You've reach the limit")
                        }
                        setSelected(true)
                        // const playerPrice = Number(document.getElementById('player-price').innerText)
                        setAvailableBalance(availableBalance - player.price); 

                        setSelectedPlayers([...selectPlayers, player])
                    }

                } class="btn bg-gray-200 border-2 border-gray-400">{selected === true ? "Selected" : "Choose Player"}</button>
            </div>
          </div>
        </div>
    );
};

export default Playercard;