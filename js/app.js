// Function to update the tilt status based on device orientation
function updateTiltStatus(event) {
    const tiltStatusElement = document.getElementById('tiltStatus');
  
    // Check the device orientation data
    const { beta } = event;
    
    if (beta > 0) {
      tiltStatusElement.innerText = 'Tilted down';
    } else {
      tiltStatusElement.innerText = 'Tilted up';
    }
}

// Listen for device orientation events
window.addEventListener('deviceorientation', updateTiltStatus);

const items = document.querySelectorAll('.game__item');

function drag(e){
    console.log('drag:', e, e.target);
    e.dataTransfer.setData("Text", e.target.id);
}

function drop(ev){
    let data = ev.dataTransfer.getData("Text");
    
    if(ev.target.classList.contains('fail')){
        let failedItems = (localStorage.getItem("fail") === null) ? [] : JSON.parse(localStorage.getItem("fail"));
        failedItems.push(data);
        localStorage.setItem('fail', JSON.stringify(failedItems));
    }

    if(ev.target.classList.contains('success')){
        let successItems = (localStorage.getItem("success") === null) ? [] : JSON.parse(localStorage.getItem("success"));
        successItems.push(data);
        localStorage.setItem('success', JSON.stringify(successItems));
    }

    ev.target.appendChild(document.getElementById(data));

    if(document.querySelector('.container').children.length === 0){
        const fails = (localStorage.getItem("fail") != null) ? JSON.parse(localStorage.getItem("fail")).length : 0;
        const success = (localStorage.getItem("success") != null) ? JSON.parse(localStorage.getItem("success")).length : 0;

        if(fails > success){
            document.querySelector('.container').innerHTML = '<h1>Game Over</h1>';
            document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
        }

        if(success > fails){
            document.querySelector('.container').innerHTML = '<h1>Game Won</h1>';
            document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
        }

        if(success === fails){
            document.querySelector('.container').innerHTML = '<h1>Game Draw</h1>';
            document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';

        }
    }

    ev.preventDefault();
}

function allowDrop(e){
    e.preventDefault();
    
}

function playAgain(){
    localStorage.removeItem('fail');
    localStorage.removeItem('success');
    location.reload();
}