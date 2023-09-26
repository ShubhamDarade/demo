console.log("hello world")
var n = 50
var m = "shubham"
console.log(n + " " + m)
console.log(m)

var a = 2
var b = 5
console.log("a is " + a)
console.log("b is " + b)
console.log("the value of a + b is " + (a + b))
console.log("the value of a - b is " + (a - b))
console.log("the value of a * b is " + (a * b))
console.log("the value of a / b is " + (a / b))
console.log("the value of a ** b is " + (a ** b))
console.log("the value of a++ is " + (a++)) // a is incrimented but not displayed yet, after displaying a is incrimented
console.log("the value of ++a is " + (++a))

var string = 'this'
var name = "shubham"
var msg = 'shubham is good boy'
var channel = 'SparkGaming'
console.log(string + name + msg)
var temp = `${name} is a nice person and he has a channel named ${channel}`
console.log(temp)
var len = name.length
console.log(`length of name is ${len}`) // count blankspace also

console.log('shubham\ndarade') // \n for new line

var str = 'This is a String'
console.log(str)
var position = str.indexOf('is')
console.log(position)
position = str.lastIndexOf('is')
console.log(position)
var substr = str.slice(1, 6) // sixth letter isn't count
console.log(substr)
var substr2 = str.substring(1, 6) //same as slice it only takes positive value unlike slice which accepts neg value
console.log(substr2)
var substr3 = str.substr(1, 2) // first is start position and second is length of string to be taken
console.log(substr3)
var replaced = str.replace('String', 'Shubham') // capital letter and blankspace is consider 
console.log(str)
console.log(replaced)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
var newstring = str.concat(' new word')
console.log(newstring)
var newstring = str.concat(replaced)
console.log(newstring)
var whitespaces = '       this contain     whitespaces     '
console.log(whitespaces)
console.log(whitespaces.trim())
var char2 = str.charAt(2)
console.log(char2)
console.log(str[3])

let no = 'u'
{
    let no = 'u6'
    console.log(no)
}
console.log(no)
const con = 'this cannot be changed'
// con='i want to changes this' // gives error this cannot be changed
console.log(con)
let age = 21;
if (age > 18) {
    console.log('you can drink colddrink')
}
else if (age == 22) {
    console.log('age is 22')
}
else {
    console.log('you can drink water')
}
const cups = 50
switch (cups) {
    case 35:
        console.log('there are 35 cups')
        break;
    case 40:
        console.log('there are 40 cups')
        break;
    case 45:
        console.log('there are 45 cups')
        break;
    default:
        console.log('there are more than 45 cups')
        break;
}

let employee = {  // key-value pair
    name: "shubham",
    salary: 8,
    channel: "spark gaming",
    channel2: 'insane gaming',
    "channel 3": 'x spark', // if space is present b/w key then write it in ""
}
console.log(employee)
console.log(employee.name)
console.log(employee['channel'])
// console.log(employee.channel 3)   this noatation gives error use next noatation
console.log(employee['channel 3'])
let names = [10, 2, 4, "shubham", undefined]
// let names= new Array(10, 2, 4, "shubham", undefined)
console.log(names)
console.log(names[1])
console.log(names.length)
names = names.sort() //something went wrong
console.log(names)
names.push('this is push')
console.log(names)
let names1 = new Array(23)
console.log(names1)

function f(name, greetmsg = 'greetmsg from javascript') {
    console.log(greetmsg + " " + name)
    console.log(name + " is a good boy")
}
let name123 = "shubham"
let name124 = "darshan"
let name125 = "akshay"
let name126 = "kadage"
let name127 = 'manas'
let greetmsg = 'good morning'
f(name123, greetmsg)
f(name124, greetmsg)
f(name125, greetmsg)
f(name126, greetmsg)
f(name127)
function sum(a, b, c) {
    let d = a + b + c
    return d
}
let returnval = sum(1, 2, 3)
console.log(returnval)

alert('This is a message')
let user = prompt('what is player name', 'guest')
console.log(user)
let deletepost = confirm('do u want 2 delete this')
// console.log(deletepost)  print true(ok) or false(cancel)
if (deletepost) {
    console.log('ur post is deleted')
}
else {
    console.log('post is not deleted')
}

for (let i = 0; i < 3; i++) {
    console.log(i)
}
let friends = ['rohan', 'sanjeet', 'deepti', 'pooja']
for (let i = 0; i < friends.length; i++) {
    console.log('hello friend ' + friends[i])
}
friends.forEach(function f(i) {
    console.log('hello friend ' + i)
})
for (i of friends) {
    console.log('hello friend ' + i)
}
let player = {
    name: "shubham",
    level: 8,
    "game role": "flanker",
}
for (key in player) {
    console.log(`The ${key} of player is ${player[key]}`)
}
let j = 0
while (j < 3) {
    console.log(`final flash ${j}`)
    j++
}

let para = document.getElementById('para')
para.addEventListener('mouseover', function run() {
    alert('mouse inside')
})
para.addEventListener('mouseout', function run() {
    console.log('mouse now went outside')
})
function hide() {
    let btn = document.getElementById('btn')
    let para = document.getElementById('para')
    if (para.style.display != 'none') {
        para.style.display = 'none'
    }
    else {
        para.style.display = 'block'
    }
}

function greet(name, byetext){
    console.log("hello good morning " + name + " " + byetext)
}
setTimeout(greet, 5000, 'shubham', 'take care') // don't write greet()
// timeout=setTimeout(greet, 5000, 'shubham', 'take care')
// clearTimeout(timeout)
// setInterval(greet, 1000, 'shubham', 'how r u')
// interval=setInterval(greet, 1000, 'shubham', 'how r u')
// clearInterval(interval)
function displaytime(){
    time= new Date()
    // console.log(time)
    document.getElementById('time').innerHTML=time
}
setInterval(displaytime, 1000);

let newDate=new Date("2029-09-30")
console.log(newDate)
// let newDate2=new Date(year, month, date, hours, minutes, seconds)
let newDate2=new Date(3020, 4, 6, 9, 3, 2) // 0-indexed month
console.log(newDate2)
let year1=newDate2.getFullYear()
let month1=newDate2.getMonth()
let date1=newDate2.getDate()
let hour1=newDate2.getHours()
console.log(`year is ${year1} month is ${month1} date is ${date1} hour is ${hour1}`)
newDate2.setDate(5)
console.log(newDate2)
function updatetime(){
    time2.innerHTML= new Date()
}
setInterval(updatetime, 1000)

console.log(`the value of Math.PI is ${Math.PI}`)
let num=34.6876
console.log(`the value of rounded 34.6876 is ${Math.round(num)}`)
console.log(`3 raised to the power of 2 is ${Math.pow(3,2)}`)
console.log(`square root of 36 is ${Math.sqrt(36)}`)
console.log(`square root of 50 is ${Math.sqrt(50)}`)
console.log(`minimum value of 24, 5, 16, 7 is ${Math.min(24, 5, 16, 7)}`)
let a1=50
let b1=75
let c1=a1+(b1-a1)*Math.random()
console.log(`the random number b/w 50-75 is ${c1}`)