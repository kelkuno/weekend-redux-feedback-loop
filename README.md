# Project Name

Redux Feedback Loop

## Description

There were multiple problems we had to solve for this weekend challenge.
We had to create an application that gathered directed feedback from users over 4 views. 3 of the 4 bits of feedback were on a number scale and the 4th feedback was an optional comment. For these, I used number type inputs and a text input field. 

After the user goes through all 4 views and provides the feedback (we also needed to solve for input validation), the user sees a review screen that displays their feedback given over all 4 views. Up until this point, all of the feedback is stored in the redux store. 

On the review page, there is a submit button that when clicked, sends the user's feedback data to the server, which then sends the data on to the database. After this step, the user is met with a submission page that includes a button to leave more feedback and the process begins again. 

Built With:
react
redux

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
