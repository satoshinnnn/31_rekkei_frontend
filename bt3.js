const background = document.querySelector('#background');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');   
const box3 = document.querySelector('.box3');
box1.addEventListener('click', function() {
    background.style.backgroundColor = 'green';
});
box2.addEventListener('click', function() {
    background.style.backgroundColor = 'red';
});
box3.addEventListener('click', function() {
    background.style.backgroundColor = 'purple';
});