// alert('hello world')
// console.log('hello world')
// document.write('<h1>hello world</h1>')

// let a = 5
// let b = 6
// let c = a + b
// console.log(`the sum of ${a} and ${b} is ${c}`)

// let a = prompt('enter first no', '')
// let b = prompt('enter second no', '')
// let c = parseInt(a) + parseInt(b)
// console.log(`sum of ${a} and ${b} is ${c}`)

// let a = prompt('enter any number', '')
// let b = Math.sqrt(a)
// console.log(`square root of ${a} is ${b}`)

// let base = prompt('enter base value', '')
// let height = prompt('enter height value', '')
// let area = (height * base) / 2
// console.log(`base: ${base} and height: ${height} area is ${area}`)

// function convert() 
// {
//     let kms = document.getElementById('data').value
//     const factor = 0.621371
//     let miles = kms * factor
//     document.getElementById('result').innerText = `${kms} kms is ${miles} miles`
//     document.getElementById('ans1').innerHTML = `<strong>${kms} kms is ${miles} miles</strong>`
//     document.getElementById('ans2').innerHTML = `${kms} kms is ${miles} miles`
// }

function check()
{
    let no = document.getElementById('num').value
    if (no < 0)
    {
        result = `number is negative`
    }
    else if (no==0)
    {
        result = `number is zero`
    }
    else if (no > 0)
    {
        result = `number is positive`
    }
    else
    {
        result = `it is not a number`
    }
    document.getElementById('ans').innerText = result
}

// let a = Math.random() * (100-75) + 75
// console.log(`random value b/w 75 to 100 is ${Math.round(a)}`) 
// otp making
// let x=Math.random() 
// x = x * 10000
// console.log(`otp is ${Math.floor(x)}`)

// maximum number 
// function check(a, b, c)
// {
//     if(a>=b && a>=c)
//     {
//         return a
//     }
//     else if(b>=a && b>=c)
//     {
//         return b
//     }
//     else
//     {
//         return c
//     }
// }
// let a = prompt(`enter first number`)
// let b = prompt(`enter second number`)
// let c = prompt(`enter third number`)
// let ans = check(a, b, c)
// console.log(`largest number amoung ${a}, ${b} & ${c} is ${ans}`)

// // factorail
// let num = prompt(`enter a number`)
// function fact(n)
// {
//     if(n==1)
//     {
//         return 1
//     }
//     return n * fact(n-1)
// }
// let ans = fact(num)
// console.log(`factorial of ${num} is ${ans}`)

// // word & index searching
// let string = prompt(`please enter a string`)
// let substring = `the`
// let ans1 = string.includes(substring)
// console.log(ans1)
// let ans2 = string.indexOf(substring)
// console.log(ans2)

// first letter capital
// let string = prompt(`enter a string`)
// let first = string.charAt(0)
// first = first.toUpperCase()
// let rest = string.slice(1)
// let ans = first + rest
// console.log(ans)


// no. of vowels in string 
// let string = prompt(`pls enter a string`)
// let reg = /[aeoiu]/gi
// let ans = string.match(reg)
// console.log(ans.join(','))
// console.log(ans.join(''))
// console.log(ans.length)

// calculator
// let num1 = prompt(`enter first no`)
// let num2 = prompt(`enter second no`)
// let opr = prompt(`choose any + , - , *`)
// switch(opr)
// {
//     case "+":
//         var ans = parseFloat(num1) + parseFloat(num2)
//         console.log(`${num1} + ${num2} = ${ans}`)
//         break
//     case "-":
//         var ans = parseFloat(num1) - parseFloat(num2)
//         console.log(`${num1} - ${num2} = ${ans}`)
//         break
//     case "*":
//         var ans = parseFloat(num1) * parseFloat(num2)
//         console.log(`${num1} * ${num2} = ${ans}`)
//         break    
//     default:
//         console.log(`not defined`)
// }

// let string = `mr Red has red car & red bike`
// let newstring = string.replace(`red`,`blue`)
// console.log(newstring)

// let string = `mr Red has red car & red bike`
// let reg = new RegExp('red', 'gi')
// let newstring = string.replace(reg,'Blue')
// console.log(newstring)

// reverse string 
// let string = prompt(`plz enter string`)
// let strlen = string.length
// let revstr = ''
// for(let i=strlen-1; i>=0; i--)
// {
//     revstr+=string[i]
// }
// console.log(`${string} reverse is ${revstr}`)

// let string = prompt(`plz enter string`)
// let strarray = string.split(' ')
// strarray.sort()
// console.log(strarray)
// console.log(strarray.join(' '))
