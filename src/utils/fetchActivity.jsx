const fetchActivity = async (url) => {
  const response = await fetch('https://bored-api.appbrewery.com/random');
  if (!response.ok) {
    throw new Error('Failed to fetch activity');
  }
  return await response.json();
};

export default fetchActivity;
