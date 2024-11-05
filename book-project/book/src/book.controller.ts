import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { BookService } from './book.service';
import { BookDto } from './book.model';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  // 새로운 책 추가
  @Post()
  addBook(@Body() bookDto: BookDto): BookDto {
    return this.bookService.addBook(bookDto);
  }

  // 모든 책 조회
  @Get()
  getBooks(): BookDto[] {
    return this.bookService.getBooks();
  }

  // 특정 책 조회
  @Get(':id')
  getBook(@Param('id', ParseIntPipe) id: number): BookDto {
    return this.bookService.getBook(id);
  }

  // 책 정보 수정
  @Put(':id')
  updateBook(
    @Param('id', ParseIntPipe) id: number,
    @Body() bookDto: BookDto,
  ): BookDto {
    return this.bookService.updateBook(id, bookDto);
  }

  // 책 삭제
  @Delete(':id')
  deleteBook(@Param('id', ParseIntPipe) id: number): void {
    this.bookService.deleteBook(id);
  }
}
