// const tinderApp = new Object(); --singleton Object

const tinderUser = {} //-----non-singleton object----

tinderUser.id = "abc123";
tinderUser.name = 'Ammu';
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

const regularUser = {
    email: 'h@gmail.com',
    fullName: {
        userFullName: {
            firstName: "Aman",
            lastName: "Marve"
        }
    }
}

// console.log(regularUser.fullName?.userFullName.firstName) //--Optional Chaining..(?)
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = { ...obj1, ...obj2 } //---spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "i@gmail.com"
    }, {
        id: 3,
        email: "t@gmail.com"
    },
]

users[1].email;
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS hindi",
    price: "99",
    courseTeacher: "Hitesh"
}

// object-destructuring
const { courseTeacher: nimbu } = course;
console.log(nimbu);


// try it by yourself for better understanding....