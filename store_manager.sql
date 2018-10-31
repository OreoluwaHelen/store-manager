


const table = {
createTable:
`CREATE TABLE IF NOT EXISTS users(
    user_id serial PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    date_of_employment TIMESTAMP NOT NULL,
    telephone VARCHAR (20) NOT NULL,
    username VARCHAR (50) UNIQUE NOT NULL, 
    user_password VARCHAR (50) NOT NULL,
    user_type INTEGER (10) NOT NULL,
);




CREATE TABLE IF NOT EXISTS products(
    product_id serial PRIMARY KEY,
    product_name VARCHAR (50) NOT NULL,
    product_description VARCHAR (200) NOT NULL,
    price INTEGER (50) NOT NULL CHECK ,
    product_quantity INTEGER (20) NOT NULL,
    available_quantity INTEGER (20) NOT NULL,
);


CREATE TABLE IF NOT EXISTS sales(
    sale_id serial PRIMARY KEY,
    products_name VARCHAR (500) NOT NULL,
    quantity INTEGER (100) NOT NULL,
    product_price INTEGER (100) NOT NULL,
    total_price INTEGER (200000) NOT NULL,
);`

}

export default table;



INSERT INTO users (first_name, last_name, date_of_employment,telephone, username, user_password, user_type)
VALUES
 ('oreoluwa', 'adenuga', '08-08-2015', '08137787878', 'oreoluwahelen', 'andela', 1);

 INSERT INTO products (product_name, product_description, price, product_quantity, available_quantity)
VALUES
 ('hypo','uyjtvrdrxetscdyvfubgihnojmpjnhubgfvyrdctxsrtcdyvfrtgbyihnunbvfcdxscdvfbg', '5000', '30', '25');

 INSERT INTO sales (products_name, quantity,product_price, total_price)
VALUES
 ('hypo',5, '3000', '15000');