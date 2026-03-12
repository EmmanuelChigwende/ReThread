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
      <div className='h-[80vh] '>
        <h1 className='text-[1.2rem] font-bold pl-2 mb-[20px]'>
          Create New Lisitng
        </h1>
        <div className='min-h-[300px] p-2 shadow-lg rounded-lg grid gap-2'>
          <div className='grid grid-cols-1'>
            <label htmlFor="">
              Title
            </label>
            <input type="text" className='outline outline-2 outline-secondary' />
          </div>
          <div className='grid grid-cols-1'>
            <label htmlFor="">
              Description
            </label>
            <input type="text" className='outline outline-2 outline-secondary' />
          </div>
          <div className='grid grid-cols-1'>
            <label htmlFor="">
              Price
            </label>
            <input type="text" className='outline outline-2 outline-secondary' />
          </div>
          <div className='flex gap-4 items-center'>
            <label htmlFor="">
              Currency
            </label>
            <select name="currency" id="" className='w-[100px] bg-secondary p-1 rounded-md text-textDefault' >
              <option value="currency">Usd</option>
              <option value="currecncy">Zig</option>
            </select>
          </div>
          <div className='flex gap-4 items-center'>
            <label htmlFor="">
              Category
            </label>
            <select name="category" id="" className=' w-[100px] bg-secondary p-1 rounded-md text-textDefault'>
              <option value="category">tops</option>
              <option value="category">bottoms</option>
              <option value="category">one piece</option>
              <option value="category">outer wear</option>
              <option value="category">foot wear</option>
              <option value="category">accessories</option>
              <option value="category">other</option>
            </select>
          </div>
          <div className='flex gap-12 items-center'>
            <label htmlFor="">Size</label>
            <select name="size" id="" className='w-[100px] bg-secondary text-textDefault rounded-md p-1'>
              <option value="size">S</option>
              <option value="size">M</option>
              <option value="size">L</option>
              <option value="size">XL</option>
              <option value="size">XXL</option>
            </select>
          </div>
          <div className='flex gap-3 items-center'>
            <label htmlFor="">Condition</label>
            <select name="condition" id="" className='w-[100px] bg-secondary text-textDefault rounded-md p-1'>
              <option value="condition">new</option>
              <option value="condition">good</option>
              <option value="condition">okay</option>
            </select>
          </div>
          <div>
            <input type="file" accept='.png' />
          </div>

          <div>
            <button className='font-bold bg-secondary w-full p-2 text-textDefault rounded-md'>
              Create
            </button>
          </div>
        </div>
      </div>
      <NavigationFooter/>
    </div>
  )
}

export default CreateListing
