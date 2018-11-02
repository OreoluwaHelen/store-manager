
const taable =`
CREATE TABLE users(
    user_id serial PRIMARY KEY,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    date_of_employment timestamp without time zone default (now() at time zone 'utc') ,
    telephone VARCHAR (20) NOT NULL,
    username VARCHAR (50) UNIQUE NOT NULL, 
    user_password TEXT  NOT NULL,
    user_type INTEGER NOT NULL
);




CREATE TABLE products(
    product_id serial PRIMARY KEY,
    product_name VARCHAR (50) NOT NULL,
    product_description VARCHAR (200) NOT NULL,
    price INTEGER NOT NULL ,
    product_quantity INTEGER  NOT NULL,
    available_quantity INTEGER  NOT NULL
);


CREATE TABLE  sales(
    sale_id serial PRIMARY KEY,
    products_name VARCHAR(50) NOT NULL,
    quantity INTEGER  NOT NULL,
    product_price INTEGER NOT NULL,
    total_price INTEGER  NOT NULL
);


INSERT INTO users (first_name, last_name, telephone, username, user_password, user_type)
VALUES
 ('oreoluwa', 'adenuga','08137787878', 'oreoluwahelen', '$2b$10$LVFwEk4DYfdHHdq3QWACMeWzVl.qZvKvKVaj8UcgOxuHmGbQUsADK', 1);

 INSERT INTO products (product_name, product_description, price, product_quantity, available_quantity)
VALUES
 ('hypo','uyjtvrdrxetscdyvfubgihnojmpjnhubgfvyrdctxsrtcdyvfrtgbyihnunbvfcdxscdvfbg', '5000', '30', '25');

 INSERT INTO sales (products_name, quantity,product_price, total_price)
VALUES
 ('hypo',5, '3000', '15000')`;
