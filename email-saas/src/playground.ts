import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: 'testemail@gmail.com',
    firstName: 'John',
    lastName: 'Duck'
  }
})

console.log('done')