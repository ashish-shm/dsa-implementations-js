// loop over array
// if encounter 0, then implement splice. Make a new function that takes in array and the index
// that function loops over from the index to the end, append the zero to the end, return the new array.
// if it has encountered zero then index move (i--), subtract the length of array
// return the array

function removeZeros(array) {
  var end = array.length;

  for (var i = 0; i < end; i++) {
    if (array[i] === 0 || array[i] === "0") {
      array = appendZeroToEnd(array, i);
      i--;
      end--;
    }
  }

  function appendZeroToEnd(array, index) {
    var temp = array[index];
    for (var i = index; i < array.length; i++) {
      array[i] = array[i + 1];
    }

    array[array.length - 1] = temp;

    return array;
  }

  return array;
}
