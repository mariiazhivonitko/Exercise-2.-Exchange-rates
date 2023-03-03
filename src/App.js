import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = "https://api.spoonacular.com/recipes/random?";
const API_KEY = "136fc3acefd2479fb671a2d84bb2ebd1";
//const API_KEY = "b4408aa9ab144e47ae2bf8eff93e72f5";


function App() {
  
 
  
  const [summary, setSummary] = useState('')
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [glutenFree, setGFree] = useState('')
  const [glutenFreeStr, setGFreeStr] = useState('')
  const [vegetarian, setVegetarian] = useState('')

  const [agreement,setAgreement] = useState(false);
  const [tagsStr, setTagsStr] = useState("");
  const [agreement2,setAgreement2] = useState(false);
  const handleChange = (event) => {setAgreement(event.target.checked);console.log(event.target.checked);if(event.target.checked && agreement2){setTagsStr("&tags=vegetarian,vegan")}else if(event.target.checked){setTagsStr("&tags=vegan")}else if(agreement2){setTagsStr("&tags=vegetarian")}else{setTagsStr("")};console.log(tagsStr);};
  const handleChange2 = (event) => {setAgreement2(event.target.checked);console.log(event.target.checked);if(event.target.checked && agreement){setTagsStr("&tags=vegetarian,vegan")}else if(event.target.checked){setTagsStr("&tags=vegetarian")}else if(agreement){setTagsStr("&tags=vegan")}else{setTagsStr("")};console.log(tagsStr);};

  //const [criteria, setCriteria] = useState('')
  
  //  function updateTagsStr(event,agr){
  //    if(event.target.checked && agr){setTagsStr("&tags=vegetarian,vegan")}else{setTagsStr("")};
  //    console.log(tagsStr);
  //  }


  // useEffect(() => {
    
  //   const address = URL + "&apiKey=" + API_KEY;
  //   console.log(address);
  
   
  // }, [])

  // console.log(summary);

  function getRecipe(e) {
    console.log(agreement)
    console.log(agreement2)
    // if(agreement2 && agreement){setTagsStr("&tags=vegetarian,vegan")}else{setTagsStr("")};
    //  console.log(tagsStr);
    // updateTagsStr();
    // if (agreement){setTagsStr("&tags=vegan")}else{setTagsStr("")}
    console.log(tagsStr);
    e.preventDefault()
    let address = URL + tagsStr + "&apiKey=" + API_KEY;
    console.log(address);

    // if (vegetarian == "checked") {
    //   address = URL + "&tags=vegeterian" +"&apiKey=" + API_KEY;
    // }
    // if ({agree}){let address = URL + "&apiKey=" + API_KEY}
    // console.log(address);
  
    axios.get(address)
      .then((response) => {
      
        
        setSummary(response.data.recipes[0].summary);
        setTitle(response.data.recipes[0].title);
        setImage(response.data.recipes[0].image);
        setGFree(response.data.recipes[0].glutenFree);
       
      }).catch(error => {
        alert(error)
      }) 
    
    
      console.log(glutenFree)
      if (glutenFree){setGFreeStr("Gluten free option")}else{setGFreeStr("")}
      console.log(glutenFreeStr)
  }
 

  return (
    <div>
      <h2>Recipe of the day:</h2>
      
      <form onSubmit={getRecipe}>
        <h5>food limitations:</h5>
        <div>
          
          {/* <input type="checkbox" name="vegetarian" value={vegetarian} onChange={e => setVegetarian(e.target.checked)} /> */}
          <input type="checkbox" name="vegetarian" value={vegetarian} onChange={handleChange2} />
          <label for="vegetarian">Vegetarian</label>
        </div>

        <div>
          <input type="checkbox" id="vegan" name="vegan" onChange={handleChange}/>
          <label for="vegan">Vegan</label>
        </div>
       
        <button>Get recipe</button>
        {/* <button disabled={!agreement}>Get recipe</button> */}
        {/* <button disabled type="button" onclick="alert('Button was clicked!');">Click Me</button> */}
      </form>
      
      <h3>{title}</h3>
      <font color="green">{glutenFreeStr}</font>
      {/* <p>{summary}</p> */}
      <p dangerouslySetInnerHTML={{ __html: summary }} />
      <img src={image} alt="" />
    </div>
  );
}

export default App;
