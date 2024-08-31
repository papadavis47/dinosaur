import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello Deno!');
});

Deno.serve({ port: 8787 }, app.fetch);
