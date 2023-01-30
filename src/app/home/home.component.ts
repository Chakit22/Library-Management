import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //Variables to get a book by the particular ID.
  fetchedBooks:any = []; //Stores the currently fetched book by it's id.
  bookExists:boolean = false;

  //Get all books
  allBooks:any = [];

  constructor(private http:HttpClient) {}
  ngOnInit(): void {
    console.log("Inside ngOninit");
    this.fetchAllBooks();
  }

  //Get all books
  fetchAllBooks() {
    console.log("Inside fetchAllBooks");
    this.http.get('http://localhost:3000/').subscribe((books) => {
      console.log("type of books: ",typeof(books));
      console.log("books : \n");
      console.log(books);
      this.allBooks = books;
    });
  }


  //Get a particular Book By it's ID.
  getBookById(bookId:any){
    console.log("Inside getBooksById");
    this.http.get('http://localhost:3000/' + bookId.id).subscribe((books) => {
      console.log("type of books: ",typeof(books));
      console.log("book : \n");
      console.log(books);
      console.log('type of "book" is : ',typeof("book"));
      this.fetchedBooks = books;
    },(err) => {
      if(err.error.msg)
        alert(err.error.msg);
    });
  }

  //delete Book by a particular ID.
  deleteBook(bookId:any){
    console.log("Inside deleteBook by Id");
    this.http.delete('http://localhost:3000/delete/' + bookId.id).subscribe((deletedBook) => {
      console.log("Dleteed Book is : ");
      console.log(deletedBook);
      // this.fetchAllBooks();
    });
  }

  //DeleteAllBooks
  deleteAllBooks(){
    console.log("Inside delete all books!!");
    this.http.delete('http://localhost:3000/delete').subscribe((deletedBooks) => {
      console.log("Deleted Books are : ");
      console.log(deletedBooks);
      // this.fetchAllBooks();
    });
  }

  //Add a new Book to the database
  addBook(newBook:any){
    console.log("Inside add a new Book!!");
    this.http.post('http://localhost:3000/',newBook).subscribe((addedBook) => {
      console.log("The newly added book is: ");
      console.log(addedBook);
    },(err) => {
      console.log("error : ",err.error);
      if(err.error.msg)
        alert(err.error.msg);
    });
  }

  //Update a book by it;s particular ID
  updateBook(book:any){
    console.log("Inside update a new Book!!");
    console.log("book : ",book);
    this.http.put('http://localhost:3000/update/'+ book.id,book).subscribe((updatedBook) => {
      console.log("The updated Book is ");
      console.log(updatedBook);
    },(err) => {
      if(err.error.msg)
        alert(err.error.msg);
    });
  }

  alertmsg1(){
    alert("Book inserted successfully!!");
  }

  alertmsg2(){
    alert("Book updated sucessfully!!");
  }
}