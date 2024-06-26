import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);
{/* <div id="error-page" className="text-center my-48 text-2xl font-bold">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div> */}
  return (
    <div class="flex justify-center items-center flex-col min-h-screen ">
      <h1 class="mb-4 text-6xl font-semibold text-red-500">{error.status}</h1>
      <p class="mb-4 text-4xl font-bold text-gray-600">{error.statusText}</p>
      <p class="mb-4 text-lg text-gray-600">{error.data}</p>
      <div class="animate-bounce">
        <svg
          class="mx-auto h-16 w-16 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p class="mt-4 text-gray-600">
        Let's get you back{" "}
        <a href="/" class="text-blue-500">
          home
        </a>
        .
      </p>
    </div>
  );
};

export default ErrorPage;
