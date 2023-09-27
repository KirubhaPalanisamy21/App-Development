import React from 'react'

export default function Home() {
  const username=JSON.parse(localStorage.getItem("users")).username
  return (
    <div><h2>Welcome!!!{username}</h2>
    </div>
  )
}
