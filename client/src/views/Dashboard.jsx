import React from 'react'
import NavBar from '../components/NavBar'
import Modal from '../components/Modal'
import { useState } from 'react'
import { useStore } from '../context/Store'

const Dashboard = () => {

  const {isModalOpen} = useStore();

  return (
    <div>
       <NavBar/>

       
       {isModalOpen ? <Modal/> :null}
    </div>
  )
}

export default Dashboard