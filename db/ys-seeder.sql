insert into users (fName, lName, birth_day, email, location) values ('Yael', 'Brown', '1987-01-16', 'yaelrbrown@gmail.com', 'Baltimore, MD');

insert into followers (FollowerID, FolloweeID, FollowerName, FolloweeName) values
  (5, 1, 'Dacey Wilcox', 'Yael Brown'),
  (5, 2, 'Dacey Wilcox', 'Hayden Blevins'),
  (1, 5, 'Yael Brown', 'Dacey Wilcox');
