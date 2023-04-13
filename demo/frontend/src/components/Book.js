import React, {useState }from 'react'

const Book = book => {
  const { _id,name, price, pages, tags, Similar_Books } = book
  const [curr,setCurr] = useState(book);

  let options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(curr, null, 2)
}
  const handleUpdate = async()=>{
    await fetch('http://localhost:5001/update',options)
    .then((data) =>console.log(JSON.stringify(data)));

  }

  return (<>
    <div style={{ display: 'flex', width:"100%" ,alignItems:"center", justifyContent: "space-around"}}>
      <div key={name}>
        <p>Name :
          <br />
        <input style = {{
          width: "100%",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "10px",
          margin: "5px",
          fontSize: "30px",
        }} placeholder={curr.name} 
        onChange={(e)=> setCurr( prev => ({...prev, name : e.target.value}))}
        ></input>
        </p>
        <p>$Price :
          <br />
        <input style = {{
          width: "100%",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "10px",
          margin: "5px",
          fontSize: "30px",
        }} placeholder={curr.price}
        onChange={(e)=> setCurr( prev => ({...prev, price: parseInt(e.target.value)}))}
        ></input></p>

        <p>Pages :
          <br />
        <input style = {{
          width: "100%",
          border: "1px solid black",
          borderRadius: "5px",
          padding: "10px",
          margin: "5px",
          fontSize: "30px",
        }} placeholder={curr.pages}
        onChange={(e)=> setCurr( prev => ({...prev, pages: parseInt(e.target.value)}))}
        ></input></p>

        <p>
          TAGS : 
          <br />
          {curr.tags.map(book => {
            return <input style = {{
              width: "100%",
              border: "1px solid black",
              borderRadius: "5px",
              padding: "10px",
              margin: "5px",
              fontSize: "30px",
            }} placeholder = {book}
            onChange={(e)=> setCurr( prev => ({...prev, tags: e.target.value}))}
            ></input>
          })}
        </p>
        <p>
    
          {curr.Similar_Books.map(sb => {
            const { books } = sb
            return (
              <p>
                Similar Books:
                <h3>
                  {books.map(bookName => (
                    <input style = {{
                      width: "100%",
                      border: "1px solid black",
                      borderRadius: "5px",
                      padding: "10px",
                      margin: "5px",
                      fontSize: "30px",
                    }} placeholder={bookName}
                    ></input>
                  ))}
                </h3>
              </p>
            )
          })}
        </p>
        
      </div>
    </div>
<div style = {{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding : '10px',
  backgroundColor: '#e3edf5',
  borderWidth : '2px',
  borderRadius : '20px',
}} >
<br></br>
<button 
style = {{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding : '10px',
  backgroundColor: '#e3edf5',
  borderWidth : '2px',
  borderRadius : '20px',
}}onClick={() => handleUpdate(_id)}><a href = '/'>Update</a></button>
<br></br>
</div>
</>
  )
}

export default Book
