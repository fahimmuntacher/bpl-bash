import { Suspense, useState } from 'react'
import './App.css'
import Available from './Components/Available/Available'
import Navbar from './Components/Navbar'
import Selected from './Components/Selected/Selected'
import Loading from './Components/loading/Loading'
import { ToastContainer } from 'react-toastify';

const playersPromise = selectedPlayers();
function selectedPlayers () {
  return fetch("/players.json").then(res => res.json());
}

function App() {
 
  const [toggle, setToggle] = useState(true); 
  const [availableBalance, setAvailableBalance] = useState(150000);
  const [selectPlayers, setSelectedPlayers] = useState([]); 

  function handleCardDelete (price, id){
    
      const filterData = selectPlayers.filter(ply => id !== ply.playerId);
      setSelectedPlayers(filterData) 
      setAvailableBalance(availableBalance + price)
      
     
  }
  // console.log(selectPlayers.length);

  return (
    <>
      <Navbar availableBalance = {availableBalance}></Navbar>

      <div>
        
        <div className='flex justify-between items-center my-3'>
            <h1 className='text-2xl font-bold'>{toggle? "Available Players" : `Selected Players (${selectPlayers.length}/6)`}</h1>
          <div>
            <button onClick={() => setToggle(true)} class={`btn border-1 border-r-0 rounded-l-xl rounded-r-0 shadow-sm text-lg ${toggle === true? "bg-[#E7FE29]": ""}`}>Available</button>
            <button onClick={() => setToggle(false)} class={`btn border-1 border-l-0 rounded-r-xl shadow-sm text-lg ${toggle === false? "bg-[#E7FE29]": ""}`}>Selected ({selectPlayers.length})</button>
          </div>
        </div>
      </div>

      {
        toggle === true? <Suspense fallback = {<Loading></Loading>}>
        <Available setSelectedPlayers = {setSelectedPlayers} selectPlayers = {selectPlayers} availableBalance = {availableBalance} setAvailableBalance = {setAvailableBalance} playersPromise = {playersPromise}></Available>
      </Suspense> : <Selected toggle = {toggle} setToggle = {setToggle} handleCardDelete = {handleCardDelete} selectPlayers = {selectPlayers}></Selected>
      }

      

     <ToastContainer></ToastContainer>
    </>
  )
}

export default App
