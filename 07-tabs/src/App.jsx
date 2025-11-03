import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  const fetchData = async () => {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const newJobs = await response.json();
        setJobs(newJobs)
        setIsLoading(false)
      } else {
        console.error("Something went wrong!");

      }
    } catch (error) {
      console.error("Network Error", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    )
  }

  return (
    <main className="jobs-center">
      <BtnContainer jobs = {jobs} currentItem = {currentItem} setCurrentItem={setCurrentItem} />
      <JobInfo jobs = {jobs} currentItem = {currentItem}/>
    </main>
  )
};
export default App;
