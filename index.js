const readline = require('readline-sync');

// Input type
const inputType = readline.question('Input Income or Expense ? (I/E)');
const inputAmount = +readline.question('How much amount : ');
const inputDesc = readline.question('Description : ');


// Type Of
// const transactions = {
//     type = inputType ,
//     amount = inputAmount ,
//     desc = inputDesc,
// };

let balances = 0;

const determineAmount = (inputType, inputAmount) => {
    switch (inputType) {
        case 'Income': return balances = balances + inputAmount;
        case 'Expense' : return balances = balances - inputAmount ;
    }
}

console.log(`\n balance : ${determineAmount(inputType, inputAmount)}`);