import { User } from "../models/User";
import { Student } from "../models/Student";
import { Teacher } from "../models/Teacher";

/**
 * Factory Pattern
 * Creates user objects without exposing creation logic.
 */

export class UserFactory {

    public static createUser(
        type: string,
        id: number,
        name: string
    ): User {

        switch (type.toLowerCase()) {

            case "student":
                return new Student(id, name);

            case "teacher":
                return new Teacher(id, name);

            default:
                throw new Error("Invalid user type");
        }
    }
}