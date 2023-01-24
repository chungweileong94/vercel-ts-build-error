import type {VercelRequest, VercelResponse} from '@vercel/node';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default async function (_req: VercelRequest, res: VercelResponse) {
  await prisma.user.create({data: {name: 'Test', email: 'test@mail.com'}});
  res.status(200).send('hello');
}
