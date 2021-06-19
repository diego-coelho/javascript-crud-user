CREATE TABLE user_type (
    id VARCHAR NOT NULL,
    description VARCHAR(255) NOT NULL,
    active BOOLEAN NOT NULL,
    updatedAt timestamp NOT NULL,
    createdAt timestamp NOT NULL DEFAULT NOW()

);

CREATE TABLE "user" (
    id VARCHAR NOT NULL,
    nickname VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    user_type VARCHAR NOT NULL,
    active BOOLEAN NOT NULL,
    updatedAt timestamp NOT NULL,
    createdAt timestamp NOT NULL DEFAULT NOW()

);