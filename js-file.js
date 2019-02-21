const fs = require('fs')

function readMyDataFromFile(fileName) {
  try {
    let fileContent = fs.readFileSync(fileName, 'utf8')
    return JSON.parse(fileContent)
  } catch (error) {
    console.log(error)
  }
}

function saveMyDataToFile(fileName, data) {
  try {
    let dataAsJson = JSON.stringify(data, null, '\t')
    fs.writeFileSync(fileName, dataAsJson)
  } catch (error) {
    console.log(error)
  }
}

function logMyData(object1) {
  for (let property1 in object1) {
    console.log(object1[property1])
  }
}

let myUsers = readMyDataFromFile('users.json')
let myProducts = readMyDataFromFile('products.json')
let myTransactions = readMyDataFromFile('transactions.json')
let myEvents = readMyDataFromFile('events.json')
/*
console.log(myUsers)
console.log(myProducts)
console.log(myTransactions)
console.log(myEvents)
*/


myUsers.users.forEach(user => {
  let transactions = []
  myTransactions.transactions.forEach(transaction => {
    if (transaction.user == user.id) {
      transactions.push(transaction)
    }
  })
  user.transactions = transactions
  let events = []
  myEvents.events.forEach(event => {
    if (event.user == user.id) {
      events.push(event)
    }
  })
  user.events = events
})

myUsers.users.forEach(user => {
  user.transactions.forEach(transaction => {
    myProducts.products.forEach(product => {
      if (transaction.product == product.id)
        //console.log('Transaction:', transaction.id, product.id)
        transaction.product = product
    })
  })
})

myUsers.users.forEach(user => {
  user.events.forEach(event => {
    myProducts.products.forEach(product => {
      if (event.product == product.id)
        //console.log('Event:', event.id, product.id)
        event.product = product
    })
  })
})

logMyData(myUsers.users)
//console.log(myUsers.users)