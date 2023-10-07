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
        let failedItems = (localStorage.getItem("fail") === null) ? [] : JSON.parse(localStorage.getItem("fail"));;
        failedItems.push(data);
        localStorage.setItem('fail', JSON.stringify(failedItems));
    }

    if(ev.target.classList.contains('success')){
        let successItems = (localStorage.getItem("success") === null) ? [] : JSON.parse(localStorage.getItem("success"));
        successItems.push(data);
        localStorage.setItem('success', JSON.stringify(successItems));
    }

    ev.target.appendChild(document.getElementById(data));
    ev.preventDefault();
}

function allowDrop(e){
    e.preventDefault();
}