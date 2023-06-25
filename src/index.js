// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };
}

try {
  const dbToAccess = await central(id); // Get the database identifier from central

  // Fetch basic information and personal data concurrently
  const [basicInfo, personalData] = await Promise.all([
    dbs[dbToAccess](id),
    vault(id)
  ]);

  // Assemble the user object
  const user = {
    id: id,
    name: personalData.name,
    username: basicInfo.username,
    email: personalData.email,
    address: personalData.address,
    phone: personalData.phone,
    website: basicInfo.website,
    company: basicInfo.company
  };

  return user;
} catch (error) {
  throw error;
}

getUserData(1)
  .then(user => console.log(user))
  .catch(error => console.error(error));

getUserData(11)
  .then(user => console.log(user))
  .catch(error => console.error(error));

getUserData("abc")
  .then(user => console.log(user))
  .catch(error => console.error(error));

getUserData(true)
  .then(user => console.log(user))
  .catch(error => console.error(error));
