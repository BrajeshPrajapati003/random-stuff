package com.learn.BookApplication.service;

import com.learn.BookApplication.entity.Book;
import com.learn.BookApplication.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookService{

    @Autowired
    BookRepository bookRepository;

    public Book addBook(Book book){
        return bookRepository.save(book);
    }

    public List<Book> findAll(){
        return bookRepository.findAll();
    }

    public Optional<Book> findByTitle(String name){
        return  bookRepository.findByTitle(name);
    }

    public Book updateBook(Book book){
        return bookRepository.save(book); // this will generate a new entity with a different id

    }

    public Book save(Book book){
        return bookRepository.save(book);
    }

    public Book updateBook(String title, Book newBookData){
        Book existingBook = bookRepository.findByTitle(title)
                .orElseThrow(() -> new RuntimeException("Book not found!"));

        // update fields you want
        existingBook.setAuthor(newBookData.getAuthor());
        existingBook.setPublishedYear(newBookData.getPublishedYear());

        // Save existing entity (with same id)
        return bookRepository.save(existingBook);
    }

    public void deleteBook(String title) {
        bookRepository.deleteByTitle(title);
    }
}
