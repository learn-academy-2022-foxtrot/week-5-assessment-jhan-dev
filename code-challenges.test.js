// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// const { it } = require("node:test")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest




//  PROBLEM #1

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

//  First create a Test function tha takes in a string, and returns a coded message string.
describe('cipher', () => {

    //  Create an it function that will explain what is the purpose of the 'cipher' function
    it('Create a function that takes in a string and returns a coded message.', () => {

        //  Given 1st testCase is to equal the Expected output: "L4ck4d41s1c4l"
        const secretCodeWord1 = "Lackadaisical"
        expect(cipher(secretCodeWord1)).toEqual('L4ck4d41s1c4l')
        
        //  Given 2nd testCase is to equal the Expected output: "G0bbl3dyg00k"
        const secretCodeWord2 = "Gobbledygook"
        expect(cipher(secretCodeWord2)).toEqual('G0bbl3dyg00k')
        
        //  Given 3rd testCase is to equal the Expected output: "3cc3ntr1c"
        const secretCodeWord3 = "Eccentric"
        expect(cipher(secretCodeWord3)).toEqual('3cc3ntr1c')
        
    })
})

//  After runing yarn jest, I should expect a good fail prompt saying function is not defined
//      ReferenceError: cipher is not defined

// b) Create the function that makes the test pass.

//  To make the test pass, I will need to create the function I am testing for above and pass in a string parameter and convert "a" to 4, "e" to 3, "i" to 1, and "o" to 0 in the return string.
const cipher = (codedMsg) => {
    // Create empty string result varaible that will be our return
    let result = ''

    //  Convert codedMsg string to array before iterating with .map() method
    codedMsg.split('').map((value => {
        //  If the value = the char a --> 4
        if (value.toLowerCase() === 'a') {
            result += '4'
        }
        //  Else if the value = the char e --> 3
        else if (value.toLowerCase() === 'e') {
            result += '3'
        }
        //  Else if the value = the char i --> 1
        else if (value.toLowerCase() === 'i') {
            result += '1'
        }
        //  Else if the value = the char o --> 0
        else if (value.toLowerCase() === 'o') {
            result += '0'
        }
        //  Else concat current value to the result variable without cipher
        else {
            result += value
        }
        //  Convert the array back into a string
    })).join('')

    //  return result
    return result
}

//=====================================
// cipher
// ✓ Create a function that takes in a string and returns a coded message. (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.124 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.45s.
//=====================================



//  PROBLEM #2

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

//  First create a Test function tha takes in an array of words & a single letter, then returns an array of all words containing letter.
describe('checkForChar', () => {

    //  Create an it function that will explain what is the purpose of the 'checkForChar' function
    it('Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter', () => {

        //  Given testCase for 1st param
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        
        //  1st testCase for 2nd param: ["Mango", "Apricot", "Peach"]
        const letterA = "a"
        expect(checkForChar(fruitArray,letterA)).toEqual(["Mango", "Apricot", "Peach"])
        
        //  2nd testCase for 2nd param: ["Cherry", "Blueberry", "Peach"]
        const letterE = "e"
        expect(checkForChar(fruitArray,letterE)).toEqual(["Cherry", "Blueberry", "Peach"])

    })   
})

//  After runing yarn jest, I should expect a good fail prompt saying function is not defined
//      ReferenceError: checkForChar is not defined


// b) Create the function that makes the test pass.

//  To make the test pass, I will need to create the function I am testing for above and pass in an array of strings and to filter only words in array with given 2nd param inside of string.
const checkForChar = (arrOfWords, letter) => {

    //  Convert all letter params to be toLowerCase()
    letter = letter.toLowerCase()

    //  Create a result variable that declares arrOfWords to be iterated w/ the filter() Method
    let result = arrOfWords.filter((word => {

        //  If the word toLowerCase() includes() the letter param inside of it
        if (word.toLowerCase().includes(letter)) {

            //  Return the current word 
            return word
        }
    }))
    //  Return result iteration after completion
    return result

}

//====================================
// checkForChar
//     ✓ Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.177 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.67s.
//====================================



//  PROBLEM #3

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

//  First create a Test function tha takes in an array of words & a single letter, then returns an array of all words containing letter.
describe('fullHouseCheck', () => {

    //  Create an it function that will explain what is the purpose of the 'fullHouseCheck' function
    it('Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind', () => {

        //  Given 1st testCase is to equal the Expected output: true
        const hand1 = [5, 5, 5, 3, 3]
        expect(fullHouseCheck(hand1)).toEqual(true)
        
        //  Given 2nd testCase is to equal the Expected output: false
        const hand2 = [5, 5, 3, 3, 4]
        expect(fullHouseCheck(hand2)).toEqual(false)
        
        //  Given 2nd testCase is to equal the Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        expect(fullHouseCheck(hand3)).toEqual(false)
        
        //  Given 2nd testCase is to equal the Expected output: true
        const hand4 = [7, 2, 7, 2, 7]
        expect(fullHouseCheck(hand4)).toEqual(true)
    })   
})

//  After runing yarn jest, I should expect a good fail prompt saying function is not defined
//      ReferenceError: fullHouseCheck is not defined

// b) Create the function that makes the test pass.

//  To make the test pass, I will need to create the function I am testing for above and pass in an array of 5 nums and to count 2 unique types of cards to have a pair and a 3 of a kind to return true or false if that condition is met.
const fullHouseCheck = (hand) => {

    //  Create an empty object to hold card and count
    let uniqueCards = {}

    //  Iterate through the hand of cards
    for (let i = 0; i < hand.length; i++) {
        //  Create currentCard varaible --> represents current value iteration
        let currentCard = hand[i]

        //  If the object is undefined --> aka empty {}
        if (uniqueCards[currentCard] === undefined) {
            //  Insert currentCard into the object {} w/ a count of 1
            uniqueCards[currentCard] = 1 
        }

        //Else if the card from the hand exists in the uniqueCards object, increase that currentCard by 1 inside the object
        else {
            uniqueCards[currentCard]++
        }
    }

    //  Iterate the object
    for (let count in uniqueCards) {
        //  If the count of the card inside the object = 1
        if (uniqueCards[count] === 1) {
            //  Return false because only a pair(2) or (3) of a kind can only be present in a full house
            return false
        }
    }
    //  If the above condition is not met, JS will come to this line and return True
    return true
}

//=====================================
// fullHouseCheck
//     ✓ Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.178 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.80s.
//=====================================
