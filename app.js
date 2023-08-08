
// 1)Write a program to take input remaining fuel in the car (in liters) from the user. If the fuel is less than 0.25, display "Please refill the fuel in your car."
    
    let remaining_fuel = prompt("Enter remaining fuel in litres: ");
    if(remaining_fuel < 0.25){
        alert("Please refill the fuel in your car.")
    }

// 2)Run this script and check whether alert messages would be displayed or not (various conditions provided).

// 3)Write a program to take input marks obtained in three subjects and the total marks. Calculate the percentage and display the grade and remarks based on the percentage obtained.

    let subject1 = parseInt(prompt("Enter marks in subject1: "));
    let subject2 = parseInt(prompt("Enter marks in subject2: "));
    let subject3 = parseInt(prompt("Enter marks in subject3: "));
    let total_obtained = subject1 + subject2 + subject3;
    let total = prompt("Enter total marks: ")

    let percent = total_obtained/total * 100;

    if(percent > 90){
        alert("Grade: A+, Remarks: Excellent");
    }
    else if(percent > 80){
        alert("Grade: A, Remarks: Very Good");
    }
    else if(percent > 70){
        alert("Grade: B, Remarks: Good");
    }
    else if(percent > 60){
        alert("Grade: C, Remarks: Satisfactory");
    }
    else if(percent >=50 && percent<=60){
        alert("Grade: D, Remarks: Needs Improvement");
    }
    else{alert("Grade: F, Remarks: Fail");}
    
        

// 4)Initialize arrays with various data types (literalArr, stringArr, numberArr, boolArr, mixedArr, qualificationArr).

    let literalArr = ["a","b","c","d"];
    let stringArr = ["Asim","Junaid","Ali","Waqas"];
    let numberArr = [2,4,6,8];
    let boolArr = [true, false];
    let mixedArr = ["Asim", 32, true];
    let qualificationArr = ["Matric", "Inter", "Bachelors", "Masters"];


// 5)Write a program to store phone manufacturers in an array.

    let phoneManufacturers = [];
    phoneManufacturers.push("Nokia");
    phoneManufacturers.push("Samsung");
    phoneManufacturers.push("Apple");
    console.log(phoneManufacturers)

// 6)Write a program to store student scores in an array and sort the array in ascending order using Array's sort method.

    let studentScores = [40, 30, 60, 50, 70];
    studentScores.sort();
    console.log(studentScores);

// 7)Write a program to create a single string from the given array ["This", "is", "my", "cat"].

    let catArr = ["This", "is", "my", "cat"];
    let catString = catArr.join(" ");
    console.log(catString);

// 8)Implement the FIFO (First In First Out) approach using arrays.

    let balls = ["ball1", "ball2"];
    balls.push("ball3");                // To add new ball in array
    console.log(balls);
    balls.shift();                       // removes first element from array to implement FIFO
    console.log(balls);

// 9)// Implement the LIFO (Last In First Out) approach using arrays.

    let balloons = ["balloon1", "balloon2"];
    balloons.push("ball00n3");                  // To add new ball in array
    console.log(balloons);
    balloons.pop();                               // removes last element from array to implement LIFO
    console.log(balloons);

// 10)Write a program to enable "search by user input" in an array and prompt the user whether the item is found in the list or not.

    let items = ["item1", "item2", "item3", "item4", "item5"];
    let match = prompt("Which item would you like to find? Enter item with number: ");
    let found = false;

    for(i=0; i<items.length; i++){
        if(items[i] === match){
            console.log("Item Found at Array Index", i);
            found = true;
        }
    }

    if(found==false){
        console.log("Item not Found!");
    }

// 11)Write a program to identify the largest number in the given array.

    let maxArr = [3,8,9,4,27,11,15];
    console.log(Math.max(...maxArr));

// 12)Write a program to identify the smallest number in the given array.

    let minArr = [3,8,9,4,27,11,15];
    console.log(Math.min(...minArr));

// 13)Write a program to print multiples of 5 ranging from 1 to 100.

    let num = 1;
    while(num <= 100){
        if(num%5 == 0){
            console.log(num, "is a multiple of 5")
        }
        num++;
    }

// Write a program that takes two numbers & adds them to a new variable. Show the result in your browser.

    let num1 = 35;
    let num2 = 25;
    let sum = num1 + num2;
    document.write(sum);
    document.write("<br>")

// 14)Repeat task1 for subtraction, multiplication, division & modulus.

    let sub = num1 - num2;
    document.write(sub);
    document.write("<br>");
    let mul = num1 * num2;
    document.write(mul);
    document.write("<br>");
    let div = num1/num2;
    document.write(div);
    document.write("<br>");
    let mod = num1 % num2;
    document.write(mod);

//15) Write a program to take "city" name as input from the user. If the user enters "Karachi", welcome the user like this: "Welcome to the city of lights."

    let city = prompt("Enter city name: ");
    if(city==="Karachi" || city==="karachi"){
        alert("Welcome to the city of lights.")        
    }

// 16)Write a program to take "gender" as input from the user. If the user is "Male," display "Good Morning Sir." If the user is "Female," display "Good Morning Ma'am."

    let gender = prompt("Enter your gender: ");
    if(gender==="Male" || gender==="male"){
        alert("Good Morning Sir.");
    }else if(gender==="Female" || gender==="female"){
        alert("Good Morning Ma'am.");
    }

//17) Write a program to take input color of the road traffic signal. If the color is "Red," display "Must Stop." If the color is "Yellow," display "Ready to move." If the color is "Green," display "Move now."

    let color = prompt("Enter color of the traffic signal: ");
    if(color==="Red" || color==="red"){
        alert("Must Stop.");
    }else if(color==="Yellow" || color==="yellow"){
        alert("Ready to move.");
    }else if(color==="Green" || color==="green"){
        alert("Move now.");
    }
