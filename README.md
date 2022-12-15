# Meal Planner - Final Capstone


My role: Originally Frontend Developer. 

I ended up wearing many hats throughout the project. Frontend UX and UI, Backend, and Database.


Overall - I learned that two and a half weeks is not enough time to create a quality full stack application from start to finish.



What I learned and would do differently?


Database:

  -No repeating fields in a table

  -Each set of related set of data in its own table

  -No data in a table that doesn't explicitly depend on the primary key

  -Tables with sets of data that apply to multiple tables get moved to their own table with a foriegn key.



Backend:

-Making sure that each controller only hands its specific tasks (example: Recipe controller handling recipes 
  and MealPlan controller handling mealplan requests) 
  
-Service layer also separated out by the types of logic it will be responsible for.

-Use DTOs to just transfer and manipulate data of entities.

-Uses models just to represent the entity and manipulate its state.



Frontend:

-Spend more time understanding how the app would be used, what goals it serves, and who the target audience would be.

-Plan out the navigation and make sure that everything easily accessable to and from each piece of information.

-Give more important items more weight visually - offer light/dark modes when appropriate.

-Test the design before adding any style and get user feedback before commiting time to the UI portion of the process.




---------------

For my part on the Backend:

I designed a few RESTful APIs. I assisted with the service layer logic, data binding, and debugging.
For the database I set many of the business rules to protect data integrity and validation.


For my part on the Frontend


I used Figma to create a few mockups beginning with the login, based off of the user stories and feature list.
The rest of the Frontend work was completed in JavaScript using the React library. I managed global state with
Redux and used hooks for small localized state for a few components where global state wasn't needed.


Starting with the log in screen:

![image](https://user-images.githubusercontent.com/18030411/207761431-cb622ce0-c539-41e5-8670-3375bf35a6e8.png)



Working out the flow of the program:
![image](https://user-images.githubusercontent.com/18030411/207762419-bef8deda-34d9-4cd6-a16d-5ac69ffd6a7c.png)




This was developed during the Full Stack Java Developer boot camp as the final Capstone project.  
The project details were simple - we were to choose 1 of 4 full web applications to build. We chose the Meal Planner.

----

Details
All projects have:
Required features (user stories)
Optional features (user stories)
Authentication (register new users and login existing users)
Full Stack: Front-end (React) and Back-end (Spring+PostgreSQL)

User Stories may have varying levels of detail. As a team, you have the flexibility to interpret the requirements as you envision your application. You also have the opportunity to reach out to your technical coaches for guidance (or to break a tie) in the event your team cannot decide on an interpretation.

-----


![mealdirections](https://user-images.githubusercontent.com/18030411/207759995-7df04b08-2787-4f09-9b09-3f9b1521b24e.JPG)

