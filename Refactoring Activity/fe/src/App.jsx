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
  let [numCarsN, setNumCarsN] = useState(1);
  let [numCarsO, setNumCarsO] = useState(2);
  let [stopLights, setStopLights] = useState([]);
  const av1_velocities = useRef([]);
  const av2_velocities = useRef([]);
  const av_velocities = useRef([]);
  const running = useRef(null);
  const stopLightData = useRef([]);

  let setup = () => {
    console.log("Hola");
    fetch("http://localhost:8000/simulations", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        numCarsN: numCarsN,
        numCarsO: numCarsO 
      })
    }).then(resp => resp.json())
    .then(data => {
      console.log(data);
      setLocation(data["Location"]);
      setCars(data["cars"]);
      setStopLights(data["stopLights"]);
    });
  }

  const handleStart = () => {
    av1_velocities.current = [];
    av2_velocities.current = [];
    av_velocities.current = [];
    var av1_sum = 0;
    var av2_sum = 0;
    setButton(true);
    stopLightData.current = [];
    running.current = setInterval(() => {
      fetch("http://localhost:8000" + location)
      .then(res => res.json())
      .then(data => {
        let carData = data["cars"];
        // Filter cars by street and calculate velocities
        carData.forEach(car => {
          let speed = Math.sqrt(car.vel[0] ** 2 + car.vel[1] ** 2);  // Calculate speed magnitude

          // Push speed to the correct street velocity array
          if (car.street === "av1") {
            av1_sum += speed
          } else if (car.street === "av2") {
            av2_sum += speed
          }
        });
        av1_velocities.current.push(av1_sum / numCarsO);
        av2_velocities.current.push(av2_sum / numCarsN);
        av_velocities.current.push(av1_sum + av2_sum)
        av1_sum = 0
        av2_sum = 0
        setCars(data["cars"]);
        setStopLights(data["stopLights"]);
      });
    }, 500 / simSpeed);
  };

  // Function to handle stop and plot the graph
  const handleStop = () => {
    setButton(false);
    clearInterval(running.current);  // Stop the simulation loop

    // Create the plot using Plotly
    Plotly.newPlot('mydiv', [
      {
        y: av1_velocities.current,  // Velocities for av1
        mode: 'lines',
        name: 'Avenida Oeste',  // Name of the series
        line: { color: '#80CAF6' }
      },
      {
        y: av2_velocities.current,  // Velocities for av2
        mode: 'lines',
        name: 'Avenida Norte',  // Name of the series
        line: { color: '#F68080' }
      },
      {
        y: av_velocities.current,  // Addition of velocities
        mode: 'lines',
        name: 'Suma de velocidades',  // Name of the series
        line: { color: '#000000' }
      }
    ], {
      title: 'Velocidad en los coches',
      xaxis: { title: 'Tiempo' },
      yaxis: { title: 'Velocidad' }
    });
  };
  
  return (
    <>
      <ButtonGroup variation="primary">
        <Button onClick={setup} isDisabled={button}>Setup</Button>
        <Button onClick={handleStart} isDisabled={button}>Start</Button>
        <Button onClick={handleStop} isDisabled={!button}>Stop</Button>
      </ButtonGroup>
  
      <SliderField label="Velocidad de la Simulación" min={1} max={30} step={1} isDisabled={button}
        value={simSpeed} onChange={setSimSpeed} />
      <SliderField label="Coches en Avenida Norte" min={0} max={7} step={1} isDisabled={button}
        value={numCarsN} onChange={setNumCarsN} />
      <SliderField label="Coches en Avenida Oeste" min={0} max={7} step={1} isDisabled={button}
        value={numCarsO} onChange={setNumCarsO} />
      
      {/* Your SVG map */}
      <svg width="900" height="400" xmlns="http://www.w3.org/2000/svg" style={{ backgroundColor: "white" }}>
        {/* Sección Izquierda */}
        <rect x={0} y={0} width={400} height={400} style={{ fill: "green" }}></rect>
        <rect x={0} y={150} width={400} height={100} style={{ fill: "darkgray" }}></rect>
        <rect x={0} y={250} width={400} height={150} style={{ fill: "green" }}></rect>
  
        {/* Sección Derecha */}
        <rect x={550} y={0} width={400} height={150} style={{ fill: "green" }}></rect>
        <rect x={550} y={150} width={400} height={100} style={{ fill: "darkgray" }}></rect>
        <rect x={550} y={250} width={400} height={150} style={{ fill: "green" }}></rect>
  
        {/* Sección Superior */}
        <rect x={400} y={0} width={150} height={200} style={{ fill: "darkgray" }}></rect>
  
        {/* Sección Inferior */}
        <rect x={400} y={200} width={150} height={200} style={{ fill: "darkgray" }}></rect>
  
        {/* Render stoplights and cars */}
        {stopLights.map(stopLight => (
          <image 
            key={stopLight.id} 
            x={-13 + stopLight.pos[0] * 32} 
            y={83 + stopLight.pos[1] * 20} 
            width={32} 
            href={stopLight.status === "red" ? "./SemRojo.png" : (stopLight.status === "yellow" ? "./SemAmarillo.png" : "./SemVerde.png")}
          />
        ))}
  
        {cars.map(car => (
          <image 
            key={car.id} 
            x={car.street === "av1" ? car.pos[0]*35 : car.pos[0]*32} 
            y={car.street === "av1" ? 50 + car.pos[1]*20 : car.pos[1]*34} 
            width={25} 
            href={car.street <= "av1" ? "./dark-racing-car.png" : "./racing-carV.png"} 
          />
        ))}
      </svg>
      <div id="mydiv" style={{ marginTop: '20px' }}></div>
    </>
  );
}  