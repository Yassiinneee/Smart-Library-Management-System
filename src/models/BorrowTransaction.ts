import { User } from "./User";
import { Book } from "./Book";

/**
 * Represents a borrowing transaction.
 */

export class BorrowTransaction {
    private returned: boolean = false;
    private overdue: boolean = false;

    constructor(
        private user: User,
        private book: Book,
        private borrowDate: Date = new Date()
    ) {}

    public getUser(): User {
        return this.user;
    }

    public getBook(): Book {
        return this.book;
    }

    public isReturned(): boolean {
        return this.returned;
    }

    public setReturned(status: boolean): void {
        this.returned = status;
    }

    public isOverdue(): boolean {
        return this.overdue;
    }

    public setOverdue(status: boolean): void {
        this.overdue = status;
    }

    public getBorrowDate(): Date {
        return this.borrowDate;
    }
}