import React from 'react'
import Header from "../../components/Header";
import NavigationFooter from "../../components/NavigationFooter";
import LoadingAnimation from '../../animations/Loading';

const Profile = () => {
  return (
    <div className='w-full h-full'>
      <Header/>
      <div className='h-[80vh] overflow-scroll'>
        <LoadingAnimation/>
      </div>
      <NavigationFooter/>
    </div>
  )
}

export default Profile
