import React,{useState} from "react";
import Button from "../UI/Button/Button";
const ListItem=(props)=>{
    
  const [name,setName]=useState("")
  const [price,setPrice]=useState("")
  const [quantity,setQuantity]=useState("")

  const addToListHandler=(event)=>{
    event.preventDefault();
    if(name.trim().length===0 || price<=0 || quantity===0){
      return;
    }

    props.onAddItem(name,price,quantity)
    setName("");
    setPrice("");
    setQuantity("");
  }

  const nameChangeHandler=(event)=>{
    setName(event.target.value)
  }

  const priceChangeHandler=(event)=>{
    setPrice(event.target.value)
  }

  const quantityChangeHandler=(event)=>{
    setQuantity(event.target.value)
  }

  return(
    <div>
        <div>
            <label htmlFor="name">Name : </label>
            <input type="text" id="name" placeholder="ex-Potato" value={name} onChange={nameChangeHandler}></input>
            <br></br>
          </div>
          <div>
            <label htmlFor="price">Price : </label>
            <input type="number" id="price" placeholder="ex-10" value={price} onChange={priceChangeHandler}></input>
            <br></br>
          </div>
          <div>
            <label htmlFor="name">Quantity : </label>
            <input type="number" id="name" placeholder="0" value={quantity} onChange={quantityChangeHandler}></input>
            <br></br>
            <br></br>
          </div>
          <div>
          <Button type="submit" onClick={addToListHandler}>ADD TO SHOP</Button>
        </div>
    </div>
  )
}

export default ListItem;

