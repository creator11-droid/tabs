import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import ButtonContainer from "./ButtonContainer";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [Jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);
  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      <ButtonContainer
        jobs={Jobs}
        setCurrentItem={setCurrentItem}
        currentItem={currentItem}
      />
      <JobInfo jobs={Jobs} currentItem={currentItem} />
    </section>
  );
}

export default App;
