import _ from "lodash";

const people = [
  {
    id: 1,
    name: "Peter",
  },
  {
    id: 2,
    name: "Rachel",
  },
  {
    id: 3,
    name: "John",
  },
  {
    id: 4,
    name: "Tim",
  },
  {
    id: 5,
    name: "Zed",
  },
];

export function getPersonById(id: number): void {
  const person = _.find(people, { id });
  console.log(person);
}
