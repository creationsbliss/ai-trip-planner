import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-[calc(100vh-180px)] flex justify-center items-center">
      <SignUp />
    </div>
  );
}
