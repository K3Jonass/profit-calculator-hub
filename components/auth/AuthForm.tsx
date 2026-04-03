"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { getSupabaseBrowserClient } from "@/lib/supabase-browser";

type Mode = "login" | "signup";
type SocialProvider = "google" | "apple";

function getSafeNextPath(value: string | null) {
  if (!value || !value.startsWith("/")) {
    return "/workspace";
  }

  return value;
}

export default function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [oauthLoadingProvider, setOauthLoadingProvider] = useState<SocialProvider | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const nextPath = getSafeNextPath(searchParams.get("next"));
  const oauthError = searchParams.get("error");

  const initialError = useMemo(() => {
    if (!oauthError) {
      return "";
    }

    return decodeURIComponent(oauthError);
  }, [oauthError]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(`/api/auth/${mode}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = (await response.json()) as {
        error?: string;
        requiresEmailConfirmation?: boolean;
      };

      if (!response.ok) {
        throw new Error(data.error || "Authentication failed.");
      }

      if (mode === "signup" && data.requiresEmailConfirmation) {
        setMessage("Account created. Please confirm your email, then log in.");
        return;
      }

      router.replace(nextPath);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleOAuthSignIn(provider: SocialProvider) {
    setError("");
    setMessage("");
    setOauthLoadingProvider(provider);

    try {
      const supabase = getSupabaseBrowserClient();
      const redirectTo = `${window.location.origin}/auth/callback?next=${encodeURIComponent(nextPath)}`;

      const { error: oauthSignInError } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo,
        },
      });

      if (oauthSignInError) {
        throw oauthSignInError;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "OAuth sign-in failed.");
      setOauthLoadingProvider(null);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-semibold text-slate-900">
        {mode === "login" ? "Log in" : "Create your free account"}
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        {mode === "login"
          ? "Access your ProfitHub workspace and saved projects."
          : "Sign up to save clients, projects, and deliverables in your own workspace."}
      </p>

      {initialError ? (
        <p className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{initialError}</p>
      ) : null}

      <div className="mt-5 space-y-2">
        <button
          type="button"
          onClick={() => handleOAuthSignIn("google")}
          disabled={Boolean(oauthLoadingProvider) || isLoading}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {oauthLoadingProvider === "google" ? "Redirecting to Google..." : "Continue with Google"}
        </button>
        <button
          type="button"
          onClick={() => handleOAuthSignIn("apple")}
          disabled={Boolean(oauthLoadingProvider) || isLoading}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {oauthLoadingProvider === "apple" ? "Redirecting to Apple..." : "Continue with Apple"}
        </button>
      </div>

      <div className="my-5 flex items-center gap-3 text-xs uppercase tracking-wide text-slate-400">
        <span className="h-px flex-1 bg-slate-200" />
        <span>or</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
        />
        <input
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="At least 8 characters"
          className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
        />
        <button
          type="submit"
          disabled={isLoading || Boolean(oauthLoadingProvider)}
          className="w-full rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-slate-400"
        >
          {isLoading ? "Please wait..." : mode === "login" ? "Log in" : "Sign up"}
        </button>
      </form>

      {error ? <p className="mt-3 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
      {message ? <p className="mt-3 rounded-xl bg-emerald-50 px-3 py-2 text-sm text-emerald-700">{message}</p> : null}

      <p className="mt-4 text-sm text-slate-600">
        {mode === "login" ? "New to ProfitHub?" : "Already have an account?"}{" "}
        <Link
          href={mode === "login" ? `/signup?next=${encodeURIComponent(nextPath)}` : `/login?next=${encodeURIComponent(nextPath)}`}
          className="font-semibold text-blue-600"
        >
          {mode === "login" ? "Create account" : "Log in"}
        </Link>
      </p>
    </div>
  );
}