//your JS code here. If required.
let el = document.getElementById('level')
  let lvl =Array.from(el.parentNode.children).indexOf(el);

setTimeut(()=>alert(`The level of the element is : ${lvl}`),2000)
         
