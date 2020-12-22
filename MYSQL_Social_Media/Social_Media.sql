#DROP database social_media; 
create database social_media;   
use social_media;
CREATE TABLE user_profiles (user_id INT(5),name VARCHAR(15),age INT(3));
INSERT INTO user_profiles (user_id,name,age) VALUES (1,'Rohini',25);
INSERT INTO user_profiles (user_id,name,age) VALUES (2,'Vidhya',25);
INSERT INTO user_profiles (user_id,name,age) VALUES (3,'Moni',21);
INSERT INTO user_profiles (user_id,name,age) VALUES (4,'Sudarsan',16);
INSERT INTO user_profiles (user_id,name,age) VALUES (5,'Dinesh',17);

SELECT * FROM user_profiles;

CREATE TABLE profile_status (user_id INT(5),status VARCHAR(10));
INSERT INTO profile_status (user_id,status) VALUES (1,'ACTIVE');
INSERT INTO profile_status (user_id,status) VALUES (2,'INACTIVE');
INSERT INTO profile_status (user_id,status) VALUES (3,'ACTIVE');
INSERT INTO profile_status (user_id,status) VALUES (4,'INACTIVE');
INSERT INTO profile_status (user_id,status) VALUES (5,'ACTIVE');

SELECT * FROM profile_status;


CREATE TABLE friends (user_id INT(5),friends_count INT(10));
INSERT INTO friends (user_id,friends_count) VALUES (1,20);
INSERT INTO friends (user_id,friends_count) VALUES (2,20);
INSERT INTO friends (user_id,friends_count) VALUES (3,30);
INSERT INTO friends (user_id,friends_count) VALUES (4,30);
INSERT INTO friends (user_id,friends_count) VALUES (5,40);

SELECT * FROM friends;

CREATE TABLE comments (user_id INT(5),comment VARCHAR(50),friend_id INT(5));
INSERT INTO comments (user_id,comment,friend_id) VALUES (1,"Hello",2);
INSERT INTO comments (user_id,comment,friend_id) VALUES (2,"Hey",1);
INSERT INTO comments (user_id,comment,friend_id) VALUES (3,"Sooperr!!",2);
INSERT INTO comments (user_id,comment,friend_id) VALUES (4,"Wowww",1);
INSERT INTO comments (user_id,comment,friend_id) VALUES (5,"Nice!!",3);
INSERT INTO comments (user_id,comment,friend_id) VALUES (3,"Sooperr!!",5);
INSERT INTO comments (user_id,comment,friend_id) VALUES (3,"Wowww",1);
INSERT INTO comments (user_id,comment,friend_id) VALUES (3,"Nice!!",2);
INSERT INTO comments (user_id,comment,friend_id) VALUES (3,"Sooperr!!",1);
INSERT INTO comments (user_id,comment,friend_id) VALUES (3,"Wowww",4);
INSERT INTO comments (user_id,comment,friend_id) VALUES (3,"Nice!!",5);
INSERT INTO comments (user_id,comment,friend_id) VALUES (3,"Sooperr!!",2);
INSERT INTO comments (user_id,comment,friend_id) VALUES (4,"Wowww",1);
INSERT INTO comments (user_id,comment,friend_id) VALUES (5,"Nice!!",1);

SELECT * FROM comments;

CREATE TABLE likes (user_id INT(5),likes_count INT(10));
INSERT INTO likes (user_id,likes_count) VALUES (1,46);
INSERT INTO likes (user_id,likes_count) VALUES (2,45);
INSERT INTO likes (user_id,likes_count) VALUES (3,87);
INSERT INTO likes (user_id,likes_count) VALUES (4,34);
INSERT INTO likes (user_id,likes_count) VALUES (5,89);

SELECT * FROM likes;


CREATE TABLE posts (user_id INT(5),posts_count INT(10));
INSERT INTO posts (user_id,posts_count) VALUES (1,461);
INSERT INTO posts (user_id,posts_count) VALUES (2,451);
INSERT INTO posts (user_id,posts_count) VALUES (3,871);
INSERT INTO posts (user_id,posts_count) VALUES (4,341);
INSERT INTO posts (user_id,posts_count) VALUES (5,891);

SELECT * FROM posts;

CREATE TABLE user_login_details (user_id INT(5),email VARCHAR(25),pwd VARCHAR(8));
INSERT INTO user_login_details (user_id,email,pwd) VALUES (1,'Rohini@gmail.com','Vidhya23');
INSERT INTO user_login_details (user_id,email,pwd) VALUES (2,'Vidhya@gmail.com','Vidhya23');
INSERT INTO user_login_details (user_id,email,pwd) VALUES (3,'Moni@abc.com','Vidhya23');
INSERT INTO user_login_details (user_id,email,pwd) VALUES (4,'Sudarsan@abc.com','Vidhya23');
INSERT INTO user_login_details (user_id,email,pwd) VALUES (5,'Dinesh@abc.com','Vidhya23');

SELECT * FROM user_login_details;

# In friends table list the data which are matched with the user profile id
SELECT user_profiles.user_id,name,age,friends_count  FROM friends INNER JOIN user_profiles ON friends.user_id = user_profiles.user_id;

# Display all the posts of user id 5
SELECT * from posts where user_id = 5;

#Write a query that matching the words or character with %gmail%
SELECT * FROM user_login_details WHERE email LIKE '%gmail%';

# Limit the display data from the table comments  for 5 which belongs to the user 3
SELECT * FROM comments WHERE user_id=3 limit 5;

# Combine profile_status and user_profile and user_login_details display matching records
SELECT profile_status.user_id,age,status,email,pwd FROM profile_status 
INNER JOIN user_profiles ON profile_status.user_id = user_profiles.user_id 
INNER JOIN user_login_details ON user_profiles.user_id = user_login_details.user_id;






