import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
import axios from 'axios';
import CharCard from "../../components/CharCard/CharCard";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://dragonball-api.com/api/characters?limit=60")
      .then(char => setData(char.data.items));
  }, []);

  return (
    <main id='home-page'>
      <header className="header-logo">
        <img
          src="https://web.dragonball-api.com/images-compress/logo_dragonballapi.webp"
          alt="Dragon Ball API Logo"
          className="logo-image"
        />
      </header>

      <div id='characters'>
        {
          data.map((element) => (
            <div key={element.id}>
              <Link to={"/about/" + element.id}>
                <CharCard img={element.image} nombre={element.name} especie={element.race} />
              </Link>
            </div>
          ))
        }
      </div>
    </main>
  );
};

export default HomePage;
