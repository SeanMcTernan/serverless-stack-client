# Severless Note Taking App - Frontend <a href="https://github.com/SeanMcTernan" target="_blank"><img src="https://raw.githubusercontent.com/SeanMcTernan/SeanMcTernan/7c1dcc08830e2087866a9d06c1f37d7b431edf82/ReadMe_Images/ReadMe_Badge_Small.svg" alt="Site badgeBy Sean Mc Ternan" width="120"/></a>

<img src="https://raw.githubusercontent.com/SeanMcTernan/SeanMcTernan/a32389ca51de4ae8ba1568e963911b310e381da0/ReadMe_Images/Serverless-Notes-App/Serverless-notes-app-logo-frontend.svg" align="right"
     alt="Serverless note App Frontend Image By Sean Mc Ternan " width="120" height="178">


The app is live! [Click here](https://bts-serverless-app.com/) to take a look.

The frontend of my Serverless note taking app. The App was created as part of the [Servless-Stack](https://serverless-stack.com/) course where I learned about AWS and the [Severless](https://www.serverless.com/). 

## Technologies Used
| Name                                                        | Purpose                                                                                                    |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| [Javascript](https://www.javascript.com/)         | Main programming language during development|
| [React](https://reactjs.org/)                      | To create responsive Frontend |
| [AWS-Amplify](https://www.npmjs.com/package/aws-amplify) | To make backend calls to AWS from the frontend |
| [React-Bootstrap](https://react-bootstrap.github.io/) | To create nice responsive CSS for the Frontend |
| [React-Router-Dom](https://www.npmjs.com/package/react-router-dom) | To assist with link navigation on the Frontend |
| [React-Dom](https://www.npmjs.com/package/react-dom) | To render the App to the DOM |
| [Netlify](https://www.netlify.com/) | To host the frontend of the app |

### The App

<p align="center">
  <img src="https://github.com/SeanMcTernan/SeanMcTernan/blob/master/ReadMe_Images/Serverless-Notes-App/Serverless-notes-app-sample_1.png?raw=true" alt="Notes App Screenshot 1 " width="738">
</p>

The front end of the app was basic by design. The focus of this project was to seamlessly link the front and back end of a web application. Above, you can see a login and sign up option for the landing page. Using AWS amplify, users can create an account or sign into an existing account. 

<p align="center">
  <img src="https://github.com/SeanMcTernan/SeanMcTernan/blob/master/ReadMe_Images/Serverless-Notes-App/Serverless-notes-app-sample_2.png?raw=true" alt="Notes App Screenshot 2" width="738">
</p>

Once logged-in users can see their existing notes and click to edit them. Alternatively, they can choose to create a new note, or edits their settings. The settings section was created using the [Stripe](https://www.stripe.com) sandbox. No charges can be processed if any details are entered. It was created as a means of understanding 3rd party payment applications.

<p align="center">
  <img src="https://github.com/SeanMcTernan/SeanMcTernan/blob/master/ReadMe_Images/Serverless-Notes-App/Serverless-notes-app-sample_4.png?raw=true" alt="Notes App Screenshot 3" width="738">
</p>

When a user clicks into a note, they can edit the existing content of a note, including it's attachments, or choose to delete the note entirely from the system. 

<p align="center">
  <img src="https://github.com/SeanMcTernan/SeanMcTernan/blob/master/ReadMe_Images/Serverless-Notes-App/Serverless-notes-app-sample_3.png?raw=true" alt="Notes App Screenshot 3" width="738">
</p>

### Motivation & what was learned

Serverless applications are the most common use case for modern applications, so I wanted to get up to speed on what was being used and how to apply it to a real-world scenario. Needless to say, a note taking app is about as original as printing `hello world!`, but in this instance a familiar application made it easier to digest the new methods that were being applied. AWS Cognito, S3, Lambda, DynamoDB were all used, so it was a deep dive into new concepts. Likewise, it was very interesting to see committed changes being sent automatically to Netlify, a concept I was familiar with, but had yet to see it in practice. 

### Install Instructions

1. Clone/Download the Repository 
2. From the folder run `npm install`
3. Run `npm start`

### Development Time: 1.5 Months - Front & Backend
