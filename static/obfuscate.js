var score=0;

// ==========================QUESTION 1=============================================

function check1(){
    let cAns1 = 'print("hello world")';
    let input = document.getElementById("q1").value;
    


if(input.toLowerCase() == cAns1 ) {
    alert("That is correct")
    score++
    alert("You have a total of " + score + " points")
    
}else{
    alert("Incorrect. Try to remember correct variable syntax")
    };
};

// =============================QUESTION 2==========================================

function check2(){
        let correctAns1 = 'carname = "volvo"';
        let correctAns2 = 'carname="volvo"';
        let input = document.getElementById("q2").value;
        
      
    if(input.toLowerCase() == correctAns1 || input.toLowerCase() == correctAns2) {
        score++
        alert("That is correct")
        alert("You have a total of " + score + " points")
    }else{
        alert("Incorrect. Try to remember correct variable syntax")
        };
    };
   
// ============================QUESTION 3===========================================

function check3(){
        let cA1 = 'i = 50';
        let cA2 = 'i=50';
        let input = document.getElementById("q3").value;

        
    if(input.toLowerCase() == cA1 || input.toLowerCase() == cA2) {
        score++;
        alert("That is correct")
        alert("You have a total of " + score + " points")
    }else{
        alert("Incorrect. Integers don't need parenthesis")
        };
    };


// ==============================QUESTION 4=========================================

function check4(){
        let a3 = 'my_first_name = "john"';
        let a4 = 'my_first_name="john"';
        let input = document.getElementById("q4").value;

    
    if(input.toLowerCase() == a3 || input.toLowerCase() == a4) {
        score++
        alert("That is correct")
        alert("You have a total of " + score + " points")
    }else{
        alert("Incorrect. Remember to use snake case")
        alert("Also maybe refresh your memory on naming conventions")
        };
    };


// ==============================QUESTION 5=========================================
    function check5(){
        let qA1 = 'print("i live in england".upper())';
        let qA2 = 'print("I LIVE IN ENGLAND")'
        let input = document.getElementById("q5").value;

        
    if(input.toLowerCase() == qA1) {
        score++
        alert("That is correct")
        alert("You have a total of " + score + " points")
    }else if(input == qA2){
         alert("Nice try, now do it using code")
    } else {
        alert("Incorrect. Did you forget brackets?")
    };
};

// =============================QUESTION 6==========================================

function check6(){
    let queA1 = 'import random';
    let input = document.getElementById("q6").value;

    
if(input.toLowerCase() == queA1) {
    score++;
    alert("That is correct")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Import libraries at the top of your page")
};
};

// ==============================QUESTION 7=========================================

function check7(){
    let quA1 = 'print(random.randint(1,10))';
    let input = document.getElementById("q7").value;

    
if(input.toLowerCase() == quA1) {
    score++;
    alert("That is correct")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. If random.random(1,10) finds a random float....")
};
};

// ==============================QUESTION 8=========================================

function check8(){
    let qusA1 = 'input("what is your name?")';
    let qusA2 = 'input("what is your name? ")'
    let input = document.getElementById("q8").value;

    
if(input.toLowerCase() == qusA1 || input.toLowerCase() == qusA2) {
    score++;
    alert("That is correct")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. input always has () after it")
};
};

// ==============================QUESTION 9=========================================

function check9(){
    let quesA1 = 'print(fav_drink)';
    let input = document.getElementById("q9").value;

    
if(input.toLowerCase() == quesA1) {
    score++;
    alert("That is correct. Well done")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Print the variable")
};
};


// ==============================QUESTION 10=========================================

function check10(){
    let questA1 = 'print(f"my favourite drink is {fav_drink}")';
    let input = document.getElementById("q10").value;

    
if(input.toLowerCase() == questA1) {
    score++;
    alert("That is correct. Well done")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Try again")
};
};

// ==============================QUESTION 11=========================================

function check11(){
    let questiA1 = 'i += 2';
    let questiA2 = 'i+=2'
    let input = document.getElementById("q11").value;

    
if(input.toLowerCase() == questiA1 || input.toLowerCase() == questiA2) {
    score++;
    alert("That is correct. Well done")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect")
};
};

// ==============================QUESTION 12=========================================

function check12(){
    let questioA1 = 'yes i can serve you';
    let input = document.getElementById("q12").value;

    
if(input.toLowerCase() == questioA1) {
    score++;
    alert("That is correct. Well done")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect, try again")
};
};

// ==============================QUESTION 13=========================================

function check13(){
    let questionA1 = '1';
    let input = document.getElementById("q13").value;

    
if(input.toLowerCase() == questionA1) {
    score++;
    alert("Correct. You are showing the remainder!")
    alert("You have a total of " + score+ " points")
} else {
    alert("Incorrect. Modulus shows the remainder")
};
};

// ==============================QUESTION 14=========================================

function check14(){
    let questionsA1 = 'password is too short';
    let input = document.getElementById("q14").value;

    
if(input.toLowerCase() == questionsA1) {
    score++;
    alert("Correct. Length of the password is less than 8")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Remember len checks the length")
};
};

// ==============================QUESTION 15=========================================

function check15(){
    let questionsB1 = 'fizz buzz';
    let questionsB2 = 'fizzbuzz';
    let input = document.getElementById("q15").value;

    
if(input.toLowerCase() == questionsB1 || input.toLowerCase() == questionsB2) {
    score++;
    alert("Correct. 21 is divisible by 3 AND 7!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Remember % shows if theres any remainder")
};
};

// ==============================QUESTION 16=========================================

function check16(){
    let questionsC1 = 'coffee_order("large", "latte")';
    let questionsC2 = 'coffee_order("large","latte") ';
    let input = document.getElementById("q16").value;

    
if(input.toLowerCase() == questionsC1 || input.toLowerCase() == questionsC2) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect.Remember to input your order in a string!")
};
};

// ==============================QUESTION 17=========================================

function check17(){
    let questionsD1 = 'global balance';
    let input = document.getElementById("q17").value;

    
if(input.toLowerCase() == questionsD1) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Maybe the function can't access the variable?")
};
};

// ==============================QUESTION 18=========================================

function check18(){
    let questionsE1 = 'fav_films=["ghostbusters", "deadpool", "titanic"]';
    let questionsE2 = 'fav_films=["ghostbusters","deadpool","titanic"]'
    let questionsE3 = 'fav_films = ["ghostbusters", "deadpool", "titanic"]'
    let questionsE4 = 'fav_films = ["ghostbusters","deadpool","titanic"]'
    let input = document.getElementById("q18").value;

    
if(input.toLowerCase() == questionsE1 || input.toLowerCase() == questionsE2 || input.toLowerCase() == questionsE3 || input.toLowerCase() == questionsE4) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Remember list syntax")
};
};

// ==============================QUESTION 19=========================================

function check19(){
    let questionsF1 = 'print(fav_films)';
    let input = document.getElementById("q19").value;

    
if(input.toLowerCase() == questionsF1) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Maybe the function can't access the variable?")
};
};

// ==============================QUESTION 20=========================================

function check20(){
    let questionsG1 = 'print(fav_films[0])';
    let input = document.getElementById("q20").value;

    
if(input.toLowerCase() == questionsG1) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Remember, Python is zero indexed")
};
};

// ==============================QUESTION 21=========================================

function check21(){
    let questionssH1 = '.pop()';
    let input = document.getElementById("q21").value;

    
if(input.toLowerCase() == questionssH1) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Remember .pop takes no arguments")
};
};

// ==============================QUESTION 22=========================================

function check22(){
    let questionssH1 = 'for i in range(1, 11)';
    let questionssH2 = 'for i in range(1,11)';
    let input = document.getElementById("q22").value;

    
if(input.toLowerCase() == questionssH1|| input.toLowerCase() == questionssH2) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Remember .pop takes no arguments")
};
};

// ==============================QUESTION 23=========================================

function check23(){
    let questionsI1 = 'print(i)';
    let input = document.getElementById("q23").value;

    
if(input.toLowerCase() == questionsI1) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Remember .pop takes no arguments")
};
};

// ==============================QUESTION 24=========================================

function check24(){
    let questionsJ1 = 'for i in range(1,10,2)';
    let questionsJ2 = 'for i in range(1, 10, 2)';
    let questionsJ3 = 'for i in range(1, 10, 2):';
    let input = document.getElementById("q24").value;

    
if(input.toLowerCase() == questionsJ1 || input.toLowerCase() == questionsJ2  || input.toLowerCase() == questionsJ3 ) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Remember start stop step")
};
};

// ==============================QUESTION 25=========================================

function check25(){
    let questionsK1 = 'for i in reversed(range(10)):';
    let questionsK2 = 'for i in range(9, -1, -1): ';
    let questionsK3 = 'for i in range(9,-1,-1): ';
    let questionsK4 = 'for i in reversed(range(10))';
    let questionsK5 = 'for i in range(9, -1, -1) ';
    let questionsK6 = 'for i in range(9,-1,-1) ';
    let questionsK7 = 'for i in reversed(range (10))';
    let questionsK8 = 'for i in reversed(range(10)):';

    let input = document.getElementById("q25").value;

    
if(input.toLowerCase() == questionsK1 || input.toLowerCase() == questionsK2 || input.toLowerCase() == questionsK3 || input.toLowerCase() == questionsK4 || input.toLowerCase() == questionsK5 || input.toLowerCase() == questionsK6 || input.toLowerCase() == questionsK7 || input.toLowerCase() == questionsK8) {
    score++;
    alert("Correct.")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Did you forget the colon? ")
};
};

// ==============================QUESTION 26=========================================

function check26(){
    let questionsL1 = 'hello hello hello hello hello ';
    let input = document.getElementById("q26").value;

    
if(input.toLowerCase() == questionsL1) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Python is white space dependent")
};
};

// ==============================QUESTION 27=========================================

function check27(){
    let questionsM1 = 'indefinite';
    let input = document.getElementById("q27").value;

    
if(input.toLowerCase() == questionsM1) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Python is white space dependent")
};
};

// ==============================QUESTION 28=========================================

function check28(){
    let questionsN1 = 'n -= 1';
    let questionsN2 = 'n-=1';
    let input = document.getElementById("q28").value;

    
if(input.toLowerCase() == questionsN1 || input.toLowerCase() == questionsN2) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. 5 will ALWAYS be more than 0")
};
};

// ==============================QUESTION 29=========================================

function check29(){
    let questionsO1 = 'boolean';
    let input = document.getElementById("q29").value;

    
if(input.toLowerCase() == questionsO1) {
    score++;
    alert("Correct. Nice!!")
    alert("You have a total of " + score + " points")
} else {
    alert("Incorrect. Research data types")
};
};

// ==============================QUESTION 30=========================================

function check30(){
    let questionsO9 = '#this is a comment';
    let questions19 = '# this is a comment';
    let input = document.getElementById("q30").value;

    
if(input.toLowerCase() == questionsO9 || input.toLowerCase() == questions19) {
    score++;
    alert("Correct.")
    alert("Well done and congratulations!")
    alert("Your total is " + score + " points")
} else {
    alert("Incorrect.")
};
};


localStorage.setItem('questionBook', JSON.stringify(questionBookObject));





// ==========================STOP PAGE REFRESH ON SUBMIT=============================================


document.getElementById("QUESTIONS").addEventListener("submit", function(e){
e.preventDefault();
});


   
    

