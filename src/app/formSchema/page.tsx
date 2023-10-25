"use client";
import { UserList } from "./components/UserList";
import { UserForm } from "./components/UserForm";
import { FormProvider } from "../providers/FormProvider";

export default function ReactHookFormExample() {
  
  
  return (
    <FormProvider>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div>
          <h1 className="glitch">Register Form</h1>
          <UserForm  />
        </div>
        <UserList />
      </div>
    </main>
    </FormProvider>
  );
}
