function houseOfCats (legs) {
  people = []
  let person = 0
  while (legs >= 0) {
    let cat = 0
    if (legs % 4 == 2 || legs % 4 == 0) {
      if ((legs % 4) == 2) {
        cat = 1
      } else {
        cat = 0
      }
    }
    people.push(person + cat)
    person += 2
    legs -= 4
  }
  return people
}

console.log(houseOfCats(15))