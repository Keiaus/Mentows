-- Stores the user's date of birth information
CREATE TABLE DOB(
	UserDOBID SERIAL PRIMARY KEY,
	UserMonth VARCHAR(10),
	UserDay VARCHAR(10),
	UserYear VARCHAR(10)
);

-- Stores the user's account information
CREATE TABLE UserAccountInfo(
	UserID SERIAL PRIMARY KEY,
	UserDOBID INT,
	UserFirstName VARCHAR(50),
	UserLastName VARCHAR(50),
	UserPhoneNumber CHAR(12),
	UserEmailAddress CHAR(100),
	UserCompanyName CHAR(100),
	UserCompanyLocation CHAR(100),
	UserUserName VARCHAR(50),
	UserPassword VARCHAR(50),
	FOREIGN KEY (UserDOBID) REFERENCES DOB(UserDOBID)
);