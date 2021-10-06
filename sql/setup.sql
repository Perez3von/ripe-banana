DROP TABLE IF EXISTS studios CASCADE;
DROP TABLE IF EXISTS films CASCADE;
DROP TABLE IF EXISTS actors CASCADE;
DROP TABLE IF EXISTS reviewers CASCADE;
DROP TABLE IF EXISTS reviews CASCADE;


CREATE TABLE studios (

id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
name TEXT NOT NULL,
city TEXT NOT NULL,
state TEXT NULL,
country TEXT NOT NULL

);


CREATE TABLE films (

id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
title TEXT NOT NULL,
studio BIGINT REFERENCES studios(id) NOT NULL,
release BIGINT NOT NULL

);

CREATE TABLE actors (

id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
name TEXT NOT NULL,
dob DATE,
pob TEXT

);

CREATE TABLE reviewers (

id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
name TEXT NOT NULL,
company TEXT NOT NULL

);

CREATE TABLE reviews (

id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
rating BIGINT NOT NULL,
reviewer BIGINT NOT NULL,
review VARCHAR(140),
film BIGINT NOT NULL

);

