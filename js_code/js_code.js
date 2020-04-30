function calaArray(arr) {

  if (!Array.isArray(arr)) {
    arr = [];
  } else if (arr.length <= 1) {
    variance = 0;
  }

  var max = -Infinity;
  var min = Infinity;
  var sum = 0;
  var mean = 0;
  var median = 0;
  var q1, q3;
  var q1Pos = (arr.length + 1) / 4;
  var q3Pos = [(arr.length + 1) / 4] * 3;
  var posA, posB, posC, posD;
  var variSum = 0;
  var variance = 0;
  var std = 0;

  arr = arr.sort(function sortNum(a, b) {
    return a - b;
  });

  for (var i = 0, len = arr.length; i < len; i++) {
    sum += arr[i];

    max = ((arr[i] > max) ? arr[i] : max);
    min = ((arr[i] < min) ? arr[i] : min);
    // if (arr[i] < min) {
    //   min = arr[i];
    // }
  }

  if (arr.length % 2 === 0) {
    median = (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
  } else {
    median = arr[(arr.length - 1) / 2];
  }

  mean = (sum / arr.length);

  posA = Math.floor(q1Pos) - 1;
  posB = Math.ceil(q1Pos) - 1;
  posC = Math.floor(q3Pos) - 1;
  posD = Math.ceil(q3Pos) - 1;

  if (arr[posA] || arr[posB] === 0) {
    q1 = arr;
  } else {
    q1 = arr[posA] + (arr[posB] - arr[posA]) * 0.75;
  }

  if (arr[posC] || arr[posD] === 0) {
    q3 = arr;
  } else {
    q3 = arr[posC] + (arr[posD] - arr[posC]) * 0.25;
  }

  for (var i = 0, len = arr.length; i < len; i++) {
    variSum += (arr[i] - mean) * (arr[i] - mean);
  }

  variance = parseFloat((variSum / arr.length).toFixed(4));
  std = parseFloat(Math.sqrt(variance).toFixed(4));

  return {
    max: max,
    min: min,
    mean: mean,
    median: median,
    q1: q1,
    q3: q3,
    variance: variance,
    std: std
  }

}

function getType(x) {
//  console.log('firsttype : ' + typeof x);

  if (x === null) {
    return ('null'); // null
  }
  if (typeof x === 'undefined') {
    return (x + ' => ' + typeof x);
  }

  if (typeof x === 'number') {
    if (Number.isInteger(x)) {
      return (x + ' => integer'); // integer
    } else {
      x = parseFloat(x);
      return (x + ' => numeric'); // numeric
    }
  } else if (x instanceof Function === true) {
    return (x + ' => ' + typeof x); // function
  } else if (typeof x === 'boolean') {
    return (x + ' => ' + typeof x); // boolean
  } else if (typeof x === 'string') {
    if (isNaN(Number(x))) {
      return (x + ' => ' + typeof x);
    } else {
      x = Number(x);
      if (Number.isInteger(x)) {
        return (x + ' => integer');
      } else {
        x = parseFloat(x);
        return (x + ' => numeric');
      }
    }
  } else if (typeof x === 'object') {
    if (Array.isArray(x) === true) {
      return (x + ' => array'); // array
    } else {
      return (Object.entries(x) + ' => ' + typeof x);
    }
  }
}

function getUniq(arr) {

  var uniq = arr;
// console.log(uniq);
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
}

function sumValues(obj) {
var sum = 0;
var data = [];
data = Object.values(obj);
// console.log(data);

data.forEach(function(value, index, array) {
  if (typeof array[index] == 'number') {
    sum += array[index];
  }
});

return (sum);
}


// for (var i = 0; i < data.length; i++) {
//   if (typeof data[i] == 'number') {
//     sum += data[i];
//   }
// }
//   return sum;
// }

var res1 = [2, 1, 10, 32, 6, 12];
var x = null;
var res2 = ['cat', 'dog', 'giraffe', 'gorilla', 'dog', 'parrot', 'giraffe', 'cat'];
var res3 = {name: 'john', age: 18, height: 175, weight: 82.5, sex: 'male', email: 'john@mail.com'};
// var result = calaArray(res1);
// console.log(result);

console.log(calaArray(res1));
console.log(getType(x));
console.log(getUniq(res2));
console.log(sumValues(res3));