import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import useFetch from "../../hooks/useFetch";

import WIPLayout from "./layout";
import Loading from "../../components/Loading";

export default function WIP() {
  // Use fetch to get data from https://api.thecatapi.com/v1/images/search

  const { data, isLoading, error } = useFetch(
    "https://api.thecatapi.com/v1/images/search",
  );

  if (isLoading) return <Loading />;

  return (
    <WIPLayout>
      <img
        className="h-auto w-full md:w-1/4"
        src={data[0].url}
        alt="fun cat pic"
      />
      <h1 className="flex">
        oops!
        <span className="hidden md:block">&nbsp;watch out for potholes.</span>
      </h1>
      <p className="text-center md:text-2xl">
        looks like this page is still under construction. please check back!
      </p>
      <Link
        to="/"
        className="flex items-center justify-center space-x-2 text-center underline md:text-2xl"
      >
        <IoArrowBackOutline />
        go back
      </Link>
    </WIPLayout>
  );
}
