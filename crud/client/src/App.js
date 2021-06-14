import React, {useState, useEffect} from 'react'
import './App.css';
import Axios from 'axios' 

function App() {

  const [movieName, setMovieName] = useState('')
  const [movieReview, setmovieReview] = useState('')
  const [movieReviewList, setmovieReviewList] = useState([])
  const [updateMovieReview, setupdateMovieReview] = useState('')

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then( (response) => {
      setmovieReviewList(response.data)
  })
  }, [])

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: movieReview,
    }).then(() => {
      Axios.get("http://localhost:3001/api/get").then( (response) => {
        setmovieReviewList(response.data)
      })}).catch( (error) => {
      console.log(error)
    })
  }

  const deleteReviewCard = (movieNameToDeleted, movieReviewToDeleted) => {
    Axios.post("http://localhost:3001/api/delete", {
      name: movieNameToDeleted,
      review: movieReviewToDeleted
    }).then( (success) => {
      Axios.get("http://localhost:3001/api/get").then( (response) => {
        setmovieReviewList(response.data)
    })}).catch( (error) => {
      console.log(error)
    })
  }

  const updatReview = (id) => {

    Axios.post("http://localhost:3001/api/update", {
      id: id,
      review: updateMovieReview
    }).then( (success) => {
      console.log(success)
      Axios.get("http://localhost:3001/api/get").then( (response) => {
        setmovieReviewList(response.data)
    })}).catch( (error) => {
      console.error(error)
    })

  }

  return (
    <div className="App">

      <h1>CRUD APPLICATION</h1>

      <div className='form'>

        <label>Movie Name :- </label>
        <input 
        type='text' 
        onChange={
          (event) => {
          setMovieName(event.target.value)
        }}/>

        <label>Review :- </label>
        <input 
        type='text' 
        onChange={(event) => {
          setmovieReview(event.target.value)
        }}/>

        <button onClick={submitReview}>Submit</button>

      </div>

      <div className='reviews'>
        {movieReviewList.map( (data) => (
          <div className='review' key={data.id}>
            <h1>Movie Name : {data.movie_name} </h1>
            <p>Movie Review : {data.movie_review}</p>
            <button onClick={() => deleteReviewCard(data.movie_name, data.movie_review)}>Delete</button><br/>
            <input 
            type='text' 
            onChange={ (event) => {
              setupdateMovieReview(event.target.value)
            }}/><br/>
            <button onClick={() => updatReview(data.id)}>Update</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
