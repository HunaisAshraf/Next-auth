"use client";

import FormBtn from "@/components/FromBtn";
import Input from "@/components/Input";
import Link from "next/link";
import { useState } from "react";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <form className="border-2 rounded-md p-6" onSubmit={handleSubmit}>
        <h1 className="font-bold text-2xl text-center">SignUp</h1>
        <Input type="text" placeholder="Name" setInput={setName} input={name} />
        <Input
          type="email"
          placeholder="Email"
          input={email}
          setInput={setEmail}
        />
        <Input
          type="number"
          placeholder="Phone"
          input={phone}
          setInput={setPhone}
        />
        <Input
          type="password"
          placeholder="Password"
          input={password}
          setInput={setPassword}
        />
        <FormBtn title="Submit" />
        <div className="text-center my-3">
          <Link href="/login">Alredy have an account</Link>
        </div>
      </form>
    </div>
  );
}
