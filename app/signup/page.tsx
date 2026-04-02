import AuthForm from "@/components/auth/AuthForm";

export default function SignupPage() {
  return (
    <main className="min-h-[70vh] bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <AuthForm mode="signup" />
    </main>
  );
}
