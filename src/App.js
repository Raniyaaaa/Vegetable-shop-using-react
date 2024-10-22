import React,{useState} from "react";
import "./App.css";
import ListItem from "./components/ListItem/ListItem";
import ListOfItem from "./components/ListOfItem/ListOfItem";

const App=()=>{
    
const [itemsList,setItemsList]=useState([]);

const addItemHandler=(eName,ePrice,eQuantity)=>{
  setItemsList((prevList)=>{
    const updatedlist=[...prevList]
    updatedlist.unshift({ name: eName, price: ePrice, quantity: eQuantity, id:Math.random().toString()})
    return updatedlist;
  })
}
const deleteItemHandler=(itemId)=>{
  setItemsList((prevList)=>{
    const updatedlist=prevList.filter((item)=>item.id !=itemId)
    return updatedlist;
  })  
}

const buyItemHandler = (itemId, BuyAmount) => {
  const amount = Number(BuyAmount);
  setItemsList((prevList) => {
      return prevList.map((item) => {
          if (item.id === itemId) {
              return { ...item, quantity: Math.max(0, item.quantity - amount) };
          }
          return item;
      });
  });
};

  return(
    <div>
        <h1 className="App">VEG SHOP</h1>
        <br></br>
        <br></br>
        <div className="App-content">
          <div>
            <ListItem onAddItem={addItemHandler}></ListItem>
            <ListOfItem onDelete={deleteItemHandler}  onBuy={buyItemHandler} items={itemsList}></ListOfItem>
          </div>
          <h3>Total : {itemsList.length}</h3>
        </div>
        
    </div>

  )
}

export default App;