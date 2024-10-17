const person = {
  name: "John",
  age: 25,
  city: "New York"
};

const updatePerson = {
  ...person,
  age: 30
};

const personWithJob = {
  ...person,
  job: 'Engineer'
}

const finalPerson = {
  ...personWithJob,
  ...updatePerson,
}

console.log(finalPerson)