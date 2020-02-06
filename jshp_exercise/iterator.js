// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');

// CHALLENGE 1

function sumFunc(arr) {
	let sum = 0;
  for (let i=0; i<arr.length; i++) {
  	sum += arr[i]  
  }
  return sum
  // YOUR CODE HERE
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];
console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  // YOUR CODE HERE
  let i=0
  function showValue () {
    let result = arr[i]
    i++
    return result
  }
	return showValue
}

// Uncomment the lines below to test your work
const array2 = ['a', 'b', 'c', 'd'];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'



// CHALLENGE 2

function nextIterator(arr) {
  // YOUR CODE HERE
  let i = 0
  function showNext () {
    let nextValue = arr[i]
    i++
    return nextValue
  }
	return {
    next: showNext
  }
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3



// CHALLENGE 3

function sumArray(arr) {
  // YOUR CODE HERE
  // use your nextIterator function
  let sum = 0
  let iteratorWithNext = nextIterator(arr)
  for(let i = 0; i<arr.length; i++) {
  	sum += iteratorWithNext.next()
  }
  return sum
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10



// CHALLENGE 4

function setIterator(set) {
  // YOUR CODE HERE
  let setsValues = set.values()
  function showValue () {
    let resultObj = setsValues.next()
    let resultValue = resultObj.value
    return resultValue
  }
  return {
    next: showValue
  }
}

// Uncomment the lines below to test your work
const mySet = new Set('hey');
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'



// CHALLENGE 5

function indexIterator(arr) {
  // YOUR CODE HERE
  let i = 0
	function getIndex () {
    let indexArr = [i, arr[i]]
    i++
    return indexArr
  }
  return {
    next: getIndex
  }
}

// Uncomment the lines below to test your work
const array5 = ['a', 'b', 'c', 'd'];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']



// CHALLENGE 6

function Words(string) {
  this.str = string;
}

Words.prototype[Symbol.iterator] = function() {
  // YOUR CODE HERE
  let index = 0
  return {
    next: () => {
      let strArr = this.str.split(/\W+/);
      if (index < strArr.length) {
        return {value: strArr[index++], done: false};
      } else {
        index = 0; //If we would like to iterate over this again without forcing manual update of the index
        return {done: true};
      }
    }
  }
}

// Uncomment the lines below to test your work
const helloWorld = new Words("Hello My Friends");
for (let word of helloWorld) { console.log(word); } // -> should log 'Hello' and 'World'

// CHALLENGE 7

function valueAndPrevIndex(array){
  let index = 0
  let last = 0
  let sentence = ''
  function showElement () {
    if (index === 0) {
      sentence = array[index] + " is the first"
    } else {
      sentence = array[index] + " was found after index " + last
    }
    last = index
    index++
    return sentence
  }
  return {
    sentence: showElement
  }
}

const returnedSentence = valueAndPrevIndex([4,5,6])
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());


//CHALLENGE 8

function* createConversation(string) {
	
}

// console.log(createConversation('english').next());



//CHALLENGE 9
function waitForVerb(noun) {

}

async function f(noun) {

}

f("dog");
