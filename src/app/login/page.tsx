"use client";
import FormBtn from "@/components/FromBtn";
import Input from "@/components/Input";
import { User } from "@/utils/type";
import Link from "next/link";
import { useState } from "react";



export default function LoginPage() {
  const [user, setUser] = useState<User>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="border-2 rounded-md p-6" onSubmit={handleSubmit}>
        <h1 className="font-bold text-2xl text-center">Login</h1>
        <Input
          type="email"
          field="email"
          placeholder="Email"
          input={user.email}
          setInput={setUser}
        />
        <Input
          type="password"
          field="password"
          placeholder="Password"
          input={user.password}
          setInput={setUser}
        />
        <FormBtn title="Submit" />
        <div className="text-center my-3">
          <Link href="/signup">Create an account</Link>
        </div>
      </form>
    </div>
  );
}
