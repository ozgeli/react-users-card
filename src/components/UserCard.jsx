import React from 'react'
import '../styles/UserCard.scss'

const UserCard = ({user}) => {
  return (
    <div className="user-card">
        <img src={ `https://robohash.org/${user.id}?set=set5`} alt="{user.name}" />
        <h1>{user.name}</h1>
        <p>E-Mail: {user.email}</p>
    </div>
  )
}

export default UserCard