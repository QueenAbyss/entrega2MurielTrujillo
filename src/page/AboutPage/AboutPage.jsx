import "./AboutPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";



const AboutPage = () => {
  
  const [data, setData]=useState({});
  
  let {id} = useParams();

 useEffect(()=>{
  axios.get(`https://dragonball-api.com/api/characters/${id}`)
  .then(char=> setData(char.data))},[])

  return (
   
      <main id='character-page'>
        <h1 id="title-character" style={{ backgroundColor: "#0B1C4B", color: "white", padding: "20px", textAlign: "center", borderRadius: "10px" }}>
          {data.name}
        </h1>
    
        <div style={{
          margin: "auto",
          maxWidth: "400px",
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}>
          <img src={data.image} alt={data.name} style={{ width: "100%", maxHeight: "300px", objectFit: "contain", marginBottom: "15px" }} />
          <h2 style={{ margin: "10px 0" }}>{data.name}</h2>
          <p><strong>Raza:</strong> {data.race}</p>
          <p><strong>Género:</strong> {data.gender}</p>
          <p><strong>Ki:</strong> {data.ki}</p>
          <p><strong>Afiliación:</strong> {data.affiliation}</p>
        </div>
      </main>
    );
    
}

export default AboutPage
 