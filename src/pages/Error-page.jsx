import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  console.error("Throwing error: ", error);

  return (
    <div className="flex flex-col gap-4 items-center justify-center w-full h-screen">
      <h1 className="text-4xl font-semibold">Oops!</h1>

      <p className="text-xl ">Sorry, an unexpected error has occurred.</p>

      <p className="italic">{error.statusText || error.message}</p>
    </div>
  );
}
