import { sign } from "jsonwebtoken";
import type { APIContext } from "astro";

const secret = import.meta.env.SECRET_JWT;
const secretParents = import.meta.env.SECRET_PARENTS;
const secretStaff = import.meta.env.SECRET_STAFF;

export async function post({ request }: APIContext) {
  const body = await request.json();

  const options = {
    expiresIn: "1w",
  };

  if (body.user === "parent" && body.password === secretParents) {
    const payload = {
      user: "parent",
    };

    const token = sign(payload, secret, options);

    return {
      status: 200,
      body: JSON.stringify({ token: token }),
    };
  } else if (body.user === "staff" && body.password === secretStaff) {
    const payload = {
      user: "staff",
    };

    const token = sign(payload, secret, options);

    return {
      status: 200,
      body: JSON.stringify({ token: token }),
    };
  } else {
    return {
      status: 403,
    };
  }
}
