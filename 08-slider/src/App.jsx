import { useEffect, useState } from "react";
import { list, longList, shortList } from "./data";
import Carousel from "./Carousel";
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'


const App = () => {
  const [profile, setProfile] = useState(longList)
  const [currentProfile , setCurrentProfile] = useState(0)

  useEffect(() => {
    let intervalId = setInterval(() => {
    setCurrentProfile((currentProfile + 1) % profile.length); 
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentProfile])
  

  const nextNav = () => {
    setCurrentProfile((currentProfile + 1) % profile.length);
  };

  const prevNav = () => {
    setCurrentProfile((currentProfile - 1 + profile.length) % profile.length);
  };
  return (
    <main className="slider-container">
      <Carousel profile = {profile} current = {currentProfile}/>
      <button type="button" className="prev" onClick={prevNav}>
        <FiChevronLeft/>
      </button>
      <button type="button" className="next" onClick={nextNav}>
        <FiChevronRight/>
      </button>
    </main>
  );
};
export default App;
