import { db } from "./server/db";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
await db.user.create({
  data: {
    emailAddress: 'testemail@gmail.com',
    firstName: 'John',
    lastName: 'Duck'
  }
})

console.log('done')