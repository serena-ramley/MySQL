# MySQL

Sample NodeJS + Express + REST API + MySQL integration

## Definitions

**Node.js** is a back-end JavaScript runtime environment that runs on the Chrome V8 engine and allows JavaScript code to run outside of a web browser.

**Express** is a routing and middleware web framework for NodeJS that manages data flow between the server and routes in server-side applications.

**REST** stands for Representational State Transfer. A **RESTful API** is an architectural style for an App.

**MySQL** is a Relational Database Management System (RDBMS) that uses Structured Query Language (SQL) to query the database.

**Database connection pooling** utilizes caching to keep database connections open so that the connections can be reused while an application is running.

## Instructions

In Amazon RDS, create a MySQL database and connect to it from MySQL Workbench: https://aws.amazon.com/getting-started/hands-on/create-mysql-db/

Create a secrets.js file following the example in sample-secrets.js and fill in the DB_PORT, DB_HOST, DB_USER AND DB_PASS according to the MySQL database that you created in Amazon RDS

In MySQL Workbench, create the database:

    CREATE DATABASE test;
    USE test;
    CREATE TABLE registration(
        id int primary key,
        first_name varchar(30),
        last_name varchar(30),
        email varchar(40),
        password varchar(32),
        number varchar(15)
        );
    SELECT * FROM registration;

In the terminal, run:

    node app.js

## Examples

In postman, try sending a GET request to the API, replacing APP_PORT with the one that you defined in secrets.js

<img src="https://github.com/serena-ramley/MySQL/blob/main/sampleGET.png" alt="Sample GET request in Postman" />
