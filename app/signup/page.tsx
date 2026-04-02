import { Suspense } from "react";
import AuthForm from "@/components/auth/AuthForm";

function SignupContent() {
  return <AuthForm mode="signup" />;
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
}