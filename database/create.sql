CREATE TABLE User (
  user_id INT PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  broker_id INT,
  email VARCHAR(255),
  mobile VARCHAR(20),
  username VARCHAR(255),
  password VARCHAR(255),
  FOREIGN KEY (broker_id) REFERENCES Broker(broker_id)
);

CREATE TABLE Broker (
  broker_id INT PRIMARY KEY,
  broker_name VARCHAR(255),
  location VARCHAR(255),
);

CREATE TABLE Account (
  account_id INT PRIMARY KEY,
  user_id INT,
  account_number VARCHAR(20),
  balance DECIMAL(10,2),
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Stock (
  stock_id INT PRIMARY KEY,
  symbol VARCHAR(10),
  name VARCHAR(255),
  current_price DECIMAL(10,2)
);

CREATE TABLE Portfolio (
  portfolio_id INT PRIMARY KEY,
  user_id INT,
  stock_id INT,
  quantity INT,
  purchase_price DECIMAL(10,2),
  purchase_date DATE,
  FOREIGN KEY (user_id) REFERENCES User(user_id),
  FOREIGN KEY (stock_id) REFERENCES Stock(stock_id)
);

CREATE TABLE Order (
  order_id INT PRIMARY KEY,
  user_id INT,
  stock_id INT,
  order_type VARCHAR(10),
  quantity INT,
  order_price DECIMAL(10,2),
  order_date TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(user_id),
  FOREIGN KEY (stock_id) REFERENCES Stock(stock_id)
);

CREATE TABLE Transaction (
  transaction_id INT PRIMARY KEY,
  user_id INT,
  transaction_type VARCHAR(20),
  amount DECIMAL(10,2),
  transaction_date TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Settings (
  user_id INT PRIMARY KEY,
  notification_preference VARCHAR(20),
  language_preference VARCHAR(20),
  timezone_preference VARCHAR(20),
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);
