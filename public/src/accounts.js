function findAccountById(accounts, id) {
  // YOUR SOLUTION HERE
 
  // find method
  // arrow function
  // using ? as part of ternary operator to conditionally return the findId if it exists (truthy value), or undefined if it doesn't (falsy value).
  
  const findId = accounts.find((account) => account.id === id);
  return findId ? findId : undefined;
}

function sortAccountsByLastName(accounts) {
  // YOUR SOLUTION HERE
  
  // sort method
  // spread operator
  // localeCompare() last names
  
  return [...accounts].sort((a, b) => a.name.last.localeCompare(b.name.last, 'en'));
}

function getAccountFullNames(accounts) {
  // YOUR SOLUTION HERE
  
  // map method
  // arrow function
  // concatenates the first and last name properties of the account's name object with a space in between.
  
   return accounts.map((account) => `${account.name.first} ${account.name.last}`);
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function getTotalNumberOfBorrows(account, books) {
  return books.reduce((acc, book) => {
    const count = book.borrows.reduce((borrowAcc, borrow) => {
      return borrow.id === account.id ? borrowAcc + 1 : borrowAcc;
    }, 0);

    return acc + count;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) => {
      const recent = book.borrows[0];
      return !recent.returned && recent.id === account.id;
    })
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      return { ...book, author };
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getAccountFullNames,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
