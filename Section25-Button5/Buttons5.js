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

function createButtons() {
  for (let i = 1; i <= 5; i++) {
    let body = document.getElementsByTagName("BODY")[0];
    let button = document.createElement("BUTTON");

    button.innerHTML = "Button " + i;
    addCLickFunctionality(button, i);

    body.appendChild(button);
  }
}

createButtons();

function addCLickFunctionality(button, num) {
  button.onclick = function () {
    alert("This is button " + num);
  };
}
