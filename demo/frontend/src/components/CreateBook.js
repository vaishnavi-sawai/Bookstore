import React,{useState} from 'react'

const CreateBook = () => {
const [data, setData] = useState({
  name :"",
  pages :0,
  price : 0,
  tags : []
})

const [currTag, setTag] = useState()

let options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
}

const handleSubmit = async() => {
await fetch('http://localhost:5001/create', options)
.then((data) =>console.log(JSON.stringify(data)));
};

  return (<>
  <div style ={{
    display: "block",
    marginTop : "50px",
    marginLeft : "650px",
   
    
  }}>
    <h1>Add Book</h1>
  </div>
  <div style = {{
    display: "flex",
    marginTop : "50px",
    marginLeft : "150px",
    marginRight : "150px",
    marginBottom : "150px",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "space-around"
   
  }}>
  <div
  style={{
    display: "flex",
    width: "100%",
    alignItems: "flex-start",
    justify: "center",
    flexDirection: "column",
    flexWrap: "wrap",
    alignContent: "space-around",
    borderColor : 'black',
    borderWidth : '1px',
    borderStyle : 'dashed',
    borderRadius : '20px',
    padding : '100px',
    
} }
  >
    <label>Book Name</label>
    <br/>
    <input type="text"
    onChange={(e)=> setData( prev => ({...prev, name: e.target.value}))}
    name="name" placeholder="Book Name" required="required" />
    <br/>
    <label>Page Count</label>
    <br/>
    <input type="number"
    onChange={(e)=> setData( prev => ({...prev, pages: parseInt(e.target.value)}))}
     name="pages" placeholder="No of Pages"required/>
    <br/>
    <label>Price</label>
    <br/>
    <input type="number" 
    onChange={(e)=> setData( prev => ({...prev, price: parseInt(e.target.value)}))}
    name="price" placeholder="Enter Price" required/>
    <br/>
    <label>Tags</label>
    <br/>
    <input type="text" 
    onChange={(e)=> setTag( e.target.value)}
    name="tags" placeholder="Enter Tags"required/>
    <button 
    onClick={()=> setData( prev => ({...prev, tags: [...data.tags,currTag]}))}
    >
      +
    </button>

    <p>{data.tags.toString()}</p>
    <br/>
    <br/>
    <br/>
    <button
    onClick={()=> handleSubmit()}
    ><a href = '/'>Submit</a></button>
   
  </div>
  </div>
  </>
  )
}

export default CreateBook
