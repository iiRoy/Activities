'use client'
import { useRef, useState } from "react";
import styles from "./page.module.css";
import { Button, ButtonGroup } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function Home() {
  let [location, setLocation] = useState("");
  //let [cars, setCars] = useState([]);
  let [stopLights, setStopLights] = useState([])
  let [simSpeed, setSimSpeed] = useState(10);
  const running = useRef(null);

  let setup = () => {
    console.log("Hola");
    fetch("http://localhost:8000/simulations", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({  })
    }).then(resp => resp.json())
    .then(data => {
      console.log(data);
      setLocation(data["Location"]);
      //setCars(data["cars"]);
      setStopLights(data["stopLights"])
    });
  }

  const handleStart = () => {
    running.current = setInterval(() => {
      fetch("http://localhost:8000" + location)
      .then(res => res.json())
      .then(data => {
        //setCars(data["cars"]);
        setStopLights(data["stopLights"])
      });
    }, 1000 / simSpeed);
  };

  const handleStop = () => {
    clearInterval(running.current);
  }

  const handleSimSpeedSliderChange = (event) => {
    setSimSpeed(event.target.value);
  };


  return (
    <main className={styles.main}>
      <div>
        <ButtonGroup variation="primary">
          <Button onClick={setup}>
            Setup
          </Button>
          <Button onClick={handleStart}>
            Start
          </Button>
          <Button onClick={handleStop}>
            Stop
          </Button>
          <input 
            type="range" 
            min="1" 
            max="1000" 
            value={simSpeed} 
            className="slider" 
            id="simSpeed" 
            onChange={handleSimSpeedSliderChange}
          />
        </ButtonGroup>
      </div>
      <svg width="1800" height="800" xmlns="http://www.w3.org/2000/svg" style={{backgroundColor:"white"}}>
      //Sección Izquierda
      <rect x={0} y={0} width={800} height={300} style={{fill: "green"}}></rect>
      <rect x={0} y={300} width={800} height={200} style={{fill: "darkgray"}}></rect>
      {/* <image x={0} y={240} href="./racing-car.png"/> */}
      {
        /*
        cars.map(car =>
          <image id={car.id} x={car.pos[0]*32} y={240 + car.pos[1]*20} width={32} href={car.id == 1 ? "./dark-racing-car.png" :"./racing-car.png"} />
        )
        */
      }
      <rect x={0} y={500} width={800} height={300} style={{fill: "green"}}></rect>
      //Sección Derecha
      <rect x={1100} y={0} width={800} height={300} style={{fill: "green"}}></rect>
      <rect x={1100} y={300} width={800} height={200} style={{fill: "darkgray"}}></rect>
      <rect x={1100} y={500} width={800} height={300} style={{fill: "green"}}></rect>
      //Sección Superior
      <rect x={800} y={0} width={300} height={400} style={{fill: "darkgray"}}></rect>
      //Sección Inferior
      <rect x={800} y={400} width={300} height={400} style={{fill: "darkgray"}}></rect>{
        stopLights.map(stopLight =>
          <image id={stopLight.id} x={50+stopLight.pos[0]*64} y={150+stopLight.pos[1]*40} width={32} href={stopLight.status == "red" ? "./RedSquare.png" : (stopLight.status == "yellow" ? "./YellowSquare.png" : "GreenSquare.png")} />
        )
      }
      </svg>
    </main>
  );
}
