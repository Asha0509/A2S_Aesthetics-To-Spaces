import React from 'react';
import { auth, googleAuthProvider } from '@/lib/firebase';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function LoginPage() {
  const signInWithGoogle = async () => {
    try {
      await auth.signInWithPopup(googleAuthProvider);
      window.location.assign('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
    >
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Login</h1>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email / Username</Label>
            <Input
              id="email"
              type="text"
              placeholder="you@example.com or your username"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="********" />
          </div>
          <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white">
            Login
          </Button>
        </form>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="px-2 bg-white text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <Button
          onClick={signInWithGoogle}
          className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white"
        >
          Continue with Google
        </Button>
        <div className="text-sm text-center">
          Don't have an account?{' '}
          <Link href="/signup" className="font-medium text-blue-600 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
