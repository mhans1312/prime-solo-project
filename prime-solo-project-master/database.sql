CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE store (
id SERIAL PRIMARY KEY,
name VARCHAR(80)
);

CREATE TABLE orders (
id SERIAL PRIMARY KEY,
order_date DATE,
store_id INTEGER
);

CREATE TABLE inventory (
store_id INTEGER,
product_id INTEGER,
onhand INTEGER
);

CREATE TABLE line_item (
order_id INTEGER,
product_id INTEGER,
quantity INTEGER
);

CREATE TABLE products (
id SERIAL PRIMARY KEY,
description VARCHAR(100)
);

CREATE TABLE pars (
store_id INTEGER,
product_id INTEGER,
par_total INTEGER,
day VARCHAR(50)
);



