# Day #1: boolean operations ('equal to' and 'equal value and type')

The time has come, Samuel! You will start your journey at #7DaysOfCode ;)

This first day is super important! At the end of it, you will have new knowledge that is essential for the next challenges.

There is a super common situation for those who use Javascript: problems with variable types when comparing the values of two variables with each other. I've been through this a lot!

In compiled programming languages, such as Java and C#, this problem is detected at compile time, and you who are developing the code have clear warning of the error.

In Javascript, these errors go unnoticed, as the code does not go through a compiler. In other words, errors only appear at run time.

The most confusing part for those who are starting to learn logic with Javascript is the equality operation between values. Depending on how you write your code, Javascript will perform a type conversion to a Boolean type implicitly (automatically), and this will affect variables that were Strings, Numbers, Object, etc….

This causes some strange behavior, like all of these examples here below returning true:

console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );

Which doesn't necessarily make a lot of sense.

(You can test all of this by going to your browser, right-clicking, choosing the “Inspect” option and the “Console” tab. In this tab, simply copy and paste each of the lines above to confirm that they all actually return true) .

Therefore, your task today is to rewrite the code below so that it prints the information correctly, in a way that makes sense and without errors:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

`if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}`