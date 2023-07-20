"use client";

import API from "@/services/api";
import { useEffect, useState } from "react";
import { UserProps } from "@/types/User";
import User from "@/components/User";
import Toast from "@/components/Toast";
import SpinnerLoading from "@/components/SpinnerLoading";

export default function Home() {
  const [search, setSearch] = useState("");

  const [user, setUser] = useState<UserProps>();

  const [isLoading, setIsLoading] = useState(true);

  const [showToast, setShowToast] = useState(false);

  const fetchData = async (search: string) => {
    setIsLoading(true);

    const response = await API.get(`/${search}`)
      .catch(() => {
        setShowToast(true);
      })
      .finally(() => {
        setIsLoading(false);
      });

    const data = response?.data;

    if (response?.status === 200) {
      localStorage.setItem("user-github", JSON.stringify(data));

      setUser(data);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    fetchData(search);
  };

  useEffect(() => {
    const user = localStorage.getItem("user-github");

    if (user) {
      setIsLoading(false);
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <div className="p-10 bg-slate-200 dark:bg-slate-900 h-screen relative">
      <div>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >
            Digite o usuário que deseja encontrar...
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Digite o usuário que deseja encontrar..."
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Pesquisar
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center py-10">
        {isLoading || user === undefined ? (
          <SpinnerLoading height="h-32" width="w-32" message="Aguardando..." />
        ) : (
          <User user={user} />
        )}
      </div>
      {showToast && (
        <Toast
          onClose={() => setShowToast(false)}
          message="Usuário não encontrado!"
          type="error"
        />
      )}
    </div>
  );
}
