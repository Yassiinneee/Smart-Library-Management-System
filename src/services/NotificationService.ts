import { User } from "../models/User";

/**
 * Observer Pattern
 * Manages subscribers and notifications.
 */

export class NotificationService {

    private observers: User[] = [];

    /**
     * Register user for notifications.
     */
    public subscribe(user: User): void {
        this.observers.push(user);
    }

    /**
     * Notify all registered users.
     */
    public notify(message: string): void {

        this.observers.forEach(user => {
            user.update(message);
        });
    }
}