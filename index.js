const readLineSync= require('readline-sync');
const name = readLineSync.question('What is your name?\n');
console.log(`Welcome to Cricket Quiz ${name}`);
console.log("Ohk let us first go over the rules of the quiz !!!!!!!!");
console.log("There will be total of 5 questions");
console.log("Each Correct answer gets you +1 point");
console.log("There are no negatives marks for wrong answers");
const data= [
   {
    questions:" When was the Ashes first played?",
    options:[1872,1877,1882,1887],
    answer: "2"
      },
   {
    questions: "Who won the first ever Cricket World Cup in 1975?",
    options:["Australia","England","India","West Indies"],
    answer: "4"
  },
  {
    questions: "What is the largest cricket stadium in the world?",
    options: [ "Eden gardens", "Melbourne Cricket Club", "Lords","Narendra Modi Stadium"],
    answer: "4"
},
  {
    questions: "How many ways are there of getting out",
    options: [7,8,9,10],
    answer: "4"
  },
  {
    questions: "who did england beat in the final of the 2019 cricket world cup",
    options: ["Australia","India","New Zealand","South Africa"
    ],
    answer: "3"

  }];
const display_question= (ele)=>{
  console.log(`${ele.questions}`);
}
const display_option= (option)=>{
  let opt='';
  option.forEach((option,index)=>{
    opt=`${opt}${index+1} ${option}\n`
  })
  return opt;
  
}
const main= (question)=>{
  let count=0;
  for (element of question){
    display_question(element);
    let response=readLineSync.question(display_option(element.options));
    if (response=== element.answer){
      console.log("Right answer +1 points");
      count++
    }
    else{
      console.log("Wrong answer")
    }
  }
  return count
}
const count= main(data);
console.log(`your score is ${count}`);
console.log("------------End of Quiz-----------")
