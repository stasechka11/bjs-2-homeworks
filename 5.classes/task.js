class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(newState) {
        if (newState < 0){
            this._state = 0;
        } else if(newState > 100){
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount)  {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}


class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const findedByParamBook = this.books.find(item => item[type] === value);
        return !!findedByParamBook ? findedByParamBook : null;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(book => book.name === bookName);
        if (bookIndex !== -1) {
            return this.books.splice(bookIndex, 1)[0];
        }

        return null;
    }
}

/*
Тестовые сценарии 
*/
// 1. Создайте библиотеку
const library = new Library("Библиотека имени А.С. Пушкина");

// 2. Добавьте в библиотеку несколько печатных изданий разных типов
library.addBook(
    new DetectiveBook(
      "Артур Конан Дойл",
      "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
      2019,
      1008
    )
   );

library.addBook(
    new FantasticBook(
      "Аркадий и Борис Стругацкие",
      "Пикник на обочине",
      1972,
      168
    )
   );
library.addBook(new NovelBook(
    "Герберт Уэллс", 
    "Машина времени", 
    1895, 
    138));

library.addBook(new NovelBook(
    "Алексей Толстой", 
    "Граф Калиостро", 
    1919, 
    20));


// 3. Найдите книгу, изданную в 1919 году
console.log(library.findBookBy("releaseDate", 1919).name); 

// 4. Выдайте любую книгу
console.log("Количество книг до выдачи: " + library.books.length);
const givenBook = library.giveBookByName("Машина времени");
console.log(givenBook);
console.log("Количество книг после выдачи: " + library.books.length);

// 5. Повредите выданную книгу
console.log("Состояние выданной книги до повреждения: " + givenBook.state);
givenBook.state = 10;
console.log("Состояние выданной книги после повреждения: " + givenBook.state);

// 6. Восстановите выданную книгу
givenBook.state = 30;
console.log("Состояние выданной книги после восстановления: " + givenBook.state);

// 7. Попытайтесь добавить восстановленную книгу обратно в библиотеку
library.addBook(givenBook);
console.log("Количество книг после добавления: " + library.books.length);
