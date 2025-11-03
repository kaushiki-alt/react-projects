import { useState } from "react";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import reviews from "./data"

const App = () => {
  const [index, setIndex] = useState(0)
  const {name, image, job, text } = reviews[index]

const movePrev = () => {
  setIndex((prevIndex) => {
    if (prevIndex === 0) {
      return reviews.length - 1; 
    }
    return prevIndex - 1; 
  });
};

const moveNext = () => {
  setIndex((prevIndex) => {
    if (prevIndex === reviews.length - 1) {
      return 0; 
    }
    return prevIndex + 1; 
  });
};

const randomPerson = () => {
  const randomPerson = Math.floor(Math.random() * reviews.length)
  setIndex(randomPerson);
}
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>

        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={movePrev} >
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={moveNext}>
            <FaChevronRight />
          </button>
        </div>

        <button type="button" className="btn btn-hipster" onClick={randomPerson}>Surprise me!</button>
      </article>

    </main>)

};
export default App;
