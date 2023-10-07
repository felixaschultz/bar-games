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
    e.target.classList.add('dragging');
}

function drop(e){
    console.log('drop:', e, e.target);
}

function allowDrop(e){
    e.preventDefault();
}