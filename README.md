# Prisma Query Writing Part 02 Assignment

Welcome to the Prisma Query Writing Part 02 Assignment repository. This project features a Next.js application that demonstrates the implementation of CRUD (Create, Read, Update, Delete) operations for various Prisma models. The following Prisma models are covered in this project:

- User
- Cart
- Category
- Order
- Product
- ProductMeta
- ProductReview

## Key Features

1. **CRUD Operations**: This application provides an example of how to perform Create, Read, Update, and Delete operations on the specified Prisma models, showcasing the power and flexibility of Prisma's query capabilities.

2. **Transactions and Rollbacks**: To ensure data integrity and consistency, this project incorporates the use of transactions and rollbacks. This means that you can perform a series of database operations as a single transaction, and if any part of the transaction fails, the changes can be rolled back, leaving the database in a consistent state.

3. **Aggregate Functions**: The application also includes examples of how to use aggregate functions for data analysis. The following aggregate functions are used:

   - `_avg`: Calculates the average of a set of values.
   - `_count`: Counts the number of records that meet specific criteria.
   - `groupBy`: Groups records based on a specified column.
   - `_max`: Finds the maximum value in a set of data.
   - `_sum`: Calculates the sum of a set of values.

## Requirements

Make sure you have the following dependencies installed to run this project:

- [Next.js](https://nextjs.org/): A React framework for building web applications.
- [Prisma](https://www.prisma.io/): A modern database toolkit for working with databases.
- [MySQL](https://www.mysql.com/): A popular open-source relational database management system.
- Transactions and Rollbacks: Ensure that your database system supports transactions and rollbacks to fully leverage this project's capabilities.




