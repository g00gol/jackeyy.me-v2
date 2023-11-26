import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";

import ErrorLayout from "./layout";

export default function Error() {
  return (
    <ErrorLayout>
      <h1 className="flex">404...awkward</h1>
      <p className="text-center md:text-2xl">
        page not found. maybe check somewhere else?
      </p>
      <Link
        to="/"
        className="flex items-center justify-center space-x-2 text-center underline md:text-2xl"
      >
        <IoArrowBackOutline />
        go back
      </Link>
    </ErrorLayout>
  );
}
