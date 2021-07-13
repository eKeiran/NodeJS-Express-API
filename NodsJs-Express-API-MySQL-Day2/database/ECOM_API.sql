CREATE DATABASE ECOM_API;
USE  ECOM_API;
CREATE TABLE tb_users(id int(100), fullName varchar(50) primary key, age int(3), phoneNo int(255));
CREATE TABLE tb_products(prod_name varchar(50), brand varchar(50), price int(10));

INSERT INTO  tb_users VALUES(1,'Harry Potter', 12, 1790873981);
INSERT INTO  tb_users VALUES(2,'Percy Jackson', 17, 2983678191);
INSERT INTO  tb_users VALUES(3,'Katniss Everdeen', 18, 9283789123);

INSERT INTO  tb_products VALUES('1','LED TV', 'Sony', 50000);
INSERT INTO  tb_products VALUES('2','Mountain Bike', 'Keysto', 12000);
INSERT INTO  tb_products VALUES('3','Air Conditioner', 'Panasonic', 30000);

SELECT * FROM tb_users;
SELECT * FROM tb_products;
