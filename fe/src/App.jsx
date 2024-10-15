'use client';
import { Button, ButtonGroup, SliderField } from '@aws-amplify/ui-react';
import { useRef, useState } from 'react';
import '@aws-amplify/ui-react/styles.css';
import Plotly from 'plotly.js/dist/plotly';

export default function Home() {
  let [location, setLocation] = useState("");
  const [button, setButton] = useState(false); // Estado para manejar el botón de Setup
  let [cars, setCars] = useState([]);
  let [simSpeed, setSimSpeed] = useState(10);
  let [stopLights, setStopLights] = useState([]);
  const running = useRef(null);
  const stopLightData = useRef([]);

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
      setCars(data["cars"]);
      setStopLights(data["stopLights"]);
    });
  }

  const handleStart = () => {
    setButton(true);
    stopLightData.current = [];
    running.current = setInterval(() => {
      fetch("http://localhost:8000" + location)
      .then(res => res.json())
      .then(data => {
        setCars(data["cars"]);
        setStopLights(data["stopLights"]);
      });
    }, 1000 / simSpeed);
  };

  const handleStop = () => {
    setButton(false);
    clearInterval(running.current);
  };

  return (
    <>
      <ButtonGroup variation="primary">
        <Button onClick={setup} isDisabled={button}>Setup</Button>
        <Button onClick={handleStart} isDisabled={button}>Start</Button>
        <Button onClick={handleStop} isDisabled={!button}>Stop</Button>
      </ButtonGroup>

      <SliderField label="Simulation speed" min={1} max={30} step={1}
        value={simSpeed} onChange={setSimSpeed} />
      
      <svg width="900" height="400" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "white" }}>
        {/* Sección Izquierda */}
        <rect x={0} y={0} width={400} height={400} style={{ fill: "green" }}></rect> {/* Pasto superior izquierdo */}
        <rect x={0} y={150} width={400} height={100} style={{ fill: "darkgray" }}></rect> {/* Carretera */}
        <rect x={0} y={250} width={400} height={150} style={{ fill: "green" }}></rect> {/* Pasto inferior izquierdo */}

        {/* Sección Derecha */}
        <rect x={550} y={0} width={400} height={150} style={{ fill: "green" }}></rect> {/* Pasto superior derecho */}
        <rect x={550} y={150} width={400} height={100} style={{ fill: "darkgray" }}></rect> {/* Carretera */}
        <rect x={550} y={250} width={400} height={150} style={{ fill: "green" }}></rect> {/* Pasto inferior derecho */}

        {/* Sección Superior */}
        <rect x={400} y={0} width={150} height={200} style={{ fill: "darkgray" }}></rect> {/* Carretera central superior */}

        {/* Sección Inferior */}
        <rect x={400} y={200} width={150} height={200} style={{ fill: "darkgray" }}></rect> {/* Carretera central inferior */}

        {/* Semáforos */}
        {
          stopLights.map(stopLight => (
            <image 
            key={stopLight.id} 
            x={-13 + stopLight.pos[0] * 32} 
            y={83 + stopLight.pos[1] * 20} 
            width={32} 
            href={stopLight.status == "red" ? "./SemRojo.png" : (stopLight.status == "yellow" ? "./SemAmarillo.png" : "./SemVerde.png")}
          />
          /*
          stopLights.map(stopLight =>
            <image id={stopLight.id} x={50+stopLight.pos[0]*64} y={150+stopLight.pos[1]*40} width={32} href={stopLight.status == "red" ? "./RedSquare.png" : (stopLight.status == "yellow" ? "./YellowSquare.png" : "GreenSquare.png")} />
          )
            */
      ))
  }
        {
        cars.map(car =>
          <image 
          id={car.id} 
          x={car.pos[0]*32} 
          y={55 + car.pos[1]*20} 
          width={32} 
          href={car.id == 3 ? "./dark-racing-car.png" :"./racing-car.png"} />
        )
        }
</svg>
    </>
  );
}
