const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
// 1
// Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] -
//  яка повертає список предметів для конкретного студента.
//  Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

 function getSubjects(student) {
  let subjectsTitles = Object.keys(student.subjects);
  const result = subjectsTitles.map((el) => {
    el = el.replace(el[0], el[0].toUpperCase());
    if (el.includes("_")) {
      el = el.replace("_", " ");
    
    }
    return el;
  });
  console.log(result);//не може бути поза меж функц коли ти не повернув значення на зовні(ретюрн)
 }
 getSubjects(students[0]);

// 2
// Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню 
// оцінку по усім предметам для переданого студента 
// НЕ МАСИВА СТУДЕНТІВ. Оцінку округліть до 2ого знаку. 
// Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark(students) {
  let everegMarks = [];
  let evergMarksLenghts = 0;
  for (let i in students.subjects) {
    everegMarks = Object.values(students.subjects)
    .flat()
    .reduce((a, b) => a + b);   
    evergMarksLenghts = Object.values(students.subjects)
      .flat().length;
  }
  return (everegMarks / evergMarksLenghts).toFixed(2);
}
 console.log(getAverageMark(students[0]));
// 3
// Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} 
// – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання).
//  ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(students) {
  return {
    "name": students.name,
   "course": students.course,
    "averageMark":getAverageMark(students),
  };
}
console.log(getStudentInfo(students[0]));

// 4 
// Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] 
// – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = (students) => {
  return students.reduce((names, user) => {
    if(user.course){
      names.push(user.name);
    }
    return names;
  }, []);
}
console.log(getStudentsNames(students));

// 5
// Створіть функцію getBestStudent(students) --> "Anton" – яка повертає 
// кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) { 
  const averageMarksArray = students.map((el) =>  {
    return getAverageMark(el);
  })
 const maxAverageMark = Math.max(...averageMarksArray);

 let maxAverageMarkIndex = averageMarksArray.indexOf(maxAverageMark.toString());
 console.log(students[maxAverageMarkIndex].name);
}

getBestStudent(students);