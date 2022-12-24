import RandomColor from "./components/RandomColor";
import { useState } from "react";
import "./styles.css";
import data from './assets/json/users.json';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShuffleSharpIcon from '@mui/icons-material/ShuffleSharp';

function App() {
  const colors = [
    "#FDB137", 
    "#785964", 
    "#6D6875", 
    "#B5838D", 
    "#E5989B", 
    "#7E9680", 
    "#C73866", 
    "#FFB4A2", 
    "#79616F", 
    "#EAB595"
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);

  const [index, setIndex] = useState(randomIndex);

  const changeIndex = () => {
    const newRandom = Math.floor(Math.random() * colors.length);
    setIndex(newRandom);
  };

  return (
    <div className="App">

      <RandomColor color={colors[index]} user={data[index]} />
      <br></br>
      <div className="iconArrow">
          <IconButton onClick={changeIndex}>
            <ShuffleSharpIcon></ShuffleSharpIcon>
          </IconButton>
      </div>
      
    </div>
  );
}

export default App;
