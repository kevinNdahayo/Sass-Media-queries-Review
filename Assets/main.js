window.onresize = myScreen
window.onload = myScreen

// let's create our function

function myScreen() {
  let myWidth = window.innerWidth
  document.getElementById('size').innerHTML = 'Width: ' + myWidth + 'px'
}
