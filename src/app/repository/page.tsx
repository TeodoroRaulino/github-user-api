"use client";

import Repository from "@/components/Repository";
import SpinnerLoading from "@/components/SpinnerLoading";
import API from "@/services/api";
import { RepositoryProps } from "@/types/Repository";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function repos() {
  const [repository, setRepository] = useState<RepositoryProps[]>([]);

  const [loading, setLoading] = useState(false);

  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await API.get(
        `/${search}/repos?sort=updated&direction=desc`
      ).finally(() => {
        setLoading(false);
      });
      const data = response.data;

      if (response.status === 200) {
        setRepository(data);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-slate-200 dark:bg-slate-900 min-h-screen">
      <div className="px-10 pt-10">
        <h1 className="text-4xl text-gray-900 dark:text-white font-bold">
          Seus repositórios
        </h1>
      </div>
      <div className="flex justify-center items-start p-0 sm:p-10">
        {loading ? (
          <SpinnerLoading height="h-32" width="w-32" message="carregando" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
            {repository.map((repository) => (
              <Repository key={repository.id} repository={repository} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
