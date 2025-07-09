## 📑 Test Documentation
All scenarios, test cases, and techniques are described in:

➡️ [`docs/testware-todolist-pt.md`](docs/testware-todolist-pt.md)

➡️ [`docs/testware-todolist-eng.md`](docs/testware-todolist-eng.md)

## PROMPT
I want you to develop the following testwares for a feature.
Use Socratic questioning throughout the process, but do not show the questions unless I ask.
Show only the results unless otherwise requested.

Feature: Task List
    Description: 
        The screen contains a text field to fill in and a button to add the item.
        There is also a delete button for deleted items.
        There is currently no option to update the title of a task.

Type of test to be performed: Functional - ISO 25010 + Smoke test.
Artifacts:
    Test scenario using storytelling
        Format:
            Do not tell a story here, but create a test case that considers the reality of the end user, guiding QA to think and act as the end user.
            Display only the title of the test scenario.
            Show the story only if I ask.
            Scenarios must be restricted to the context of using the functionality being tested.
            The name must:
                Generate empathy in the reader.
                Expose a possible purpose/objective for which the user will use the functionality/service.
        Example:
            Wrong scenario: Flight registration
            Correct scenario: Booking a flight for a couple on their honeymoon

    Test cases using test techniques
            Build a decision table using the following techniques:
                Positive/negative/destructive testing
                Boundary value analysis
                Equivalence partitioning
                The table must contain a column named "Test Type". This column will dictate the order of the items in the table and must follow the organization below, going from positive to destructive. The names in this column must be exactly as described.
                    🟢 Positive tests (happy path)
                    🟢 Positive tests with optional parameters
                    🟠 Negative tests with valid inputs
                    🔴 Negative tests with invalid inputs
                    💥 Destructive tests

Reinforcement:
1. Build scenarios where invalid values are tested for each variable, and at the end, one more scenario for all variables invalid;
    Example:
        Scenario 1: user = valid | password = valid
        Scenario 2: user = invalid | password = valid
        Scenario 3: user = valid | password = invalid
        Scenario 4: user = invalid | password = invalid
2. Consider correlations between variables;
3. The displayed table must not be misformatted;
4. Learn and reflect on the principles of the requested test techniques and strategies.