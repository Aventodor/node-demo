/*var pet = {
  word: '...',
  speak: function () {
    console.log(this.word)
    console.log(this === pet)
  }
}

pet.speak()*/

/*
function pet(word) {
  this.word = word
  console.log(this.word)
  console.log(this)
}

pet('...')*/

function pet(word) {
  this.word = word
  this.speak = function () {
    console.log(this.word)
    console.log(this)
  }
}

var cat = new pet('maio')
cat.speak()