"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser.
*/
//module.exports = { makeBank }; //add all of your function names here that you need for the node mocha tests


/* 2.	In the following code the transactionsDB is publicly accessible to any code that has access to the bank object.  
Instead of using the object literal for bank, write a makeBank function that will encapsulate and return the bank object. 
Make the transactionsDB private by making it a local variable in the makeBank function instead of a property on the bank object.  
*/

/**
 * @returns {bank} factory function that builds and returns bank object
 */
export function makeBank() {
    //implement this

    // let btransaction = bank.transactionsDB;
    const bank = { transactionsDB: [], };
    const transactionsDB = [
        { customerId: 1, customerTransactions: [10, 50, -40] },
        { customerId: 2, customerTransactions: [10, 10, -10] },
        { customerId: 3, customerTransactions: [5, -5, 55] }];
    makeBank.getBalance = function (id) {
        const customer = transactionsDB.find(customer => customer.customerId === id);
        let balance = 0;
        for (const trans of customer.customerTransactions) { balance += trans; }
        return balance;
    };
    makeBank.bankBalance = function () {
        let total = 0;
        for (const trans of transactionsDB) {
            total += this.getBalance(trans.customerId);
        }
        return total;
    };

    return makeBank;

}

//const bankacc = makeBank();


