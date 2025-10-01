package com.learn.BookApplication.controller;

import com.learn.BookApplication.entity.Book;
import com.learn.BookApplication.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books/v1")
public class BookController {

    private final BookService bookService;
    @Autowired
    public BookController(BookService bookService){
        this.bookService = bookService;
    }

    @GetMapping()
    public ResponseEntity<List<Book>> getAll(){
        List<Book> bookList = bookService.findAll();
        return ResponseEntity.ok(bookList);
    }

    @PostMapping()
    public ResponseEntity<Book> addBook(@RequestBody Book book){
        Book savedBook = bookService.addBook(book);
        return ResponseEntity.ok(savedBook);
    }


    @GetMapping("/{title}")
    public ResponseEntity<Book> getBookByName(@PathVariable("title") String title){
        Book book = bookService.findByTitle(title).orElseThrow(() -> new RuntimeException("Book not found"));
        return ResponseEntity.ok(book);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Book> updateBook(@PathVariable Long id, @RequestBody Book book){
        Book updated = bookService.updateBook(book);
        return ResponseEntity.ok(updated);
    }

    @PutMapping("/title/{title}")
    public ResponseEntity<Book> updateBookByTitle(@PathVariable String title, @RequestBody Book newBookData){
        Book existingBook = bookService.findByTitle(title)
                .orElseThrow(() -> new RuntimeException("Book not found"));

        // update only necessary fields
        existingBook.setAuthor(newBookData.getAuthor());
        existingBook.setPublishedYear(newBookData.getPublishedYear());
        return ResponseEntity.ok(bookService.save(existingBook));
    }

    @DeleteMapping("/{title}")
    public ResponseEntity<Void> deleteMapping(@PathVariable String title){
        bookService.deleteBook(title);
        return ResponseEntity.ok().build();
    }
}
