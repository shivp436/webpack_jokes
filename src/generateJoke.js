import axios  from 'axios';

function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    }
  }

  axios.get('https://icanhazdadjoke.com/', config)
    .then((response) => {
      document.getElementById('joke').textContent = response.data.joke
    })
    .catch((error) => {
      document.getElementById('joke').textContent = 'An error occurred while fetching the joke.'
    });
}
export default generateJoke;