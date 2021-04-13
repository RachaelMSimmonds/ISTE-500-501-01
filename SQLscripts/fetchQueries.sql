USE testdb;

SELECT * FROM passes;

#Returns all patrons
SELECT * FROM ((
patrons INNER JOIN users ON users.userId = patrons.userId)
INNER JOIN passes ON patrons.passId = passes.passId);

#Returns all partners
SELECT * FROM ((
partners INNER JOIN users ON users.userId = partners.userId)
INNER JOIN organizations ON partners.orgId = organizations.orgId);

#Returns all admins
SELECT * FROM users INNER JOIN admins ON admins.adminId = users.userId;