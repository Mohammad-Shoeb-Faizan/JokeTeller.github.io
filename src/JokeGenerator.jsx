import React, { useEffect, useState } from 'react';
import './App.css';

const JokeGenerator = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNewJokeClick = () => {
    fetchJoke();
  };

  return (
    <div className="joke-container">
      <h2>Joke Teller</h2>
      <p className="joke">{joke}</p>
      <button className="new-joke-btn" onClick={handleNewJokeClick}>
        Get New Joke
      </button>
    </div>
  );
};

export default JokeGenerator;
