import React from 'react'
import { Link } from "react-router-dom";
import Metalslider from './Metalslider.jsx'

export default function Metal() {


  return (
    <>
     <section className='container'>

        <div className="metal-section">

         <h3>sri mahalakshmi metals</h3>
    
        <Metalslider/>

            <Link to="/AllProduct"><button className='button2'> explore more</button></Link>
        </div>


     </section>

    </>
  )
}
