// Task 1
const crypto = require('crypto');  
  
const api_key = 'YOUR_PUBLIC_API_KEY';  
const api_secret = 'YOUR_PRIVATE_API_KEY';  
const timestamp = Math.floor(Date.now() / 1000);  
  
const hash = crypto.createHash('md5')  
  .update(`$${timestamp}$$ {api_key}${api_secret}`)  
  .digest('hex');

// Task 2
function fetchCharacters(api_key, api_secret) {  
    const timestamp = Math.floor(Date.now() / 1000);  
    const hash = crypto.createHash('md5')  
     .update(`$${timestamp}$$ {api_key}${api_secret}`)  
     .digest('hex');  
    
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${api_key}&hash=${hash}`;  
    
    return fetch(url)  
     .then(response => response.json())  
     .then(data => data.data.results)  
     .catch(error => console.error('Error fetching characters:', error));  
}

// Task 3
function updateUI(characters) {  
    const characterList = document.getElementById('character-list');  
    
    characterList.innerHTML = '';  
    
    characters.forEach(character => {  
     const listItem = document.createElement('li');  
     listItem.textContent = character.name;  
     characterList.appendChild(listItem);  
    });  
  }  
    
  fetchCharacters(api_key, api_secret)  
    .then(characters => updateUI(characters))  
    .catch(error => console.error('Error updating UI:', error));