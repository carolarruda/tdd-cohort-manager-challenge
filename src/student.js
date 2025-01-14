class Student {
  constructor(firstName, lastName, githubUsername, email) {
    this.firstName = firstName
    this.lastName = lastName
    this.githubUsername = githubUsername
    this.email = email
    this.studentID = this.generateStudentId(7)
  }

  generateStudentId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let randomValue = ''
    for (let i = 0; i < 7; i++) {
      randomValue += characters.charAt(
        Math.floor(Math.random() * characters.length)
      )
    }
    return randomValue
  }
}

module.exports = Student
