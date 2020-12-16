import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const naykos = ['Salman khan', 'Shakib khan', 'Alomgin khan', 'Joshim khan', 'Bappi khan', 'Manna khan']
  const products = [
    {name: 'Photoshop', price:'$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere E1', price: '$249.99'},
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>i am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            naykos.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Product product={product}></Product>)
        }
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
         {
           users.map(user => <li>{user.name}</li>)
         }
      </ul>
    </div>
  )
}
function Product(props){
     const productStyle = {
       border:'1px solid gray',
       borderRadius:'5px',
       backgroundColor:'lightgray',
       height:'200px',
       width:'200px',
       margin:'10px',
       float:'left',
     }
     const {name, price} = props.product;
  return (
    <div style={productStyle}>
       <h3>{name}</h3>
       <h5>{price}</h5>
       <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{ width:'400px', border:'2px solid red', margin:'10px', padding:'10px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  )
}


export default App;
