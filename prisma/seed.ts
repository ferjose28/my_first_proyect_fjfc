import { PrismaClient, Role } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
const hashedPassword = await bcrypt.hash('123456', 10);
  const user = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      name: 'Administrador',
      password: hashedPassword,
      telephone: '88888888',
      role: Role.ADMIN,

      profile: {
        create: {
          bio: 'Administrador del sistema',
          address: 'Managua, Nicaragua'
        }
      }
    },
    include: {
      profile: true
    }
  });

  console.log('Usuario creado:', user);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });