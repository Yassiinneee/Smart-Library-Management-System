# 📚 Smart Library Management System

A professional TypeScript-based Library Management System demonstrating the practical implementation of:

- Object-Oriented Programming (OOP)
- Design Patterns
- Clean Architecture
- Modular Programming
- TypeScript Best Practices

The application simulates a real library environment where users can be registered, books can be added, borrowed, returned, and overdue notifications can be sent automatically.

---

# 🚀 Project Purpose

This project was developed to demonstrate how software design principles and design patterns can be applied to build a scalable and maintainable system.

The system supports:

- User Management
- Book Management
- Borrowing Operations
- Returning Operations
- Borrow Tracking
- Notification Management

---

# 🎯 Learning Objectives

This project demonstrates:

✅ TypeScript Fundamentals

✅ Classes and Objects

✅ Encapsulation

✅ Inheritance

✅ Abstraction

✅ Polymorphism

✅ Singleton Pattern

✅ Factory Pattern

✅ Observer Pattern

✅ Modular Code Organization

✅ Clean Code Principles

---

# 🏗️ Design Patterns Used

## 1. Singleton Pattern

### Purpose

Ensures only one instance of the Library System exists.

### Implementation

File:

```text
src/services/LibrarySystem.ts
```

Usage:

```ts
const library = LibrarySystem.getInstance();
```

### Benefits

- Prevents duplicate library systems
- Centralized state management
- Global access point

---

## 2. Factory Pattern

### Purpose

Creates users without exposing object creation logic.

### Implementation

File:

```text
src/factories/UserFactory.ts
```

Usage:

```ts
UserFactory.createUser("student", 1, "Alice");
```

Supported Types:

- Student
- Teacher

### Benefits

- Cleaner object creation
- Easy extensibility
- Reduced code duplication

---

## 3. Observer Pattern

### Purpose

Allows automatic notifications to be sent to users when important events occur.

### Implementation

Files:

```text
src/services/NotificationService.ts
src/models/User.ts
```

Example:

```text
The book "Clean Code" is overdue!
```

All subscribed users automatically receive the notification.

### Benefits

- Loose coupling
- Event-driven communication
- Easy scalability

---

# 📂 Project Structure

```text
Smart-Library-Management-System
│
├── src
│   │
│   ├── factories
│   │   └── UserFactory.ts
│   │
│   ├── models
│   │   ├── User.ts
│   │   ├── Student.ts
│   │   ├── Teacher.ts
│   │   ├── Book.ts
│   │   └── BorrowTransaction.ts
│   │
│   ├── services
│   │   ├── LibrarySystem.ts
│   │   └── NotificationService.ts
│   │
│   ├── main.ts
│   │
│   └── Code-execution.png
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

# 📖 File-by-File Explanation

## User.ts

Abstract base class representing all users.

### Responsibilities

- Store user ID
- Store user name
- Receive notifications
- Force child classes to implement user type

Methods:

```ts
getId()
getName()
update()
getUserType()
```

---

## Student.ts

Represents a student user.

Returns:

```ts
"Student"
```

when:

```ts
getUserType()
```

is called.

---

## Teacher.ts

Represents a teacher user.

Returns:

```ts
"Teacher"
```

when:

```ts
getUserType()
```

is called.

---

## Book.ts

Represents a library book.

### Properties

- id
- title
- author
- availability status

### Methods

```ts
getId()
getTitle()
getAuthor()
isAvailable()
setAvailable()
```

---

## BorrowTransaction.ts

Represents a borrowing record.

### Stores

- Borrower
- Borrowed Book
- Borrow Date
- Return Status
- Overdue Status

### Methods

```ts
getUser()
getBook()
isReturned()
setReturned()
isOverdue()
setOverdue()
getBorrowDate()
```

---

## UserFactory.ts

Factory Pattern implementation.

Creates:

```ts
Student
Teacher
```

objects based on a string type.

Example:

```ts
UserFactory.createUser(
    "student",
    1,
    "Alice"
);
```

---

## NotificationService.ts

Observer Pattern implementation.

Responsibilities:

- Register subscribers
- Store observers
- Send notifications

Methods:

```ts
subscribe()
notify()
```

---

## LibrarySystem.ts

Core system controller.

Singleton Pattern implementation.

### Responsibilities

- Manage users
- Manage books
- Manage transactions
- Borrow books
- Return books
- Detect overdue books
- Send notifications

Main methods:

```ts
addUser()
addBook()
borrowBook()
returnBook()
viewBorrowedBooks()
markBookAsOverdue()
```

---

## main.ts

Application entry point.

Demonstrates:

1. Creating users
2. Adding users
3. Adding books
4. Borrowing books
5. Viewing borrowed books
6. Marking overdue books
7. Returning books

---

# ⚙️ How the System Works

## Step 1

Create users using Factory Pattern.

```ts
const student =
UserFactory.createUser(
    "student",
    1,
    "Alice"
);
```

---

## Step 2

Add users to the library.

```ts
library.addUser(student);
```

Users are automatically subscribed to notifications.

---

## Step 3

Add books.

```ts
library.addBook(
    new Book(
        101,
        "Clean Code",
        "Robert C. Martin"
    )
);
```

---

## Step 4

Borrow a book.

```ts
library.borrowBook(1, 101);
```

The book becomes unavailable.

---

## Step 5

Display active borrowed books.

```ts
library.viewBorrowedBooks();
```

Output:

```text
=== Borrowed Books ===
Alice -> Clean Code
```

---

## Step 6

Mark a book as overdue.

```ts
library.markBookAsOverdue(101);
```

This triggers notifications.

Output:

```text
📢 Notification for Alice:
The book "Clean Code" is overdue!
```

---

## Step 7

Return the book.

```ts
library.returnBook(101);
```

The book becomes available again.

---

# 🖥️ Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Navigate to Project

```bash
cd Smart-Library-Management-System
```

---

## Install Dependencies

```bash
npm install
```

---

## Run Application

```bash
npm start
```

---

# 📦 package.json

The project uses:

```json
{
  "typescript": "^6.0.3",
  "ts-node": "^10.9.2",
  "@types/node": "^25.9.1"
}
```

Run command:

```json
"start": "ts-node src/main.ts"
```

---

# 🔧 TypeScript Configuration

The project uses:

```json
{
  "target": "ES2020",
  "module": "nodeNext",
  "moduleResolution": "nodeNext",
  "strict": true,
  "outDir": "./dist",
  "rootDir": "./src"
}
```

### Features Enabled

- Strict Type Checking
- Modern ES2020 Support
- Node.js Compatibility
- Automatic Compilation Output

---

# 📸 Expected Console Output

```text
✅ Student added: Alice
✅ Teacher added: Dr. Smith

📚 Book added: Clean Code
📚 Book added: Design Patterns

📖 Alice borrowed Clean Code

=== Borrowed Books ===
Alice -> Clean Code

📢 Notification for Alice:
The book "Clean Code" is overdue!

📢 Notification for Dr. Smith:
The book "Clean Code" is overdue!

✅ Returned: Clean Code

=== Borrowed Books ===
No borrowed books.
```

---

# 🔒 Error Handling

The system handles:

### Invalid User

```text
❌ User or Book not found
```

---

### Invalid Book

```text
❌ User or Book not found
```

---

### Borrowing Unavailable Book

```text
❌ Book already borrowed
```

---

### Invalid Return

```text
❌ Transaction not found
```

---

# 🧠 OOP Concepts Demonstrated

| Concept | Implementation |
|----------|---------------|
| Encapsulation | Private fields in classes |
| Inheritance | Student and Teacher extend User |
| Abstraction | User abstract class |
| Polymorphism | Different user types handled uniformly |
| Composition | LibrarySystem contains books, users, transactions |
| Modularity | Organized into models, services, and factories |

---

# 🚀 Future Improvements

Potential enhancements include:

- Search Books
- Book Categories
- Due Dates
- Fine Calculation
- Reservation System
- User Authentication
- Database Integration
- REST API
- Express.js Backend
- MongoDB Storage
- Admin Dashboard
- Unit Testing with Jest
- Email Notifications

---

# 🎓 Educational Value

This project is an excellent example of:

- TypeScript Development
- Object-Oriented Programming
- Design Patterns
- Clean Architecture
- Software Engineering Fundamentals

It can serve as a strong foundation for building enterprise-level Library Management Systems.

---

# 👨‍💻 Author

Developed as an educational project to demonstrate:

- TypeScript
- OOP
- Design Patterns
- Software Architecture

---

# 📜 License

This project is open-source and intended for educational and learning purposes.
