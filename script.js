// selecting the elements
let button = document.getElementById('enter')
let input = document.getElementById('userinput')
let ul = document.querySelector('ul')

// Note: Dry  refactoring
// function declrations "inputLength", "creatListElement" ....
function inputLength() {
  return input.value.length
}
function creatListElement() {
  let li = document.createElement('li')
  li.appendChild(document.createTextNode(input.value))
  ul.appendChild(li)
  input.value = ''
}
function addListAfterClick() {
  if (input.value.length > 0) {
    creatListElement()
  }
}

// enter key
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    creatListElement()
  }
}

// addeventlistener is trigger is click/keypress then calls function: addListAfterClick, addListAfterKeypress
button.addEventListener('click', addListAfterClick)
input.addEventListener('keypress', addListAfterKeypress)

// Note; create an element "createTextNode"
// Note: if input.value.length > 0,only allows input once
/* 
button.addEventListener('click', function () {
  if (input.value.length > 0) {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ''
  }
})
input.addEventListener('keypress', function (event) {
  if (input.value.length > 0 && event.keyCode === 13) {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li)
    input.value = ''
  }
})
*/

//Extra
/*
button.addEventListener('click', function () {
  console.log('CLICK!!')
})
button.addEventListener('mouseleave', function () {
  console.log('CLICK!!')
})
button.addEventListener('mouseenter', function () {
  console.log('CLICK!!')
})
*/
