import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState} from 'react'

import LoadingAnimation from '../../../animations/Loading'
import Header from '../../../components/Header'
import NavigationFooter from '../../../components/NavigationFooter'

const CreateListing = () => {
  return (
    <div className='h-[80vh]'>
      <Header/>
      <div className='h-[80vh]'>
        <h1 className='text-[1.2rem] font-bold pl-2 mb-[20px]'>
          Create New Lisitng
        </h1>
        <div className='h-[300px] shadow-lg rounded-lg'>

        </div>
      </div>
      <NavigationFooter/>
    </div>
  )
}

export default CreateListing
