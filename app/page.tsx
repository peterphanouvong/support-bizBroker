import { Button } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button asChild>
        <RegisterLink>Register</RegisterLink>
      </Button>
      <Button asChild>
        <LoginLink>Login</LoginLink>
      </Button>
    </div>
  );
}
