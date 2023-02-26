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
  const [summary, setSummary] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    const randNumber = Math.floor(Math.random() * 100)
    const address = URL + "number&apiKey=" + API_KEY;

    console.log(address);
  
    axios.get(address)
      .then((response) => {
        setError(null)
        setisLoaded(true)
        setItems(response.data.recipes)
        setSummary(response.data.recipes[0].summary);
        setTitle(response.data.recipes[0].title);
        //console.log(response.data)
      }).catch(error => {
        alert(error)
      })   
  }, [])

  console.log(summary);
  console.log(items);

  return (
    <div>
      <h2>Recipe of the day:</h2>
      <h3>{title}</h3>
      <p>{summary}</p>
      {/* <p>{items}</p> */}
    </div>
  );
}

export default App;
