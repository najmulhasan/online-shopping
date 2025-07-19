"use client"
import Link from 'next/link';
import React, { useState } from 'react';

interface LoginProps {
  onLoginSuccess?: () => void;
  onClose?: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    alert(`Username: ${username}\nPassword: ${password}`);
    if (onLoginSuccess) onLoginSuccess();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
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
        <button type="submit" className="btn btn-primary w-full">Login</button>
        <button type="button" className="btn btn-link w-full mt-2" onClick={onClose}>Cancel</button>
        
        <Link href="/register" className="text-blue-500 hover:underline mt-2 block text-center">
          Don't have an account? Register here
        </Link>
      </form>
    </div>
  );
};

export default Login;
