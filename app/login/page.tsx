import { Suspense } from "react";
import AuthForm from "@/components/auth/AuthForm";

function LoginContent() {
  return <AuthForm mode="login" />;
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}