CREATE TABLE users(
    user_id serial PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    date_of_employment TIMESTAMP NOT NULL,
    telephone INTEGER (20) NOT NULL,
    username VARCHAR (50) UNIQUE NOT NULL, 
    user_password VARCHAR (50) NOT NULL,
    user_type INTEGER (10) NOT NULL,
);


CREATE TABLE products(
    product_id serial PRIMARY KEY,
    product_name VARCHAR (50) NOT NULL,
    product_description VARCHAR (200) NOT NULL,
    price INTEGER (50) NOT NULL CHECK ,
    product_quantity INTEGER (20) NOT NULL,
    available_quantity INTEGER (20) NOT NULL,
);


CREATE TABLE sales(
    sale_id serial PRIMARY KEY,
    products_name VARCHAR (500) NOT NULL,
    product_quantity INTEGER (100) NOT NULL,
    product_price INTEGER (100) NOT NULL,
    total_pricce INTEGER (200000) NOT NULL,
);

