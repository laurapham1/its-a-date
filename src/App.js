import { useState } from "react";
import dateIdeas from "./dateIdeas.json";
import "./App.css";

const dateCategories = [
  "Outdoor",
  "Creative",
  "At Home",
  "Adventurous",
  "Food & Drink",
  "Cosy & Chill",
];

function App() {
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setActivity(getRandomIdea());
      setLoading(false);
    }, 1000);
  };

  const getRandomIdea = () => {
    const filteredIdeas = dateIdeas.filter((idea) =>
      dateCategories.includes(category) ? idea.category === category : true
    );
    const randomIndex = Math.floor(Math.random() * filteredIdeas.length);
    return filteredIdeas[randomIndex];
  };

  const content = () => {
    if (loading) return <p>Loading...</p>;
    if (!activity) return <p>No activity found.</p>;

    return (
      <>
        <h2>{activity.idea}</h2>
        <p>{activity.category}</p>
      </>
    );
  };
  return (
    <div className="App">
      <h1>It's a date! 🌹</h1>
      <label htmlFor="category">Choose a category:</label>
      <select
        className="select"
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      >
        <option value="">Any</option>
        {dateCategories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <button onClick={handleClick}>Click me for an activity</button>
      <div className="content">{content()}</div>
    </div>
  );
}

export default App;
