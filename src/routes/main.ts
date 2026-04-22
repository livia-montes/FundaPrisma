import { Router } from 'express';

export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: "john Doe",
            email: "johndoe@example.com",
        }
    })
    res.json(user)
})