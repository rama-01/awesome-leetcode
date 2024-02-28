-- 如果test数据库不存在，就创建test数据库：
CREATE
DATABASE IF NOT EXISTS test2;

-- 切换到test数据库
USE
test2;

-- 删除classes表和students表（如果存在）：
DROP TABLE IF EXISTS person;
DROP TABLE IF EXISTS address;

-- 创建classes表：
CREATE TABLE person
(
    personId  BIGINT      NOT NULL AUTO_INCREMENT,
    lastname  VARCHAR(20) NOT NULL,
    firstname VARCHAR(20) NOT NULL,
    PRIMARY KEY (personId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 创建students表：
CREATE TABLE address
(
    addressId BIGINT      NOT NULL AUTO_INCREMENT,
    personId  BIGINT      NOT NULL,
    city      VARCHAR(20) NOT NULL,
    state     VARCHAR(20) NOT NULL,
    PRIMARY KEY (addressId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO person(lastname, firstname)
VALUES ('Wang', 'Allen');
INSERT INTO person(lastname, firstname)
VALUES ('Alice', 'Bob');

-- 插入students记录：
INSERT INTO address (personId, city, state)
VALUES (2, 'New York City', 'New York');
INSERT INTO address (personId, city, state)
VALUES (3, 'Leetcode', 'California');

-- solution
-- SELECT p.firstname,p.lastname,a.city,a.state FROM person p LEFT JOIN address a ON p.personId = a.personId;

#
Write your MySQL query statement below
SELECT firstname, lastname, city, state
FROM Person
         LEFT JOIN Address USING (personId);
-- OK:
-- SELECT 'ok' as 'result:';
