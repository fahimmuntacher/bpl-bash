import { Suspense } from 'react'
import './App.css'
import Available from './Components/Available/Available'
import Navbar from './Components/Navbar'
import Selected from './Components/Selected/Selected'
import Loading from './Components/loading/Loading'
function selectedPlayers () {
  return fetch("/players.json").then(res => res.json());
}

function App() {
  const playersPromise = selectedPlayers()
  return (
    <>
      <Navbar></Navbar>

      <div>
        <h1>Available Players</h1>
        <div>
          <button class="btn ">Available</button>
          <button class="btn">Selected</button>
        </div>
      </div>

      <div>
        {/* <div class="card bg-gray-100 w-96 border-2 border-gray-400 shadow-sm">
          <figure className='p-3'>
            <img className='rounded-2xl'
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <div>
              <h2 class="card-title"><img className='border-2 rounded-[50%] p-1' src="https://i.ibb.co.com/DDXsgxCY/Group.png" alt="" />Card Title</h2>
            </div>
            <div className='flex justify-between items-center border-b-2 pb-3 border-gray-300'>
              <div className='flex items-center gap-2.5 bg-gray-100 border-2 p-1 border-gray-300 rounded-lg'>
                <img src="https://i.ibb.co.com/5Xq4r0gz/Group.png" alt="" />
                <p className='text-xl'>India</p>
              </div>
              <div>
                <button class="btn text-lg">All Rounder</button>
              </div>
            </div>
            
            <div class="card-actions flex justify-between items-center">
              <div>
                <div className='flex flex-col space-y-1.5'>
                  <h1 className='font-bold text-xl'>Rating: <span className='text-2xl'>5.00</span></h1>
                    <h1 className='font-bold text-xl text-gray-600'>Left-Hand-Bat</h1>
                    <h2 className='font-bold text-xl'>Price: $<span>1500000</span></h2>
                  </div>
                
                  
              </div>
                <button class="btn bg-gray-200 border-2 border-gray-400">Choose Player</button>
            </div>
          </div>
        </div> */}
      </div>

      <Suspense fallback = {<Loading></Loading>}>
        <Available playersPromise = {playersPromise}></Available>
      </Suspense>

      {/* <Selected></Selected> */}
    </>
  )
}

export default App
