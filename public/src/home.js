// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  let accumulator = 0;
   let acc = books.reduce((acc, book)=> {
   accumulator++
   acc = accumulator;
   return acc;
  },0)
  return acc;
}

function getTotalAccountsCount(accounts) {
  let accumulator = 0;
  let acc = accounts.reduce((acc, account)=> {
  accumulator++
  acc = accumulator;
  return acc;
 },0)
 return acc;
}

function getBooksBorrowedCount(books) {
  let acc = 0;
  books.forEach((book)=>{
    let borrows = book.borrows;
    if(!borrows.every((item)=>
      (item.returned == true)
    )){
      acc++
    }
  })
  return acc;
}

function getMostCommonGenres(books) {
//reducing the books into a single array holding objects of name:, count:
let accSize = 0;
let array = books.reduce((acc, book)=>{
  //console.log(book.genre);
  //checks if object includes bookGenre and returns true;
  if (acc.some((obj)=>{
  
    if(obj.name === book.genre){
      obj.count = obj.count + 1;
      return true;
    }
  })){

    return acc;
  } else {
    let myObj = {name: book.genre, count: 1}
    acc.push(myObj);
    accSize++;
    return acc;
  } 
  
}, []);


console.log(array);
array.sort((itema, itemb)=> itemb.count - itema.count)
return array.slice(0, 5);
}

function getMostPopularBooks(books) {

  books.sort((bookA, bookB)=>bookB.borrows.length - bookA.borrows.length);

  let array = books.reduce((acc, book)=>{
    //console.log(book);
    const name = book.title;
    let myObj = {name: name, count: book.borrows.length};
    acc.push(myObj);
    return acc;
    
  },[])
  return array.slice(0, 5);

}

function getMostPopularAuthors(books, authors) {
  books.sort((bookA, bookB)=>bookB.borrows.length - bookA.borrows.length);
  let authorList = [];
  books.forEach((book)=>{
    let currentAuthor = authors.filter((author)=> book.authorId === author.id);
    if (authorList.includes((authorList.name == currentAuthor.name))){
      let currentAuthorInList = authorList.filter((author)=>author.name===currentAuthor.name);
      currentAuthorInList.count += book.borrows.length;

    } else {
      let authorName = currentAuthor;
      const {first, last} = authorName[0].name;
      let name = `${first} ${last}`
      authorList.push({name: name, count : book.borrows.length});
    }
  
  
  
  });
return authorList.slice(0, 5);


}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
