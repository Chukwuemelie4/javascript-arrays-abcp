
var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
 return [array.unshift(element)]
}

function addElementToEndOfArray(array, element){
  return [array,...element]
}

function destructivelyAddElementToEndOfArray(array, element){
//  return [array.push(element)]
return array[1] = element
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  return array.slice(1,3)
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array){
z = array.slice(-1)
return z
}
