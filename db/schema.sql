CREATE DATABASE travelexperience;

CREATE TABLE travel (
  id SERIAL PRIMARY KEY,
  title TEXT,
  image_url TEXT,
  location TEXT,
  description TEXT,
  user_id INTEGER
);

-- ALTER TABLE dishes ADD COLUMN user_id INTEGER; 

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT,
  password_digest TEXT
);


INSERT INTO travel (title, image_url, location, description) VALUES ('Bondai', 'https://the-riotact.com/wp-content/uploads/2019/01/IMG_1270-810x608.jpg', 'Sydney', 'nadicndsijcniuwndciuwncwnecunweiucn');
INSERT INTO travel (title, image_url, location, description) VALUES ('Manly', 'https://media.cnn.com/api/v1/images/stellar/prod/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg?q=w_1600,h_900,x_0,y_0,c_fill/w_1280', 'Sydney', 'nadicndsijcniuwndciuwncwnecunweiucn');

INSERT INTO travel (title, image_url, location, description) VALUES ('Palm Beach', 'https://the-riotact.com/wp-content/uploads/2020/11/corigans-point-jordo-810x810.jpg', 'Sydney', 'nadicndsijcniuwndciuwncwnecunweiucn');


-- INSERT INTO users (email) VALUES ('dt@ga.co');
-- INSERT INTO users (email) VALUES ('dt@generalassemb.ly');