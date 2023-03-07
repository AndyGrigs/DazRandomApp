const studentCont = document.getElementById('student')
const btn = document.getElementById('btn')
const presentStud = document.getElementById('presentStud')

const studentsDaZ = ['Kristina', 'Veronika', 'Eden', 'Danilo', 'Vlad', 'Milena', 'Yerusalem', 'Nikita', 'Vova', 'Bogdan', 'Arina', 'Lisa', 'Taya']

let presentStudents = getPresentStudents(studentsDaZ)

presentStud.addEventListener('change', function(e, students) {
  let studentsArr = document.getElementsByClassName('students')
  for (let student of studentsArr) {
    console.log(student.checked)
     
  }
})



function renderStudentsHtml(studentsList) {
  let studentsCheckbox = ""
  studentsList.forEach((student, i) => {
    return studentsCheckbox += ` <input class="students" type="checkbox" id="${i}" name="${student}" value="${student}">
  <label for="${i}">${student}</label><br>`
  })
  presentStud.innerHTML = studentsCheckbox
}

function getPresentStudents(students) {
  const allStudents = []

  // let empty = [].filter.call(textinputs, function(el) {
  //   return !el.checked
  // });


  students.forEach(i => allStudents.push(i))

  return allStudents
}

const getStudent = () => {
  let randomStudent = presentStudents[Math.floor(Math.random() * presentStudents.length)]
  studentCont.innerHTML = `<div class="student">${randomStudent}</div>`

}

btn.addEventListener('click', getStudent)







//renderStudentsHtml(presentStudents)
