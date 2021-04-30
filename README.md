# ISTE-500-501-01 - Nobles of Sunlight

## Project: RACF Community Access Pass Program

---

## Members:
| Name             | Job Titles                                                       |
| ---------------- | ---------------------------------------------------------------- |
| Sergio Zygmunt   | Project Manager/Sponsor Liaison/Meeting Facilitator              |
| Vincent Venutolo | Meeting Facilitator/Project Manager/Database Manager/UI Designer |
| Rachael Simmonds | Sponsor Liaison/Note Taker/QA                                    |
| Nathan Kaufman   | UI Designer/QA                                                   |
| Jack Old         | System Administrator/Database Manager                            |
| Nick North       | Note Taker/System Administrator                                  |

---

### Required packages
#### Front End
- npm install
- npm install npx
- npm install react
- npm install react-dom
- npm install antd
- npm install ant-design-pro
- npm install react-router-dom
- npm install typescript
- npm install axios
- npm install js-cookie
- npm install dotenv
#### Back End
- npm install
- npm install node 
- npm install express
- npm install dotenv
- npm install mysql
- npm install jsonwebtoken
- npm install body-parser
- npm install cors

### Backend's Default localhost port is 5000
- To do a full re-installation: 
  1. Delete **node_modules** folder in the *src* folder.
  2. Delete **package-lock.json** on terminal in the *src* folder.
  3. Type **npm i** on terminal in the *src* folder to reinstall packages.
- To launch the webpage **node api.js** in the *src* folder. 

### Frontend's Default localhost port is 3000
- To compile: **npm run build** in the *arts* folder to compile.
- To launch the webpage **npm start**.

---
### MySQL Troubleshooting(s)
If you are receiving the mysql code 'ER_NOT_SUPPORTED_AUTH_MODE', then you need to follow this instruction to fix it:

Execute the following query in MYSQL Workbench

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'

Where root as your user localhost as your URL and password as your password

Then run this query to refresh privileges:

flush privileges;

Try connecting using node after you do so.

If that doesn't work, try it without @'localhost' part.

Add contents here.
