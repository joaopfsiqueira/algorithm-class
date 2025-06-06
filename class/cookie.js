class Cookie {
  contructor(color) {
    this.color = color;
    this.size = 50; // Default size
    this.x = Math.random() * (window.innerWidth - this.size);
    this.y = Math.random() * (window.innerHeight - this.size);
  }

  getColor() {
    return this.color;
  }

  setColor(newColor) {
    this.color = newColor;
  }
  getSize() {
    return this.size;
  }
  setSize(newSize) {
    this.size = newSize;
  }
  getX() {
    return this.x;
  }
  setX(newX) {
    this.x = newX;
  }
  getY() {
    return this.y;
  }
  setY(newY) {
    this.y = newY;
  }
}

let cookiePrototype = new Cookie("brown");