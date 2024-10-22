// JavaScript functionality for the restaurant website

document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('You clicked on ' + item.querySelector('h3').textContent);
    });
});
