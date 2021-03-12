// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
 let correctAccount =  accounts.find((account)=>{
    if (account.id == id){
      return account;
    }
  });
  return correctAccount;
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a, b) =>{
    let nameA = a.name; let nameB = b.name;
    
    if(nameA.last < nameB.last) { return -1; }
    if(nameA.last > nameB.last) { return 1; }
    return 0;
});
}

function getTotalNumberOfBorrows(account, books) {
  let acc = 0;
  const accountId = account.id;
  books.forEach((book)=>
  { const borrows = book.borrows;
    let bookIncludes = borrows.some((item)=>item.id == account.id,);
    if(bookIncludes){
      acc++
    }
  })
  return acc;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accountId = account.id;
  console.log(accountId);
  let list = [];
  books.forEach((book)=> {

    const {id, title, genre, authorId, borrows} = book;
    const author = authors.find((item)=> {
      //console.log(item)
      if (item.id === authorId){
      
      return item;
      
    } } );
    const userBorrowed = borrows.some((item)=>{
      const borrowedValues = Object.values(item);
      if (borrowedValues.includes(accountId)){
        //console.log(Object.values(item));
        if (borrowedValues.includes(false)){
          return true;
        }
        return false;
      }

    });
    if(userBorrowed){
      let newObject = {id:id, title:title, genre:genre, authorId:authorId, author: author, borrows: borrows};
      list.push(newObject);
    }
})  
  return list;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
