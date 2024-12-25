import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';
import Button from '../common/Button';
import Input from '../common/Input';

interface SignUpFormProps {
  role: 'admin' | 'teacher' | 'parent';
  onSuccess: () => void;
  onBack: () => void;
}

export default function SignUpForm({ role, onSuccess, onBack }: SignUpFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const name = formData.get('name') as string;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Create user document
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        name,
        role,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      onSuccess();
    } catch (err) {
      setError('Failed to create account. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-center text-gray-900">
          Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}
        </h2>
      </div>

      <Input
        label="Full Name"
        name="name"
        type="text"
        required
        placeholder="Enter your full name"
      />

      <Input
        label="Email Address"
        name="email"
        type="email"
        required
        placeholder="Enter your email"
      />

      <Input
        label="Password"
        name="password"
        type="password"
        required
        placeholder="Create a password"
      />

      {error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}

      <div className="space-y-3">
        <Button
          type="submit"
          isLoading={isLoading}
          className="w-full"
        >
          Create Account
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={onBack}
          className="w-full"
        >
          Back
        </Button>
      </div>
    </form>
  );
}