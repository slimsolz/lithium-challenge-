# **Lithium Full Stack Engineer Tech Test**

This is a tech test for the role of full stack engineer at Lithium. We are somewhat tech agnostic, so feel free to use the tools, frameworks and packages you like. Although we are quite flexible in our tech choices, the language **must** be TypeScript for both the front end and back end, and the front end must be either React or NextJS (or a similar React-based meta-framework). At the end of the test you will be asked to explain your choices.

## The Task

Lithium are expanding our system, and would like a portal for users to log in to. Before they log in though, they will need to be able to create an account. You will therefore need to create a back end to handle account creation and logging in, and the front end to enable them to create an account and log in. Once logged in, you just need to display "Hey `(user's full name)`!"

**Submission**

To start the test, please make an empty repo on your own personal GitHub with this readme file in the route directory and begin building the full stack app outlined above. Pushing at different intervals in the test will help us get an idea into your process, so please aim to do this. Don't feel pressure though - at Lithium we value speed, but understand this test will need to be undertaken in your own time and around other commitments, so rest assured the time, duration and frequency of these pushes **will not** be taken into consideration. That said, we will expect your submission to be completed no later than 5 days after receiving it.

**What we're looking for**

This role will involve a fair level of independence - the right candidate will be able to own a feature from start to finish. This is why the choices of tech are left fairly open - we want to see you use your intuition and how you approach a problem.

This is a full stack role, so please aim to make your submissions look _decent_. That being said, this is not a design job that you are applying for, so don't spend too long making it as beautiful as it can be - just try and use our current site's branding as a guideline and have your submission feel like it belongs.

## When you've finished coding

After you have completed the task, please send us a .zip file of the repo, but fill in the section below, keeping this file in the root directory:

**Your name**

`Solomon Odumah`

**Why did you choose the tech you did?**

**Backend**

Security can not be over emphasized when developing any application, Its very important to always secure your application, Considering this, I chose the following packages to help:

- Helmet: this helps in securing an Express app by setting various HTTP headers.
- Bcrypt: this helps with hashing users passwords before been saved to the database
- Joi: this is used to validate values the user gives us to make sure it is exactly what our database expects

Testing is also an important part of building an application, this helps in identifying possible bugs in our features/endpoints before our application goes into production. To achieve this, I used the following:

- Jest: this is an easy to setup/use testing framework
- Supertest: this is used with Jest for HTTP assertions.

Documenting your API, can be a primary resource for explaining what is possible with your API and how to get started/use the API. It also serves as a place for developers to return with questions about functionality. For this, I used:

- Swagger: Swagger works both for testing and documenting, unlike Jest and supertest which helps with automated testing, testing with swagger is manual, making it sometimes tiring.

Working with database:

- Sequelize: ORM offers high-level RDB abstraction allowing developers to write code in simple programming languages of their choice instead of using SQL to access, add, update, and delete data and schemas in the respective database.

**Frontend**

- axios: is a promise-based third-party HTTP client library for making network requests. I used this because its easier to use than traditional Fetch API
- antd: this has easy to use components and hooks making it easy to work with react.
