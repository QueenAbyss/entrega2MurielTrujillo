import "./CharacterPage.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import CharCard from "../../components/CharCard/CharCard";

const CharacterPage = ({ genero }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dragonball-api.com/api/characters?limit=60`
        );
        const filteredData = genero
          ? response.data.items.filter((char) => char.gender === genero)
          : response.data.items;

        setData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [genero]);

  return (
    <main id="character-page">
      <div className="header-character">
       <h1 className="title-character">Personajes</h1>
      </div>
      <div id="characters-race">
        {data.map((element) => (
          <div key={element.id}>
            <Link to={"/about/" + element.id}>
              <CharCard
                img={element.image}
                nombre={element.name}
                especie={element.race}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CharacterPage;
