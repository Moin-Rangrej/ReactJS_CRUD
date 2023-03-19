import axios from 'axios'
import React, { useState } from 'react'

const PostExample = () => { 
  const [mydata,setData] = useState({
    title:"",
    body: ""
  })
  const handleInput = (e) => {
    setData({...mydata,[e.target.value]: e.target.value})
  }
  const HandleSubmit = (e) => {
    e.preventDefault()
    return axios.put('https://jsonplaceholder.typicode.com/posts/1',{mydata})
    .then(reponse => console.log(reponse.data))
    .catch((error) => console.log(error))
  } 
  return (
    <div>
    <form onSubmit={HandleSubmit}>
      Title:<input type='text'  onChange={handleInput}/>
      <br/>
      Body:<input type='text'  onChange={handleInput}/>
      <br/>
      <button>submit</button>
      </form>
    </div>
  )
}

export default PostExample
