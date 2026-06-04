import { User } from "./User";

/**
 * Represents a teacher user.
 */

export class Teacher extends User {
    public getUserType(): string {
        return "Teacher";
    }
}