import React, { useEffect, useState } from 'react' 
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import MainView from '../../components/MainView'
import { useLocation, useParams } from 'react-router-dom'
import Profile from './Profile'
import Suscription from './Suscription'
 

 

const Home = () => {
 
  const params = useParams()

  const id = params.id;

 
 
const [view,setview] = useState();

useEffect(() =>{
 if (id === "suscription") {
  setview(<Suscription />)
 } 
},[id])

const [loading, setloading] = useState(false);
useEffect(() => {
  setloading(true);

  setTimeout(() => {
    setloading(false);
  }, 3000);
}, []);

 
  return (
    <>
   {
    
     <> 
      <Navbar /> 
       <Sidebar />
       {view}

     </>
    
    }
    </>
  )
}

export default Home