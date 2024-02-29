use
    test2;

create table scores
(
    id    int     not null auto_increment,
    score decimal not null,
    primary key (id)
) engine = InnoDB
  default charset = utf8;

insert into scores(score)
values (3.50);
insert into scores(score)
values (3.65);
insert into scores(score)
values (4.00);
insert into scores(score)
values (3.85);
insert into scores(score)
values (4.00);
insert into scores(score)
values (3.65);

# Write your MySQL query statement below
SELECT
    score,
    DENSE_RANK() OVER (ORDER BY score DESC) AS 'rank'
FROM scores;
SELECT score,
       CONVERT(rk, SIGNED) `Rank`
FROM (SELECT score,
             IF(@latest = score, @rank, @rank := @rank + 1) rk,
             @latest := score
      FROM scores,
           (SELECT @rank := 0,
                   @latest := NULL) tmp
      ORDER BY score DESC) s;

