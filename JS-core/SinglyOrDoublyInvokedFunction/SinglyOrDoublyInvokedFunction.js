// function getTotal() {
//   const args = Array.prototype.slice.call(arguments)

//   if (arguments.length === 2) {
//     return args[0] + args[1]
//   }
//   if (arguments.length === 1) {
//     return function (num2) {
//       return args[0] + num2
//     }
//   }
// }

// getTotal(10, 20)
// getTotal(10)(20)

function getTotal(...args) {
  // const args = Array.prototype.slice.call(arguments)

  if (args.length === 2) {
    return args[0] + args[1]
  }
  if (args.length === 1) {
    return function add(num2) {
      return args[0] + num2
    }
  }
  return null // Add a default return statement
}

getTotal(10, 20)
getTotal(10)(20)
