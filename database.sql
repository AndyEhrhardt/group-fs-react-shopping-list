-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE groceries (
	id SERIAL PRIMARY KEY,
	item VARCHAR(255) NOT NULL,
    quantity VARCHAR(255) NOT NULL
	unit VARCHAR(50) NOT NULL
);

INSERT INTO groceries (item, quantity, unit)
VALUES ('banana', '3', '20'), 
('tomatoes', '1', '15'), 
('onions', '1', '10');
