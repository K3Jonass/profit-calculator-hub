import { Suspense } from "react";
import { redirect } from "next/navigation";
import AuthForm from "@/components/auth/AuthForm";
import { getCurrentUser } from "@/lib/auth/server";

function LoginContent() {
  return <AuthForm mode="login" />;
}

export default async function LoginPage() {
  const user = await getCurrentUser();

  if (user) {
    redirect("/workspace");
  }

  return (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}