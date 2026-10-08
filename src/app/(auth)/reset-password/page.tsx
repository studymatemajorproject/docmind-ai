import AuthCard from "@/components/auth/auth-card";
import AuthLayout from "@/components/auth/auth-layout";
import ResetPasswordForm from "@/components/auth/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Reset Password"
      description="Create a new secure password for your account."
    >
      <AuthCard>
        <ResetPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}