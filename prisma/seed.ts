import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

  const user = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      name: 'Administrador',
      password: '123456',
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