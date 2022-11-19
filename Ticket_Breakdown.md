# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

### Your Breakdown Here
 //Asumptions:
 //1- the custom id has  a format Custom${id}
 //2- Epic is a collection of tickets/task that collective create a feature. 
 //
###Ticket NO.1(Epic ID: 1- add-custom-agent-id-to-reports)
TASK: add a cloumn to agent's DB/table that will used to reeference an agent across other tables/queires. Name the column `CustomId`.

Currently agent table coulmns are: `id`,`name`, `dob`, `rate`(price per hr of work), `address`, `email`
After the work the  coulmns  for agent  table should be: `id`,`name`, `dob`, `rate`(price per hr of work), `address`, `email`,  `CustomId` 

Things to do: 
1-add a migration('add_customID_column_to_agents') to
2-write a query to fill the  `CustomId`  column for currently stored agents  with default value Custom${table_id} and run/execute the  query


Acceptance test:
1-run(terminal/GUI tool) a `select` query to show first 100 clumns.
2-validate that all previous/currentcolumns have  the  `CustomId` coulmn





