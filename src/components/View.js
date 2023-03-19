import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const View = () => {
  const [postid, setpostId] = useState("")
  const [postdata, setpostdata] = useState()
  const navigate = useNavigate()

  const getData = async (e) => {
    e.preventDefault()
    if (postid === "") {
      window.alert("Enter Post ID")
    }
    else{
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${postid}`)
    .then(response => setpostdata(response.data))
    .catch(error => error)
    }
    setpostId("")
  }
  useEffect(() => {
    getData()
  }, [])
  
  // delete data

  const deleteData = async() => 
  {
    return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postid}`)
    .then(response => setpostdata(response.data))
    .catch(error => error)
  }

  return (
    <div className='container'>
      <h1 className='bg-dark text-white p-2'>View Post</h1>
      <form>
      <div className="mb-3">
        <input type="number" className="form-control" placeholder='Enter Post ID' value={postid} onChange={(e) => setpostId(e.target.value)} />
      </div>
      <div className='btnDiv'>
        <button className='btn btn-success' onClick={getData}>FetchPost</button>
        <button className='btn btn-primary' onClick={() => navigate('/createpost')}>CreatePost</button>
      </div>
      </form>
      <div>
        <ul>
          {postdata && postdata.length !== 0 ? (<>
            <div className="card mt-4">
              <div className="card-body">
              <h1></h1>
                <h5 className="card-title">{postdata.title}</h5>
                <p className="card-text">{postdata.body}</p>
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-danger" onClick={deleteData}>Delete</button>
              </div>
            </div>
          </>) : (<h4></h4>)}
        </ul>
      </div>
    </div>
  )
}

export default View
