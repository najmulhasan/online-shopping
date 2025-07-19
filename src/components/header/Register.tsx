"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Register: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert(`Username: ${username}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="input input-bordered w-full"
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">Register</button>
        <Link href="/login" className="text-blue-500 hover:underline mt-2 block text-center">
          Already have an account? Login here
        </Link>
      </form>
    </div>
  );
};

export default Register;
