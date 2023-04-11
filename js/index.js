console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "Jhon";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Sammuel";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2. length > hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
        console.log(`Wow, you both have equally long names, ${hacker2.length} characters!.`);
    }

// Iteration 3: Loops

for( let characters of hacker1){
    console.log(characters.toUpperCase() + " ");
}

let reversedHacker2 = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedHacker2 += hacker2[i];
  }
  
  console.log(reversedHacker2);

