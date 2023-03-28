import * as jose from "jose";
import type { APIContext } from "astro";

const secret = import.meta.env.SECRET;
const secretParents = import.meta.env.SECRET_PARENTS;
const secretStaff = import.meta.env.SECRET_STAFF;

export async function post({ request }: APIContext) {
  const body = await request.json();
  const key = new TextEncoder().encode(secret);

  if (body.user === "parent" && body.password === secretParents) {
    const payload = {
      user: "parent",
    };
    const token = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("5d")
      .sign(key);

    const body = JSON.stringify({ token: token });
    return new Response(body, {
      status: 200,
    });
  } else if (body.user === "staff" && body.password === secretStaff) {
    const payload = {
      user: "staff",
    };

    const token = await new jose.SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("5d")
      .sign(key);

    const body = JSON.stringify({ token: token });
    return new Response(body, {
      status: 200,
    });
  }

  return new Response(null, {
    status: 403,
  });
}
