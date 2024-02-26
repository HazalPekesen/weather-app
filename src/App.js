import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import City from "./components/City";

function App() {
  const key = "f784cf4f9522d16cfaca23fca80902ea";
  const [city, setCity] = useState();
  const [search, setSearch] = useState("");
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  console.log(search);
  return (
    <div className="App">
        <div class="mb-5 pt-5">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            class="text-pink-500 border border-pink-500 hover:bg-pink-500 hover:text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          />
          <City city={city}/>
        </div>
    </div>
  );
}

export default App;
