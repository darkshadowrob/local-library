function findAuthorById(authors, id) {
  // YOUR SOLUTION HERE
  
  // find method
  
  const authorId = authors.find(author => id === author.id);
  return authorId;
}

function findBookById(books, id) {
  // YOUR SOLUTION HERE
  
  // reduce method
  
  const bookId = books.reduce((acc, book) => {
  if (id === book.id) {
    return book;
  }
  return acc;
  }, undefined);
  return bookId;
}

// NOTE: YOU DON'T HAVE TO EDIT THE FUNCTIONS BELOW
function partitionBooksByBorrowedStatus(books) {
  return books.reduce(
    (acc, book) => {
      const [borrowed, returned] = acc;
      const recent = book.borrows[0];
      if (recent.returned) {
        returned.push(book);
      } else {
        borrowed.push(book);
      }

      return acc;
    },
    [[], []]
  );
}

function getBorrowersForBook(book, accounts) {
  const accountsById = accounts.reduce((acc, account) => {
    acc[account.id] = account;
    return acc;
  }, {});

  return book.borrows
    .map(({ id, returned }) => ({
      ...accountsById[id],
      returned,
    }))
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
