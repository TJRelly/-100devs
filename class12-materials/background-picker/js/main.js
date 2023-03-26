document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('orange').onclick = partyWhite


function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
  document.querySelector('#purple').innerText = 'ON'
  document.querySelector('#green').innerText = 'OFF'
  document.querySelector('#blue').innerText = 'OFF'
  document.querySelector('#orange').innerText = 'OFF'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
  document.querySelector('#purple').innerText = 'OFF'
  document.querySelector('#green').innerText = 'ON'
  document.querySelector('#blue').innerText = 'OFF'
  document.querySelector('#orange').innerText = 'OFFF'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
  document.querySelector('#purple').innerText = 'OFF'
  document.querySelector('#green').innerText = 'OFF'
  document.querySelector('#blue').innerText = 'ON'
  document.querySelector('#orange').innerText = 'OFF'
}

function partyWhite() {
  document.querySelector('body').style.backgroundColor = 'rgba(229, 163, 53)'
  document.querySelector('body').style.color = 'white'
  document.querySelector('#purple').innerText = 'OFF'
  document.querySelector('#green').innerText = 'OFF'
  document.querySelector('#blue').innerText = 'OFF'
  document.querySelector('#orange').innerText = 'ON'
}

