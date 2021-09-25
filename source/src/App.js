import './App.css';
import {AppBar} from '@material-ui/core';
import { useState, useEffect } from 'react';

function App() {

  const [dog_url, setDog] = useState("");

  useEffect(() => {
    async function fetchData(){
      let response = await fetch("https://random.dog/woof.json");
      let data = await response.json()
      return data;
    }

    fetchData().then(data => {
      setDog(data.url);
      console.log(data.url);
    })
  }, [])

  const DogPicture = () => {
    if(dog_url.endsWith('.mp4')){
      return(
        <div>
          <video alt = "video" height={400} controls autoPlay>
            <source src={dog_url} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      )
    }else {
      return(
        <img alt = "image" height={400} src={dog_url}></img>
      )
    }
  }
  return (
    <div className="App">
      <AppBar position="sticky">
        <h1>Dog Pictures</h1>
      </AppBar>
      <div style = {{margin: 50}}>
        <DogPicture></DogPicture>
      </div>
    </div>
  );
}

export default App;
