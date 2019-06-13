// CODE here for your Lambda Classes

class Person { // base class
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }
  demo(subject) {
    console.log(`Today we are learning about ${subject}.`);
  }
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}.`);
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }
  listSubjects() {
    for(let i = 0; i < this.favSubjects.length; i++) {
      console.log(this.favSubjects[i]);
    }
  }
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}.`);
  }
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}.`);
  }
}

class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
  }
}

const danLevy = new Instructor({
  name: 'Dan',
  age: 30,
  location: 'Denver',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: 'Something about his cats'
});

const quinton = new Student({
  name: 'Quinton',
  age: 21,
  location: 'Boston',
  previousBackground: 'University Student',
  className: 'WEB21',
  favSubjects: ['Objects', 'Classes', 'Arrays', 'Methods']
});

const angela = new ProjectManager({
  name: 'Angela',
  age: 25,
  location: 'Florida',
  gradClassName: 'WEBPT2',
  favInstructor: 'Dan Levy'
});

danLevy.speak();
danLevy.demo('JavaScript');
danLevy.grade(quinton, 'Javascript');
quinton.speak();
quinton.listSubjects();
quinton.PRAssignment('Random Assignment');
quinton.sprintChallenge('Random Sprint Challenge');
angela.speak();
angela.demo('Random Demo');
angela.grade(quinton, 'Random Project');
angela.standUp('web21_angela');
angela.debugsCode(quinton, 'CSS & HTML');
