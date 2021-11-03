/*
1. LAUGH IT OFF 1
* Programming Quiz: Laugh it Off 1
*/

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should return the correct output
 * - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

function laugh() {
    return "hahahahahahahahahaha!";
}
console.log(laugh());

/*
2. LAUGH IT OFF 2
* Programming Quiz: Laugh it Off 2
*
* Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
*
* Note:
*  - make sure your the final character is an exclamation mark ("!")
*  - make sure that your function produces the correct results when it is called multiple times
*/
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `laugh()` function
 * - Your `laugh()` function should have one parameter named `num`
 * - Your `laugh()` function should return the correct number of laughs
 */

function laugh(num) {
    let laughString = "";

    if (num > 0) {
        for (var i = num; i > 0; i--) {
            laughString += "ha";
        }
        laughString += "!";
    }

    return laughString;
}

console.log(laugh(5));

/*
    3. BUILD A TRIANGLE
     * Programming Quiz: Build A Triangle
     */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a `buildTriangle()` function
 * - Your `buildTriangle()` function should take one argument (or you can say parameter)
 * - Your `laugh()` function should build the triangle as describe above
 */

function makeLine(length) {
    let line = "";
    for (let j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(x) {
    let triangle = "";

    for (t = 1; t <= x; t++) {
        triangle += makeLine(t);
    }

    return triangle;
}

console.log(buildTriangle(10));

/*
    4. LAUGH
    Programming Quiz: Laugh
        /*
         * QUIZ REQUIREMENTS
         * - Your code should have a variable `laugh`
         * - Your code should include an anonymous function expression stored in the variable `laugh`
         * - Your anonymous function expression should take one argument
         * - Your anonymous function expression should return the correct number of `hahaha`\'s
         */

let laugh = function(num) {
    let laughString = "";

    for (i = 0; i < num; i++) {
        laughString += "ha";
    }

    laughString += "!";
    return laughString;
};

console.log(laugh(10));

/*
        5. CRY
    * Programming Quiz: Cry
    */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

let cry = function makeCry() {
    let cryString = "boohoo!";
    return cryString;
};

console.log(cry());

/*
    6.  INLINE FUNCTIONS
     * Programming Quiz: Inline Functions (5-4)
        Programming Quiz: Inline Functions(5 - 6) *
        /
        /*
         * QUIZ REQUIREMENTS
         * - Your code should have an `emotions()` function
         * - Your code should call the `emotions()` function
         * - Your `emotions()` function call should have an inline function expression passed as the second parameter
         * - Your function expression should return the expected output
         */

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function laugh(num) {
    let laughString = "";

    for (i = 0; i < num; i++) {
        laughString += "ha";
    }

    laughString += "!";
    return laughString;
});