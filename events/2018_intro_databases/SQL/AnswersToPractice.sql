SELECT * FROM adventureworks.employee
WHERE contactid > 1200

SELECT * FROM adventureworks.employee
WHERE LastName = 'Smith'

SELECT * FROM adventureworks.employee
WHERE Title like 'Production%'

insert into adventureworks.currency
values ('COD', 'Code test', '1998-06-01 00:00:00')

update adventureworks.address
set city = 'Boulder'
where AddressLine1 = '1226 Shoe St'

delete from adventureworks.currency
where currencycode = 'COD'

CREATE TABLE adventureworks.Student
(
StudentID int not null, 
FirstName varchar(20), 
LastName varchar(20), 
Birthdate int, 
ActivityID int
)

CREATE TABLE adventureworks.Activity
(
ActivityID int not null, 
ActivityName varchar(20)
)

INSERT INTO adventureworks.Student
VALUES (12, 'Pippa', 'Grundy', 20010101, 1)
,(13, 'James', 'Grundy', 20130304, 2)


INSERT INTO adventureworks.Activity
VALUES (1, 'Tennis')
,(2, 'Basketball')

ALTER table adventureworks.Student
ADD PRIMARY KEY(StudentID)

alter table adventureworks.Activity
add primary key(ActivityID)


alter table adventureworks.Student
ADD FOREIGN KEY (ActivityId) REFERENCES adventureworks.Activity(ActivityId)