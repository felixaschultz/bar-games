const timer = document.querySelector('.timer');
let failedItems = [];
let successItems = [];
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
const fails = (localStorage.getItem("fail") != null) ? JSON.parse(localStorage.getItem("fail")).length : 0;
const success = (localStorage.getItem("success") != null) ? JSON.parse(localStorage.getItem("success")).length : 0;
let interval;
if(new URLSearchParams(window.location.search).get("start") === 'true'){
    localStorage.removeItem('fail');
    localStorage.removeItem('success');
    console.log("Start the game");
    let count = 60;
    interval = setInterval(function(){
        count--;
        timer.innerHTML = count;
        if(count === 0){
            clearInterval(interval);
            /* document.querySelector('.container').innerHTML = '<h1>Game Over</h1>';
            document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>'; */
        }

    }, 1000);
}

document.querySelectorAll(".game__item-fail").forEach(item => {
    item.addEventListener("click", function(e){
        failedItems.push(e.target.parentElement.id);
        e.target.parentElement.classList.add('hide-failed');
        e.target.parentElement.classList.add('hide');
        localStorage.setItem('fail', JSON.stringify(failedItems));

        if(document.querySelectorAll(".game__item-fail")[document.querySelectorAll(".game__item-fail").length - 1].parentElement.classList.contains('hide')){
            setTimeout(function(){
                if(failedItems.length > successItems.length){
                    document.querySelector('.container').innerHTML = '<h1>Game Over</h1>';
                    document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
                    clearInterval(interval);
                }
        
                if(successItems.length > failedItems.length){
                    document.querySelector('.container').innerHTML = '<h1>Game Won</h1>';
                    document.querySelector('.container').innerHTML += `<ul class="success-list">
                    </ul>`;
                    document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
                    clearInterval(interval);
                }
        
                if(successItems.length === failedItems.length){
                    document.querySelector('.container').innerHTML = '<h1>Game Draw</h1>';
                    document.querySelector('.container').innerHTML += `<ul class="success-list">
                    </ul>`;
                    document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
                    clearInterval(interval);
                }
            }, 500)
        }

    })
})

document.querySelectorAll(".game__item-success").forEach(item => {
    item.addEventListener("click", function(e){
        successItems.push(e.target.parentElement.id);
        e.target.parentElement.classList.add('hide-success');
        e.target.parentElement.classList.add('hide');
        localStorage.setItem('success', JSON.stringify(successItems));

        if(document.querySelectorAll(".game__item-success")[document.querySelectorAll(".game__item-success").length - 1].parentElement.classList.contains('hide')){
            setTimeout(function(){
                if(failedItems.length > successItems.length){
                    document.querySelector('.container').innerHTML = '<h1>Game Over</h1>';
                    document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
                    clearInterval(interval);
                }
        
                if(successItems.length > failedItems.length){
                    document.querySelector('.container').innerHTML = '<h1>Game Won</h1>';
                    document.querySelector('.container').innerHTML += `<ul class="success-list">
                    </ul>`;
                    document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
                    clearInterval(interval);
                }
        
                if(successItems.length === failedItems.length){
                    document.querySelector('.container').innerHTML = '<h1>Game Draw</h1>';
                    document.querySelector('.container').innerHTML += `<ul class="success-list">
                    </ul>`;
                    document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
                    clearInterval(interval);
                }
            }, 500)
        }
    })
})

/* function drag(e){
    console.log('drag:', e, e.target);
    e.dataTransfer.setData("Text", e.target.id);
}

function drop(ev){
    let data = ev.dataTransfer.getData("Text");

    if(ev.target.classList.contains('fail')){
        failedItems.push(data);
        localStorage.setItem('fail', JSON.stringify(failedItems));
    }

    if(ev.target.classList.contains('success')){
        successItems.push(data);
        localStorage.setItem('success', JSON.stringify(successItems));
    }

    ev.target.appendChild(document.getElementById(data));

    if(document.querySelector('.container').children.length === 0){

        if(failedItems.length > successItems.length){
            document.querySelector('.container').innerHTML = '<h1>Game Over</h1>';
            document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
            clearInterval(interval);
        }

        if(successItems.length > failedItems.length){
            document.querySelector('.container').innerHTML = '<h1>Game Won</h1>';
            document.querySelector('.container').innerHTML += `<ul class="success-list">
                ${successItems.map(item => `<li>${document.getElementById(item).querySelector(".game__item-title").innerText}</li>`).join('')}
            </ul>`;
            document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
            clearInterval(interval);
        }

        if(successItems.length === failedItems.length){
            document.querySelector('.container').innerHTML = '<h1>Game Draw</h1>';
            document.querySelector('.container').innerHTML += `<ul class="success-list">
                ${successItems.map(item => `<li>${document.getElementById(item).querySelector(".game__item-title").innerText}</li>`).join('')}
                ${failedItems.map(item => `<li class='failed'>${document.getElementById(item).querySelector(".game__item-title").innerText}</li>`).join('')}
            </ul>`;
            document.querySelector('.container').innerHTML += '<button onClick="playAgain()" class="cta">Play Again</button>';
            clearInterval(interval);
        }
    }

    ev.preventDefault();
}

function allowDrop(e){
    e.preventDefault();
    
} */

function playAgain(){
    localStorage.removeItem('fail');
    localStorage.removeItem('success');
    location.reload();
}