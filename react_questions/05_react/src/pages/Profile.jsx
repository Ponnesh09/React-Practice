import React from 'react'
import {useParams} from 'react-router-dom'


const Profile = () => {
     // Extract dynamic parameters from the URL
    const {username} = useParams();
  return (
    <div>
      <h1>Profile page</h1>
      <h2>profile page for {username}</h2>
    </div>
  )
}

export default Profile
