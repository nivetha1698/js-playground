const students = [];

function addStudent(name, score) {
    score = Number(score);
    score = score ?? 0;
    name = name.trim().toUpperCase();
    students.push({ name, score })
}

//getGrades

function getGrades(){
    return students.map((student) => {
      let grade = "F";

      if (student.score >= 90 ) grade = "A";
      else if (student.score >= 75) grade = "B";
      else if (student.score >= 50) grade = "C";
      else if (student.score >= 35) grade = "D";

      return {...student, grade }

    });
}

// Top scorers

function topScorers(){
    return students.filter((student) => {
      return (student.score >= 75);
    });
 
}

//searching specific 

 function findStudent(name){
   return students.find((student) => student.name == name);
 }

 // check Failures

 function findFailures(){
    return students.some((student) => student.score < 35);
 }

 //Display student datas

 function displayStudent(){
    const graded = getGrades();
    console.log("Student Data");
    console.log("All Student with Grades");
     console.log("Name | Score | Grade");
    graded.forEach((student) => {
      console.log(`${student.name} | ${student.score} | ${student.grade}`)
    });
 }

 //Adding Student Data

 addStudent("Nive", "90");
 addStudent("Sadhana", "85");
 addStudent("Keerthana", 64);
 addStudent("Praveena", 47);
 addStudent("Archana", 32)

 // Display all student

 displayStudent();

 // Top Scores

 console.log("\n Top Scorers: ")
 console.log(topScorers())

// Find Student

 console.log("\n Searching for Sadhana: ")
 console.log(findStudent("SADHANA"))

 // Check Failures

 console.log("\n Any Failures?")
 console.log(findFailures() ? "Yes some students failed": "No Failures")


 //In terminal, run "node student-score.js"