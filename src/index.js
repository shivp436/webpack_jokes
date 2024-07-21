import generateJoke from './generateJoke';
import './styles/main.scss';
import './assets/logo.png'

const jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', generateJoke);

generateJoke();