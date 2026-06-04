/**
 * Abstract User class
 * Defines common properties and behavior for all users.
 */

export abstract class User {
    constructor(
        protected id: number,
        protected name: string
    ) {}

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    /**
     * Observer Pattern:
     * Called when a notification is sent.
     */
    public update(message: string): void {
        console.log(`📢 Notification for ${this.name}: ${message}`);
    }

    /**
     * Must be implemented by child classes.
     */
    public abstract getUserType(): string;
}