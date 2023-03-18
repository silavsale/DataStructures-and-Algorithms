// function createButtons() {
//   for (let i = 1; i <= 5; i++) {
//     let body = document.getElementsByTagName("BODY")[0];
//     let button = document.createElement("BUTTON");

//     button.innerHTML = "Button " + i;

//     button.onclick = function () {
//       alert("This is button " + i);
//     };
//     body.appendChild(button);
//   }
// }

// createButtons();

// function createButtons() {
//   for (let i = 1; i <= 5; i++) {
//     let body = document.getElementsByTagName("BODY")[0];
//     let button = document.createElement("BUTTON");

//     button.innerHTML = "Button " + i;

//     (function (num) {
//       button.onclick = function () {
//         alert("This is button " + num);
//       };
//     })(i);

//     body.appendChild(button);
//   }
// }

// createButtons();

// function createButtons() {
//   for (var i = 1; i <= 5; i++) {
//     var body = document.getElementsByTagName("BODY")[0];
//     var button = document.createElement("BUTTON");
//     button.innerHTML = "Button " + i;
//     button.onclick = function () {
//       alert("This is button " + i);
//     };
//     body.appendChild(button);
//   }
// }

// createButtons();

function showMessage(message) {
  const messageElement = document.getElementById('message')
  if (messageElement) {
    messageElement.textContent = message
  } else {
    const newMessageElement = document.createElement('p')
    newMessageElement.id = 'message'
    newMessageElement.textContent = message
    document.body.appendChild(newMessageElement)
  }
}

function getClickHandler(num) {
  return function handleClick() {
    showMessage(`This is button ${num}`)
  }
}

function createButtons() {
  for (let i = 1; i <= 5; i++) {
    const body = document.getElementsByTagName('BODY')[0]
    const button = document.createElement('BUTTON')

    button.innerHTML = `Button ${i}`
    button.onclick = getClickHandler(i)

    body.appendChild(button)
  }
}

createButtons()
