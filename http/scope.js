var globalVariable = 'this is global variable'

function globalFunction() {
  var localVariable = 'this is local variable'

  console.log(globalVariable)
  console.log(localVariable)
}

globalFunction()