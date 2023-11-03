//create new repository and clone from GitHub that contains an HTML and JS file
//connect the script.js to index.html
// console.log(`test`);
//console.log the body and head of document so you can see it in console
console.log(window.document);
console.log(document.body);
console.log(document.head);
//Create a platform using JS for freelance workers to advertise services
//using DOM elements ensure "document.querySelector is used"
//create title named "Freelancer Forum"

const body = document.querySelector("body");
const title = document.createElement(`h1`);{
  title.textContent = `Freelancer Forum`;
};
console.log(title);
// body.append(title);

// const practice = document.querySelector("practice");
// practice.textContent=`Hello World!`;
// p.style.backgroundColor = "black";
// p["style"].color = "white";
// body.append(p);

//below the title create a line of text with "The average starting price is ${average price}"
//create a second const with "Available Freelancers"
//create a column for "Name (bold)", "Occupation (bold)", and "Starting Price (bold)"
//create arrays for the names and occupations

//initialize an array of possible names and occupations
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];
console.log(freelancers);


//Program initializes an array of freelancers with names, occupations, and starting prices
  //Test code
//initial array of freelancers is rendered to the HTML page from JS
  //Test code
//need to create a function that determines the average price of freelanceers
  //Test code
//clean up code and make more readable
  //Test code
