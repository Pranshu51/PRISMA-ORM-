import express from "express";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
const app = express();
app.use(express.json());
app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    });
});
app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const user = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,
            username: true,
            city: true
        }
    });
    res.json({
        user
    });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
async function getUser() {
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
    console.log(user);
}
getUser();
// async function createUser() {
//   await client.user.create({
//     data: {
//       username: 'alicce',
//       password: 'password123',
//       age: 30,
//       city: 'Wonderland'
//     }
//   });
// }
// createUser();
//# sourceMappingURL=index.js.map