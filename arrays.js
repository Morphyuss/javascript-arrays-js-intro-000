var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
    [element, ...array]
      return [element, ...array]
}
function destructivelyAddElementToBeginningOfArray(array, element){
    [array.unshift(element)]
      return array
}

function addElementToEndOfArray(array, element){
    [array.push(), element]
      return [array.push(), element]
}

function destructivelyAddElementToEndOfArray(array, element){
  [array.push(element)]
    return array
}

function accessElementInArray(array, index){
   return (array[2]);
}

function destructivelyRemoveElementFromBeginningOfArray(array){
    [array.shift()];
    return array
}

function removeElementFromBeginningOfArray(array){
   [array.slice(1)];
   return array.slice()
}
