USE test2;

CREATE TABLE employee
(
    id     BIGINT NOT NULL AUTO_INCREMENT,
    salary INT    NOT NULL,
    PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO employee (salary)
VALUES (100);

INSERT INTO employee (salary)
VALUES (200);

INSERT INTO employee (salary)
VALUES (300);

-- 1. limit
-- SELECT (SELECT DISTINCT salary
--         FROM employee
--         ORDER BY salary DESC
--            LIMIT 1,1 )  AS SecondHighestSalary;

-- 2. max function
# Write your MySQL query statement below
-- SELECT MAX(salary) AS SecondHighestSalary
-- FROM Employee
-- WHERE salary < (SELECT MAX(salary) FROM Employee);

-- 3. distinct function
# Write your MySQL query statement below
WITH T AS (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rk FROM Employee)
SELECT (SELECT DISTINCT salary FROM T WHERE rk = 2) AS SecondHighestSalary;
