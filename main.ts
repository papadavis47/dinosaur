import { Context, Hono } from 'hono';

const app = new Hono();

app.get('/', (c: Context) => {
  return c.text('Hello Deno from John Davis!');
});

Deno.serve({ port: 8787 }, app.fetch);
