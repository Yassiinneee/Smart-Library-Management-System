import { LibrarySystem } from "./services/LibrarySystem";
import { UserFactory } from "./factories/UserFactory";
import { Book } from "./models/Book";

/**
 * Application Entry Point
 */

const library = LibrarySystem.getInstance();

/* ----------------------------------
   Create Users Using Factory Pattern
----------------------------------- */

const student =
    UserFactory.createUser(
        "student",
        1,
        "Alice"
    );

const teacher =
    UserFactory.createUser(
        "teacher",
        2,
        "Dr. Smith"
    );

/* ----------------------------------
   Add Users
----------------------------------- */

library.addUser(student);
library.addUser(teacher);

/* ----------------------------------
   Add Books
----------------------------------- */

library.addBook(
    new Book(
        101,
        "Clean Code",
        "Robert C. Martin"
    )
);

library.addBook(
    new Book(
        102,
        "Design Patterns",
        "Gang of Four"
    )
);

/* ----------------------------------
   Borrow Book
----------------------------------- */

library.borrowBook(1, 101);

/* ----------------------------------
   View Borrowed Books
----------------------------------- */

library.viewBorrowedBooks();

/* ----------------------------------
   Simulate Overdue Book
----------------------------------- */

library.markBookAsOverdue(101);

/* ----------------------------------
   Return Book
----------------------------------- */

library.returnBook(101);

/* ----------------------------------
   View Borrowed Books Again
----------------------------------- */

library.viewBorrowedBooks();