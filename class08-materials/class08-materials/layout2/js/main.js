class Person {
    constructor(first, last, dob) {
        this.first = first;
        this.last = last;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.first} ${this.last}`
    }
}

const person1 = new Person('Max', 'Millions', '4-3-1980')

console.log(person1)
console.log(person1.getBirthYear())
console.log(person1.getFullName())