let i = 0; //<--counts number entries
// let j = 0; <--was going to count word entries
let userSum = 0;  //total of all numbers
let userAvg = 0; //avg of all numbers
let wordInput = '';  //big ol word concatenated of strings

const inputForm = document.querySelector('.input-form');
const addButton = document.querySelector('.addbutton');
const finishedButton = document.querySelector('.finishedbutton');

let numsEntered = document.querySelector('.numsentered p'); //put this up here cause I use it alot?

addButton.addEventListener('click', function() {  //listen for add button submission
  event.preventDefault();  //prevent page from refreshing
  // console.log("in");

  let userInput = Number(document.querySelector('#userInput').value);   //grab number input
  // console.log("userinput: ", userInput);

  if (Number.isNaN(userInput) === true) {   //test for string vs number
      // console.log("in");
      numsEntered.innerHTML = `Entering words? Number count off.`;   //concatenate strings
      // if (j > 0 && Number.isNaN(userInput) === true) { <---leaving this here.  Couldn't make the # after words break
      //   console.log("j = ", j);
      //   alert("ONLY WORDS.  Forget it, you broke it now.  Refresh");
      // }  else {
      //   console.log("nevermind");
      // }
      let userInput = document.querySelector('#userInput').value; //grab string input
      // console.log("userInput : ", userInput);
        wordInput = wordInput + userInput;  //concatenating the big ol string
      // j++

  } else {
      userSum = userSum + userInput; //create sum
      // console.log("usersum: ", userSum);

      i++; //start counter/increment counter
      // console.log("counter: ", i);
      if (i === 1) {
          numsEntered.innerHTML = `You have entered ${i} number. Enter more? Or click Finished.`;//I know I can make this tighter, just practicing...
      } else {
          numsEntered.innerHTML = `You have entered ${i} numbers. Enter more? Or click Finished.`;
        }
  };

  inputForm.reset();
});

finishedButton.addEventListener('click', function() { // listen for finished button sumbission

  if (wordInput.length > 0) { //return word stuff
    const wordContainer = document.querySelector('.wordcontainer span');
    wordContainer.innerHTML = `Your word is ${wordInput}!`;
  } else {

    const sumContainer = document.querySelector('.sumcontainer span');//return number stuff
    sumContainer.innerHTML = `Sum of your numbers : ${userSum}`;

    userAvg = userSum / i; //calc average
    // console.log("useravg: ", userAvg);
    const avgContainer = document.querySelector('.avgcontainer span');
    avgContainer.innerHTML = `Average of your numbers (rounded) : ${Math.round(userAvg * 100) / 100}`; //rounded to two decimals cause its neater
    }
}); //cry.
