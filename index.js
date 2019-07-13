import main from './main'
const types = require('@babel/types')
console.log(process.env) // This will be empty as you can access process.env properties only (explore why?)

// Destructuring with single property
const { NAME } = process.env;
console.log(`Hello ${NAME}`) // Hello AKILA

// Destructuring with multiple property
const { FOO, BAR } = process.env  // Actual issue to be solved
console.log(`FOO ${FOO}, BAR ${BAR}`) // FOO undefined, BAR undefined

main()
