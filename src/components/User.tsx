import { UserProps } from "@/types/User";
import Link from "next/link";
import {
  FaBuilding,
  FaEnvelope,
  FaHouseUser,
  FaUsers,
  FaStar,
} from "react-icons/fa";

type Props = {
  user: UserProps | undefined;
};

export default function User({ user }: Props) {
  return (
    <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-auto dark:border-gray-700 bg-slate-100 dark:bg-gray-800 p-4">
      <div className="flex flex-col justify-center text-center">
        <img
          className="object-cover w-48 h-48 rounded-full md:h-48 md:w-48 md:rounded-full p-2"
          src={user?.avatar_url}
          alt="avatar"
        />
        <p className="dark:text-white">{user?.name}</p>
        <Link href={user ? user.html_url : ""}>
          <p className="dark:text-white opacity-80">{user?.login}</p>
        </Link>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal md:max-w-xl">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {!!user?.bio ? user?.bio : "Sem bio"}
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-3 py-5">
          <div className="flex flex-row items-center dark:text-white">
            <FaHouseUser className="text-xl" />
            <p className="text-md pl-2">
              {!!user?.location ? user?.location : "Sem localização"}
            </p>
          </div>
          <div className="flex flex-row items-center dark:text-white">
            <FaEnvelope className="text-xl" />
            <p className="text-md pl-2">
              {!!user?.email ? user?.email : "Usuário sem email"}
            </p>
          </div>
          <div className="flex flex-row items-center dark:text-white">
            <FaBuilding className="text-xl" />
            <p className="text-md pl-2">
              {!!user?.company ? user?.company : "Usuário sem empresa"}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-5">
          <div className="flex flex-row items-center sm:py-0 pr-3">
            <FaUsers className="text-xl text-gray-900 dark:text-white" />
            <p className="dark:text-white pl-2 pr-2">
              Seguindo: {user?.following}
            </p>
            <p className="dark:text-white"> Seguidores: {user?.followers} </p>
          </div>
          <Link href={`/repository?search=${user?.login}`} className="w-fit">
            <div className="flex flex-row items-center">
              <FaStar className="text-xl text-gray-900 dark:text-white" />
              <p className="dark:text-white pl-1">Acesse meus repositórios</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
