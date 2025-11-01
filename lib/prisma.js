// Временная заглушка для Prisma - удали когда починишь Prisma
const prisma = {
  views: {
    findUnique: async () => ({ count: 100 }),
    upsert: async () => ({ count: 100 })
  },
  guestbook: {
    findMany: async () => [],
    create: async () => ({ id: 1 })
  }
}

export default prisma