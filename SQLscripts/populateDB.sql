USE testdb;

#User 1 Patron
INSERT INTO users (
	firstName,
    lastName,
    email,
    phone,
    address1,
    city,
    state,
    zipcode
)VALUES(
	'first',
    'user',
    'testUser@gmail.com',
    '585-341-3523',
    '111 User Ave',
    'Rochester',
    'NY',
    '14586'

);

#User 2 Patron
INSERT INTO users (
	firstName,
    lastName,
    email,
    phone,
    address1,
    city,
    state,
    zipcode
)VALUES(
	'second',
    'user2',
    'testUser2@gmail.com',
    '585-341-2222',
    '111 User Ave',
    'Rochester',
    'NY',
    '14586'

);

#User 3 No Role
INSERT INTO users (
	firstName,
    lastName,
    email,
    phone,
    address1,
    city,
    state,
    zipcode
)VALUES(
	'third',
    'user3',
    'testUser3@gmail.com',
    '525-341-1111',
    '111 User Ave',
    'Rochester',
    'NY',
    '14586'

);

#User 4 Partner
INSERT INTO users (
	firstName,
    lastName,
    email,
    phone,
    address1,
    city,
    state,
    zipcode
)VALUES(
	'org',
    'user1',
    'orguser1@gmail.com',
    '525-341-4444',
    '111 User Ave',
    'Rochester',
    'NY',
    '14586'

);

#User 5 Admin
INSERT INTO users (
	firstName,
    lastName,
    email,
    phone,
    address1,
    city,
    state,
    zipcode
)VALUES(
	'admin',
    'user1',
    'admin.user1@gmail.com',
    '525-341-5555',
    '111 User Ave',
    'Rochester',
    'NY',
    '14586'

);

#Generating Pass Types
INSERT INTO passtype(
	passTypeName,
    description
) VALUES (
	'General',
    'The general admission pass'
);

INSERT INTO passtype(
	passTypeName,
    description
) VALUES (
	'Elderly',
    'The admission pass for people 65 years and up.'
);

#Generate Passes
INSERT INTO passes(
	passTypeName
) VALUES (
	'General'
);

INSERT INTO passes(
	passTypeName
) VALUES (
	'General'
);

INSERT INTO passes(
	passTypeName
) VALUES (
	'Elderly'
);

#Populate Patrons
INSERT INTO patrons VALUES(
	'1',
    '3'
);

INSERT INTO patrons VALUES(
	'2',
    '2'
);

#Generate Organizations
INSERT INTO organizations(
	orgName,
    address1,
    city
) VALUES (
	'FakeOrg1',
    '123 Org Street',
    'Rochester'
);

INSERT INTO organizations(
	orgName,
    address1,
    city
) VALUES (
	'FakeOrg2',
    '123 Org Street',
    'Rochester'
);

#Populate partners
INSERT INTO partners VALUES ( '4', '2');

#Populate admins
INSERT INTO admins VALUES( '5');




