import AuthCard from "@/components/auth/auth-card";
import AuthLayout from "@/components/auth/auth-layout";
import ForgotPasswordForm from "@/components/auth/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Forgot Password?"
      description="Enter your email and we'll send you a password reset link."
    >
      <AuthCard>
        <ForgotPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}