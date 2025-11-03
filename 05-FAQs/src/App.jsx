import { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";

const App = () => {
  const [questions, setQuestions] = useState(data)
    const [toggledQuesID, setToggledQuesID] = useState(null)

    const toggledQuestion = (id) => {
      const newId = id === toggledQuesID ? null : id
      setToggledQuesID(newId)
    }

  return (
    <>
   <main>
    <div className="container">
      <h1>FAQs</h1>
    
    <section>
{questions.map((question) => {
  return (
    <SingleQuestion key={question.id} {...question} toggledQuesID = {toggledQuesID} toggledQuestion= {toggledQuestion}/>
  )
})}
    </section>
    </div>
   </main>
    </>
  )
};
export default App;
