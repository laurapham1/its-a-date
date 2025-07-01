import { useState } from 'react';
import './App.css';
import fetchActivity from './utils/fetchActivity';

function App() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchActivity();
      setActivity(data.activity);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const content = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!activity) return <p>No activity found.</p>;

    return <h2>Activity: {activity}</h2>;
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
