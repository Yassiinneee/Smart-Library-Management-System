import { User } from "./User";

/**
 * Represents a student user.
 */

export class Student extends User {
    public getUserType(): string {
        return "Student";
    }
}