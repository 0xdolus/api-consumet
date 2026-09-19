import { FastifyInstance } from 'fastify';

import animekai from './animekai';
import animepahe from './animepahe';

export default async function routes(fastify: FastifyInstance) {
  await fastify.register(animekai, { prefix: '/animekai' });
  await fastify.register(animepahe, { prefix: '/animepahe' });
}
