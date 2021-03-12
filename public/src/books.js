// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  let author = authors.find((author) => (author.id == id));
  return author;
}

function findBookById(books, id) {
  return books.find((book)=> book.id == id);
}

function partitionBooksByBorrowedStatus(books) {
  let borrowed= books.filter((book)=> {
    const currentBorrowedList = book.borrows;
    let bookAvailable = currentBorrowedList.some((item)=> item["returned"] == false);
    if (bookAvailable){
      return book;
    };
  }
  );

  let returned = books.filter((book)=> {
    const currentBorrowedList = book.borrows;
    let bookAvailable = currentBorrowedList.every((item)=> item["returned"] == true);
    if (bookAvailable){
      return book;
    };
    
  }
  );
  let result = [];
  result.push(borrowed)
  result.push(returned)
  return result;
}

function getBorrowersForBook(book, accounts) {
   let borrowedList = book.borrows;
  console.log(borrowedList);
  let borrowerAccounts = borrowedList.reduce((acc, item)=>{
    let current = item.id;
    if(acc.length < 10){
      let personInfo = accounts.find((person)=>{
      if (person.id == current){
        return person;
      }
    })

    let newObj = {...personInfo, returned: item.returned};
    acc.push(newObj);
    //console.log(newObj);
    }
    
    
    return acc;
  },[])

  return borrowerAccounts;

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};