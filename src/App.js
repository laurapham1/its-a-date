import { useState } from 'react';
import dateIdeas from './dateIdeas.json';
import './App.css';

const getRandomIdea = () => {
  const randomIndex = Math.floor(Math.random() * dateIdeas.length);
  return dateIdeas[randomIndex];
}

function App() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setActivity(getRandomIdea());
      setLoading(false);
    }, 1000); 
  };

  const content = () => {
    if (loading) return <p>Loading...</p>;
    if (!activity) return <p>No activity found.</p>;

    return <h2>{activity.idea}</h2>;
  };
  return (
    <div className="App">
      <h1>It's a date! 🌹</h1>
      <button onClick={handleClick} >Click me for an activity</button>
      <div className="content">{content()}</div>
    </div>
  );
}

export default App;
