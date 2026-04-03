import { Suspense } from "react";
import { redirect } from "next/navigation";
import AuthForm from "@/components/auth/AuthForm";
import { getCurrentUser } from "@/lib/auth/server";

function SignupContent() {
  return <AuthForm mode="signup" />;
}

export default async function SignupPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/workspace");
  }

  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <SignupContent />
    </Suspense>
  );
}