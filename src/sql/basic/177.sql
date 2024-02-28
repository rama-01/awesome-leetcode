USE
test2;

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

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    SET
N = N - 1;
RETURN (
    # Write your MySQL query statement below.
      SELECT (
          SELECT DISTINCT salary
--           here appears wrong
          FROM employee
          ORDER BY salary DESC
          LIMIT 1 OFFSET N
      )
    );
END


