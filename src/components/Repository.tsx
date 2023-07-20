import Link from "next/link";
import { RepositoryProps } from "@/types/Repository";

export default function Repository({
  repository,
}: {
  repository: RepositoryProps;
}) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <Link href={repository.html_url}>
        <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-col md:max-w-auto dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-4 m-2">
          <div>
            <h1 className="text-gray-900 dark:text-white text-4xl pb-3 text-ellipsis overflow-hidden whitespace-nowrap max-w-[280px] lg:max-w-[350px]">
              {repository.name}
            </h1>
          </div>
          <div className="flex flex-row pb-2">
            <span className="bg-gray-200 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              {repository.language !== null
                ? repository.language
                : "Não identificado"}
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
              <svg
                aria-hidden="true"
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {formatDate(repository.updated_at)}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
