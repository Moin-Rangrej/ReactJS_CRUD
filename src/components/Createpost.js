import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Createpost = () => {
    const [values, setValues] = useState({
        title: "",
        body: ""
    })
    const nevigate = useNavigate()
    const [newdata,setNewdata] = useState('')
    const { title, body } = values
    const createPost = async (e) => {
        e.preventDefault()
         await axios.post('https://jsonplaceholder.typicode.com/posts',
            {
                title: values.title,
                body: values.body
            })
            .then(response => response.data)
            .then(mydata => setNewdata(mydata))
    }

    const showData = () => {
        return (
            <>
                {newdata !== '' ? <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{body}</p>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                    </div>
                </div> : ''}
            </>
        )
    }
    return (
        <div>
            <form>
                <div className="mb-3 container mt-4">
                    <h1 className='bg-dark text-white'>Create Post</h1>
                    <input type="text" className="form-control mt-4" placeholder='Enter Post Title' value={title} onChange={(e) => setValues({ ...values, title: e.target.value })} />
                    <div className="form-floating mt-4">
                        <textarea className="form-control" placeholder="Leave a comment here" value={body} onChange={(e) => setValues({ ...values, body: e.target.value })} />
                        <label htmlFor="floatingTextarea">Comments</label>
                    </div>
                    <button type="submit" className="btn btn-success mt-4" onClick={createPost}>Submit</button>
                    <button type="submit" className="btn btn-primary mt-4" onClick={() => nevigate('/')}>Go Home</button>
                </div>
            </form>
                {showData()}
{/* {
    newdata != '' ? <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{body}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div> : ''

} */}

        </div>
    )
}

export default Createpost
