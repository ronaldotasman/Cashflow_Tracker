const readline = require('readline-sync');


let balances = 0;


const determineBalance = (inputType, inputAmount) => {
    switch (inputType) {
        case 'Income': return balances = balances + inputAmount;
        case 'Expense' : return balances = balances - inputAmount;
    }
}

// let arrTransactions =[
//     {
//         type : inputType,
//         amount
//     }
// ];

let inputType;
let inputAmount;
let inputDesc;

do {
    // Input
    inputType = readline.question('Input Income or Expense or Done: ');

    if (inputType === 'Done') break ;
    if (inputType !== 'Income' && inputType !== 'Expense'){
        console.log('Plese input Income, Expense, or Done');
        continue;
    }

    inputAmount = +readline.question('How much amount : ');
    inputDesc = readline.question('Description : '); 

    // Call function
    determineBalance(inputType, inputAmount);    
} 
while (inputType !== 'Done') 
    console.log(`\nTotal balance : ${balances}`);    

