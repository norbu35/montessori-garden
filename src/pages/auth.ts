import type { APIContext } from "astro";

const secret = import.meta.env.SECRET_JWT;

export async function post({ request }: APIContext) {
  const body = await request.json();
  const token = body.token;

  return new Response(null, {
    status: 200,
  });
}
