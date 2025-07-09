# ✅ Testware – To-do List

## 🎯 Test Scenarios with Storytelling (END USER FUNCTIONAL GUIDE)

| ID   | Test Scenario Title                                                              |
|------|----------------------------------------------------------------------------------|
| TC01 | Organization of study tasks by a student struggling with concentration           |
| TC02 | Quick reminder creation by a mother during household chores                      |
| TC03 | Removal of a mistaken task by a professional in a highly distracting environment |
| TC04 | Intensive task listing by an event organizer before an important fair            |
| TC05 | Prevention of accidental empty task submission by a user with reduced mobility   |

---

## 📊 Test Case Table (Decision Table with Applied Techniques)

### 🔍 Involved Variables

- **Task title** (input field)
- **Action** (Add or Delete)
- **Number of tasks in the list** (0 to many)
- **Field state** (filled, empty, invalid)
- **Expected result** (rendering, persistence, deletion, feedback)

---

### 🧪 Test Table: Combined Techniques

| ID    | Task Title                         | Action     | List Count     | Expected Result                                         | Test Type                                   |
|-------|------------------------------------|------------|----------------|---------------------------------------------------------|----------------------------------------------|
| TC01  | "Study Mathematics"                | Add        | 0              | Item added and displayed correctly                      | 🟢 Positive tests (happy path)               |
| TC02     | "Go grocery shopping"              | Add        | 1              | Item inserted at the end of the list                    | 🟢 Positive tests (happy path)               |
| TC03  | "*@%$"                             | Delete     | 2 → 1          | Item removed from the list                              | 🟢 Positive tests (happy path)               |
| TC04     | "English class"                    | Add        | 1              | Item inserted and delete button enabled                 | 🟢 Positive tests (happy path)               |
| TC05  | "Buy milk"                         | Add        | 99             | List updated with item 100                              | 🟢 Positive tests (happy path)               |
| TC06  | "  Call Ana  "                     | Add        | 2              | Spaces ignored, task added                              | 🟢 Positive tests with optional parameters   |
| TC07  | "123456"                           | Add        | 1              | Numbers as text are accepted                            | 🟢 Positive tests with optional parameters   |
| TC08  | "Backup @ 11pm"                    | Add        | 1              | Special characters allowed                              | 🟢 Positive tests with optional parameters   |
| TC09  | "Meeting with @board"              | Add        | 2              | Text with @ accepted                                    | 🟢 Positive tests with optional parameters   |
| TC10  | "Delete already deleted task"      | Delete     | nonexistent    | No error, action ignored                                | 🟠 Negative tests with valid inputs          |
| TC11  | ""                                 | Add        | 0              | Error message displayed (required field)                | 🔴 Negative tests with invalid inputs        |
| TC12  | "     "                            | Add        | 0              | Error message displayed (only spaces)                   | 🔴 Negative tests with invalid inputs        |
| TC13  | null                               | Add        | 0              | Error handled with friendly message                     | 🔴 Negative tests with invalid inputs        |
| TC14  | undefined                          | Add        | 0              | Input rejected without crash                            | 🔴 Negative tests with invalid inputs        |
| TC15  | 999999                             | Add        | 0              | Pure number rejected (no implicit conversion)           | 🔴 Negative tests with invalid inputs        |
| TC16  | "T".repeat(255)                    | Add        | 1              | Task accepted at character limit                        | 🟢 Positive tests (happy path)               |
| TC17  | "T".repeat(256)                    | Add        | 1              | Task rejected for exceeding limit                       | 🔴 Negative tests with invalid inputs        |
| TC18  | "", null, undefined, "   ", 256+char| Add       | 0              | No task created, messages displayed                     | 💥 Destructive tests                        |
| TC19  | Add 1000 tasks                     | Add        | 0 → 1000       | System remains functional and responsive                | 💥 Destructive tests                        |
| TC20  | Simultaneous add + delete          | Add/Delete | 10             | No duplication or incorrect loss                        | 💥 Destructive tests                        |

---

## 🔍 Applied Techniques and Notes

| Technique                        | Practical Application                                                           |
|-----------------------------------|--------------------------------------------------------------------------------|
| **Positive test**                 | Simple and functional titles, with positive expected response                   |
| **Optional parameters**           | Spaces, numbers, or special characters accepted as valid                       |
| **Equivalence partitioning**      | Empty field vs filled field                                                    |
| **Boundary value analysis**       | Comparison between 255 (accepted) and 256 (rejected) characters                |
| **Negative test with valid input**| Action of deleting an already deleted task                                     |
| **Destructive test**              | 1000 tasks, simultaneous inputs, multiple extreme actions                      |

---

📌 **Final Note:**  
This document is a living base and can be continuously improved with new entries, increased coverage, and future automations with Cypress (including custom commands and data-driven testing).