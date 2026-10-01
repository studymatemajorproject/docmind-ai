import AuthCard from "@/components/auth/auth-card";
import AuthLayout from "@/components/auth/auth-layout";
import SignInForm from "@/components/auth/sign-in-form";

export default function SignInPage() {
  return (
    <AuthLayout
      title="Welcome Back"
      description="Sign in to continue to DocMind AI."
    >
      <AuthCard>
        <SignInForm />
      </AuthCard>
    </AuthLayout>
  );
}