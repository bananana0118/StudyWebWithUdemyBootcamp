const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;



});



const randomColor = () => {
    const r = Math.floor(Math.random() * 256); //내림하려면 256을 해야한다. 255로 하면 절대 255는 나오지
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    if (r + g + b <= 150) {
        h1.style.color = "white";
    }
    else {
        h1.style.color = "black";
    }
    return `rgb(${r},${g},${b})`;


}