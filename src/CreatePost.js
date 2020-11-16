import React, { useState } from "react"
import axios from "axios"

const CreatePost = () => {
  const [title, setTitle] = useState("")

  const onSubmitHandler = async e => {
    e.preventDefault()
    await axios.post("http://localhost:4000/posts", { title })
    setTitle("")
  }
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  )
}

export default CreatePost
