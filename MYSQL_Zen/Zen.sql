DROP DATABASE zen_class; 
CREATE DATABASE zen_class;
use zen_class;
-- users table
CREATE TABLE users (user_id INT(5),name VARCHAR(15),age INT(3));
INSERT INTO users (user_id,name,age) 
VALUES 
	(1,'Rohini',25),
    (2,'Vidhya',25),
    (3,'Moni',21),
    (4,'Sudarsan',16),
    (5,'Dinesh',17);
SELECT * FROM  users;

CREATE TABLE codekata (user_id INT(5),solved_problems INT(5),unsolved_problems INT(3));
INSERT INTO codekata (user_id,solved_problems,unsolved_problems) 
VALUES 
	(1,5,25),
    (2,10,25),
    (3,39,21),
    (4,87,16),
    (5,45,17);
SELECT * FROM  codekata;

CREATE TABLE attendance (user_id INT(5),days_present INT(5),days_absent INT(3));
INSERT INTO attendance (user_id,days_present,days_absent) 
VALUES 
	(1,5,5),
    (2,10,5),
    (3,9,1),
    (4,8,6),
    (5,5,7);
SELECT * FROM  attendance;


CREATE TABLE topics (user_id INT(5),topic_name VARCHAR(25));
INSERT INTO topics (user_id,topic_name) 
VALUES 
	(1,"Python"),
    (1,"Data structures"),
    (2,"Mongodb"),
    (2,"Python"),
    (3,"Data structures"),
	(4,"Python"),
    (2,"Data structures"),
	(5,"Python"),
    (4,"Data structures");
SELECT * FROM  topics;

CREATE TABLE tasks (user_id INT(5),tasks_completed INT(5),pending_tasks INT(3));
INSERT INTO tasks (user_id,tasks_completed,pending_tasks) 
VALUES 
	(1,20,5),
    (2,20,5),
    (3,15,10),
    (4,25,0),
    (5,21,4);
SELECT * FROM  tasks;

CREATE TABLE company_drives (user_id INT(5),drives_attended INT(5),status VARCHAR(10));
INSERT INTO company_drives (user_id,drives_attended,status) 
VALUES 
	(1,20,"placed"),
    (2,20,"placed"),
    (3,15,"placed"),
    (4,25,"not placed"),
    (5,21,"not placed");
SELECT * FROM  company_drives;

CREATE TABLE mentors (mentor_id INT(5),mentor_name VARCHAR(20),student_id INT(5));
INSERT INTO mentors (mentor_id,mentor_name,student_id) 
VALUES 
	(1,"mentor1",1),
    (1,"mentor1",2),
    (2,"mentor2",3),
    (2,"mentor2",4),
    (3,"mentor3",5);
SELECT * FROM  mentors;

CREATE TABLE courses (course_id INT(5),course_name VARCHAR(50),activated_students_count INT(5));
INSERT INTO courses (course_id,course_name,activated_students_count) 
VALUES 
	(1,"Python",1),
    (2,"Java",1),
    (3,"Full Stack development",3),
    (4,"Frontend development",1),
    (5,"Backend development",1);
SELECT * FROM  courses;

CREATE TABLE students_activated_courses (student_id INT(5),course_name VARCHAR(50),course_id INT(5));
INSERT INTO students_activated_courses (student_id,course_name,course_id) 
VALUES 
	(1,"Python",1),
    (2,"Java",2),
	(2,"Full Stack development",3),
    (3,"Full Stack development",3),
    (4,"Full Stack development",3),
    (4,"Frontend development",4),
    (5,"Backend development",5);
SELECT * FROM  students_activated_courses;

 -- Get number of problems solved in codekata by combining the users
 SELECT sum(solved_problems) Total_solved_problems FROM codekata;
 
-- Display the no. of company drives attended by a user
SELECT u.user_id,name,age,drives_attended FROM users u INNER JOIN company_drives d ON u.user_id = d.user_id;
 
 -- Combine and display students_activated_courses and courses for a specific user grouping them based on course
 SELECT d.course_name,count(name) StudentsCountFromCoursesTable FROM users u INNER JOIN students_activated_courses d ON u.user_id = d.student_id INNER JOIN courses c ON d.course_id = c.course_id  WHERE user_id=2 GROUP BY d.course_name;
 
 -- List all the mentors
 SELECT DISTINCT mentor_name FROM mentors;
 
 -- List the number of students that are assigned for a mentor
  SELECT mentor_id,mentor_name,count(student_id) assigned_students_count FROM mentors GROUP BY mentor_id;
  
