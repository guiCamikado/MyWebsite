// CREATE TABLE mywebsite.access_management (
// 	id INTEGER auto_increment NOT NULL,
// 	ip_address varchar(100) NOT NULL,
// 	access_times INTEGER NOT NULL,
// 	CONSTRAINT access_management_pk PRIMARY KEY (id),
// 	CONSTRAINT access_management_unique UNIQUE KEY (ip_address)
// )
// ENGINE=InnoDB
// DEFAULT CHARSET=utf8mb4
// COMMENT='Um banco de dados para guardar quantas pessoas acessaram o site de ips diferentes';


// CREATE TABLE mywebsite.users (
// 	id INTEGER auto_increment NOT NULL,
// 	first_name varchar(100) NOT NULL,
// 	last_name varchar(100) NOT NULL,
// 	email varchar(100) NOT NULL,
// 	password varchar(100) NOT NULL,
// 	CONSTRAINT users_pk PRIMARY KEY (id),
// 	CONSTRAINT users_unique UNIQUE KEY (email)
// )
// ENGINE=InnoDB
// DEFAULT CHARSET=utf8mb4;
