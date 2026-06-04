import { User } from "../models/User";
import { Book } from "../models/Book";
import { BorrowTransaction } from "../models/BorrowTransaction";
import { NotificationService } from "./NotificationService";

/**
 * Singleton Pattern
 * Only one library system instance can exist.
 */

export class LibrarySystem {

    private static instance: LibrarySystem;

    private users: User[] = [];
    private books: Book[] = [];
    private transactions: BorrowTransaction[] = [];

    private notificationService =
        new NotificationService();

    /**
     * Private constructor prevents direct instantiation.
     */
    private constructor() {}

    /**
     * Global access point.
     */
    public static getInstance(): LibrarySystem {

        if (!LibrarySystem.instance) {
            LibrarySystem.instance =
                new LibrarySystem();
        }

        return LibrarySystem.instance;
    }

    /**
     * Add user to system.
     */
    public addUser(user: User): void {

        this.users.push(user);

        this.notificationService.subscribe(user);

        console.log(
            `✅ ${user.getUserType()} added: ${user.getName()}`
        );
    }

    /**
     * Add book to library.
     */
    public addBook(book: Book): void {

        this.books.push(book);

        console.log(
            `📚 Book added: ${book.getTitle()}`
        );
    }

    /**
     * Borrow a book.
     */
    public borrowBook(
        userId: number,
        bookId: number
    ): void {

        const user = this.users.find(
            u => u.getId() === userId
        );

        const book = this.books.find(
            b => b.getId() === bookId
        );

        if (!user || !book) {
            console.log("❌ User or Book not found");
            return;
        }

        if (!book.isAvailable()) {
            console.log("❌ Book already borrowed");
            return;
        }

        book.setAvailable(false);

        const transaction =
            new BorrowTransaction(user, book);

        this.transactions.push(transaction);

        console.log(
            `📖 ${user.getName()} borrowed ${book.getTitle()}`
        );
    }

    /**
     * Return a book.
     */
    public returnBook(bookId: number): void {

        const transaction =
            this.transactions.find(
                t =>
                    t.getBook().getId() === bookId &&
                    !t.isReturned()
            );

        if (!transaction) {
            console.log("❌ Transaction not found");
            return;
        }

        transaction.setReturned(true);

        transaction.getBook().setAvailable(true);

        console.log(
            `✅ Returned: ${transaction.getBook().getTitle()}`
        );
    }

    /**
     * Display all active borrowed books.
     */
    public viewBorrowedBooks(): void {

        console.log("\n=== Borrowed Books ===");

        const activeTransactions =
            this.transactions.filter(
                t => !t.isReturned()
            );

        if (activeTransactions.length === 0) {
            console.log("No borrowed books.");
            return;
        }

        activeTransactions.forEach(transaction => {

            console.log(
                `${transaction.getUser().getName()} -> ${transaction.getBook().getTitle()}`
            );
        });
    }

    /**
     * Simulates overdue book detection.
     */
    public markBookAsOverdue(
        bookId: number
    ): void {

        const transaction =
            this.transactions.find(
                t =>
                    t.getBook().getId() === bookId &&
                    !t.isReturned()
            );

        if (!transaction) {
            console.log("Book not found.");
            return;
        }

        transaction.setOverdue(true);

        this.notificationService.notify(
            `The book "${transaction.getBook().getTitle()}" is overdue!`
        );
    }
}