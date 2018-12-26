function learn(sth) {
  console.log(sth)
}

function we(callback,sth) {
  sth += ' is cool'
  callback(sth)
}

we(learn, 'node js')
learn('haha')