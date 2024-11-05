import { Injectable, NotFoundException } from '@nestjs/common';
import { BookDto } from './book.model';

@Injectable()
export class BookService {
  private books: BookDto[] = [];

  constructor() {
    // 추천하는 책 등록
    this.books.push({
      id: 1,
      title: '나미야 잡화점의 기적',
      author: '히가시노 게이고',
      registrationDate: new Date(),
      updateDate: new Date(),
      isAvailable: true,
    });
  }

  // 새로운 책 추가
  addBook(bookDto: BookDto): BookDto {
    const newBook = {
      ...bookDto,
      id: this.books.length + 1,
      registrationDate: new Date(),
      updateDate: new Date(),
    };
    this.books.push(newBook);
    return newBook;
  }

  // 모든 책 조회
  getBooks(): BookDto[] {
    return this.books;
  }

  // 특정 책 조회
  getBook(id: number): BookDto {
    const book = this.books.find((book) => book.id === id);
    if (!book) {
      throw new NotFoundException(`ID가 ${id}인 책을 찾을 수 없습니다.`);
    }
    return book;
  }

  // 책 정보 수정
  updateBook(id: number, bookDto: BookDto): BookDto {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`ID가 ${id}인 책을 찾을 수 없습니다.`);
    }
    const updatedBook = {
      ...this.books[bookIndex],
      ...bookDto,
      id: id,
      updateDate: new Date(),
    };
    this.books[bookIndex] = updatedBook;
    return updatedBook;
  }

  // 책 삭제
  deleteBook(id: number): void {
    const bookIndex = this.books.findIndex((book) => book.id === id);
    if (bookIndex === -1) {
      throw new NotFoundException(`ID가 ${id}인 책을 찾을 수 없습니다.`);
    }
    this.books.splice(bookIndex, 1);
  }
}
