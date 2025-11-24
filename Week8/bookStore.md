# Library System Task

## Overview

You are tasked with implementing a simple **library system** that tracks members, their borrowed books, and the history of their book actions. This is similar in structure to a banking system, but in a library context.

## Classes and Requirements

### 1. `BookRecord`

Represents an action performed on a book.

**Constructor:**

* `action` (string): Type of action (`"borrow"` or `"return"`).
* `title` (string): The title of the book.

### 2. `Member`

Tracks books borrowed and returned by a library member.

**Properties:**

* `name` (string): The member's name.
* `borrowedBooks` (number): Number of books currently borrowed (starts at 0).
* `history` (array of `BookRecord`): Tracks all book actions.

**Methods:**

* `borrowBook(title)`:

  * Adds a new `BookRecord("borrow", title)` to `history`.
  * Increases `borrowedBooks` by 1.
  * Prints the current number of borrowed books.

* `returnBook(title)`:

  * Adds a new `BookRecord("return", title)` to `history`.
  * Decreases `borrowedBooks` by 1 (cannot go below 0).
  * Prints the current number of borrowed books.

### 3. `Library`

Tracks all library members.

**Properties:**

* `members` (array of `Member`): List of all members.

**Methods:**

* `addMember(member)`:

  * Adds a new member to `members`.

* `getMember(name)`:

  * Finds and returns a member by name.

* `totalBorrowedBooks()`:

  * Returns the sum of all borrowed books of all members.

* `mostActiveMember()`:

  * Returns the member who borrowed the most books.

* `transferBook(fromName, toName, title)`:

  * Transfers a book from one member to another.
  * Essentially, it removes the book from `fromName` and adds it to `toName`.
  * Prints a message describing the transfer.

## Notes

* The structure is intentionally similar to a banking system with accounts and transactions.
* Focus on correct class structure, method implementation, and proper tracking of history and counts.
* Make sure to handle edge cases, e.g., returning a book when `borrowedBooks` is 0.

---

**Example Usage:**

```javascript
const member1 = new Member("Alice");
const member2 = new Member("Bob");

const library = new Library();
library.addMember(member1);
library.addMember(member2);

member1.borrowBook("Harry Potter"); // borrowedBooks: 1
member2.borrowBook("Lord of the Rings"); // borrowedBooks: 1

library.transferBook("Alice", "Bob", "Harry Potter"); // transfer message
console.log(library.totalBorrowedBooks()); // 2
```
