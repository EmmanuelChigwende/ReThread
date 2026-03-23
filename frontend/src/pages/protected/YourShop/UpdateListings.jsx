import React from 'react'
import NavigationFooter from '../../../components/NavigationFooter'
import Header from '../../../components/Header'
import axios from 'axios'
import { useEffect,useState } from 'react'
import  LoadingAnimation from '../../../animations/Loading'
import toast from 'react-hot-toast'
import ProductCard from '../../../components/ProductCard'


const UpdateListings = () => {
  const [loading,setLoading] = useState(true)
  const [listings,setMyListings] =  useState(null)

  useEffect(()=>{
    axios.get("http://localhost:5000/api/getAllMyListing",{headers:{
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }})
    .then(
      (res)=> {
        setMyListings(res.data.data)
        setLoading(false)
      }
    )
    .catch(
      (err)=>{
        toast.error(error.message)
      }
    ).finally(
      ()=> setLoading(false)
    )
  },[])

  return (
    <div>
      <Header/>
      <div className='h-[80vh] overflow-x-scroll '>
        {
          loading ? (<LoadingAnimation/>) : 
          (<div className='grid grid-cols-2 gap-2 p-1' >
            {
              listings?.map((listing)=>
                <div key={listing._id}>
                  <ProductCard listings={listing} />
                  <button className="text-center h-[40px] w-full bg-green-600 text-textDefault rounded-[15px] shadow-lg">
                    Update
                  </button>
                </div>
              )
            }
          </div>)
        }
      </div>
      <NavigationFooter/>
    </div>
  )
}

export default UpdateListings
