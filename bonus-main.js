const btn = document.getElementById('btn');
btn.addEventListener('click', changeImage);

function changeImage(){
    const image = document.getElementById('img');

    if (image.src.includes("img/yellow_lamp.png")) {
        image.src = 'img/white_lamp.png';
        btn.innerHTML = 'Accendi';
    }else {
        image.src = "img/yellow_lamp.png";
        btn.innerHTML = 'Spegni';
    }
} 