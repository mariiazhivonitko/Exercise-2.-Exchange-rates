import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = "https://api.spoonacular.com/recipes/random?";
const API_KEY = "136fc3acefd2479fb671a2d84bb2ebd1";

function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setisLoaded] = useState(false)
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    const randNumber = Math.floor(Math.random() * 100)
    const address = URL + "number=" + randNumber
  
    axios.get(address)
      .then((response) => {
        setError(null)
        setisLoaded(true)
        setItems(response.data.recipe)
        //console.log(response.data)
      }).catch(error => {
        alert(error)
      })   
  }, [])

  
  return (
    <>
      <h3>Recipe of the day</h3>

    </>
  );
}

export default App;
