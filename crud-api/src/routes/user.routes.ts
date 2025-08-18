import type { FastifyInstance } from "fastify";
import { UserUseCase } from "../usercases/user.usecase.js";
import type { UserCreate } from "../interfaces/user.interface.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

export async function userRoutes(fastify: FastifyInstance) {
  const userUseCase = new UserUseCase();
  fastify.addHook('preHandler', authMiddleware);

  fastify.post<{Body: UserCreate}>("/", async (req, reply) => {
    const { name, email } = req.body;
    try {
      const data = userUseCase.create({
        name,
        email,
      });
      return reply.send(data);
    } catch (error) {
      reply.send(error);
    }
  });
}
