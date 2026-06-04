/**
 * Represents a book in the library.
 */

export class Book {
    private available: boolean = true;

    constructor(
        private id: number,
        private title: string,
        private author: string
    ) {}

    public getId(): number {
        return this.id;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public isAvailable(): boolean {
        return this.available;
    }

    public setAvailable(status: boolean): void {
        this.available = status;
    }
}