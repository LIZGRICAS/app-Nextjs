
import FormContext from "@/app/providers/FormContext";
import { User } from "@/app/types/User";
import { BaseSyntheticEvent, useContext, useEffect, useRef } from "react";
import {useForm } from "react-hook-form";
import uuid from "react-uuid";

export const UserForm = () => {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();


  const {setUserform, userform} = useContext(FormContext)

  const onSubmit = (
    data: User,
    event?: BaseSyntheticEvent<object, HTMLElement, HTMLElement>
  ) => {
    if (event) event.preventDefault();
    data.id = uuid()
    console.log(data.id);
    setUserform([...userform, data]);
  };

 
  //uuid en ref para que no cambie el valor del id
  return (
    <div>
        <form
            className="w-full max-w-lg p-14"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Full Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane Willis"
                  {...register("name", {
                    required: true,
                    onBlur: (e) => trigger("name"),
                  })}
                />
                {errors.name && (
                  <p className="text-gray-600 text-xs italic border-red">
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  User name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border -500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Jane015"
                  {...register("user", {
                    required: true,
                    onBlur: (e) => trigger("user"),
                  })}
                />
                {errors.user && (
                  <p className="text-gray-600 text-xs italic border-red">
                    Please fill out this field.
                  </p>
                )}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  email
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="email"
                  placeholder="correo@gmail.com"
                  {...register("email", {
                    required: true,
                    onBlur: (e) => trigger("email"),
                    validate: {
                      maxLength: (v) =>
                        v.length <= 50 ||
                        "The email should have at most 50 characters",
                      matchPattern: (v) =>
                        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                        "Email address must be a valid address",
                    },
                  })}
                />
                {errors.email?.message && (
                  <p className="text-gray-600 text-xs italic ">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="password"
                  placeholder="******************"
                  {...register("password", {
                    required: true,
                    onBlur: (e) => trigger("password"),
                    validate: {
                      minLength: (v) => v.length >= 6,
                      matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v),
                    },
                  })}
                />
                {errors.password?.type === "minLength" && (
                  <p className="text-gray-600 text-xs italic">
                    The password should have at least 6 characters
                  </p>
                )}
                {errors.password?.type === "matchPattern" && (
                  <p className="text-gray-600 text-xs italic">
                    The password must contain only letters, numbers and _
                  </p>
                )}
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3" />
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3" />
              <div className="md:w-2/3">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
    </div>
  )
}
