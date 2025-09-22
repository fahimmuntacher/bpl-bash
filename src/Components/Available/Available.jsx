import { use } from "react";

const Available = ({playersPromise}) => {
    const availablePlayers = use(playersPromise);
    console.log(availablePlayers);
    return (
        <div className="grid grid-cols-3 gap-2">
            {
                availablePlayers.map(player => <div class="card bg-gray-100 w-96 border-2 border-gray-400 shadow-sm">
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
                   
                    <h2 className='font-bold text-xl'>Price: $<span>{player.price}</span></h2>
                  </div>
                
                  
              </div>
                <button class="btn bg-gray-200 border-2 border-gray-400">Choose Player</button>
            </div>
          </div>
        </div>)
            }
        </div>
    );
};

export default Available;