import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-[calc(100vh-180px)] flex justify-center items-center">
      <SignIn />
    </div>
  );
}
