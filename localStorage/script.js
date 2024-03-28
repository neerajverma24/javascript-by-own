const inputUsername = document.getElementById('inputUsername');
const button = document.getElementById('clickBtn');
const username = document.getElementById('username')

button.addEventListener('click', (e) => {
    const uValue = inputUsername.value;
    localStorage.setItem("name", uValue);
    location.reload();
});

window.addEventListener('load', () => {
    const value = localStorage.getItem('name');
    username.innerText = value
})