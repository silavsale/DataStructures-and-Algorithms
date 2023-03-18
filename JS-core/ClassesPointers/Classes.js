class Cookie {
  constructor(color) {
    this.color = color
  }

  getColor() {
    return this.color
  }

  setColor(color) {
    this.color = color
  }
}

const cookieOne = new Cookie('Red')

console.log(cookieOne.getColor())

cookieOne.setColor('Green')

console.log(cookieOne.getColor())
