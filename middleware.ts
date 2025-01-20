import { NextApiRequest } from "next";
import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";

interface NextApiRequestWithAuth extends NextApiRequest {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  kindeAuth: any;
}

export default withAuth(async function middleware(req: NextApiRequestWithAuth) {
  console.log("look at me", req.kindeAuth);
});
