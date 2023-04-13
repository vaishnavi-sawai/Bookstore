import React, { useEffect, useState } from 'react'
import Book from './Book'
import Route from './Routes'
import CreateBooks from './CreateBook'


const GetBooks = () => {
  const [text, setText] = useState([])

  useEffect(() => {
    fetch('/get')
      .then(resp => resp.json())
      .then(data => setText(data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = _id => {
    fetch('/delete/' + _id, {
      method: 'DELETE'
    })
    
  }

  const handleUpdate = _id => {
    
  }

  return (<>
      <Route path="/create">
        < CreateBooks/>
      </Route>

    <div style={{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '30px',
    alignItems: 'center',
  }} >
      <button style={{
    display: 'flex ',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '20px',
    alignItems: 'center',
    
    backgroundColor: '	#e6f0f9'
  }}>
        <a href = '/create'><h2>Add Book</h2></a>
      </button>
      </div>
  <div style={{
    display: 'grid',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  }}>

    
      <div >
        {text.map(book => {
          const { _id, name, price, pages, tags, Similar_Books } = book
          return (
            <>
            <div style = {{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '40px',
              marginBottom: '40px',
              padding : '60px',
              marginLeft : '20px',
              backgroundColor: '#e3edf5',
              borderWidth : '10px',
              borderRadius : '20px',
            }}>
             <h3>
             <Book key={_id} {...book}  />
             </h3>
        <br></br>
        <button style = {{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding : '10px',
  backgroundColor: '#e3edf5',
  borderWidth : '2px',
  borderRadius : '20px',
}}onClick={() => handleDelete(_id)}><a href = '/'>Delete</a></button>
        <br></br>
        
              </div>
              
            </>
          )
        })}
      </div>
      </div>
      <br></br>
    </>
  )
}

export default GetBooks
