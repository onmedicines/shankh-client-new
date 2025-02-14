import { Link } from "react-router";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-grow bg-gray-1 00">
      <h1 className="text-4xl font-bold text-red-500">404 - Page Not Found</h1>
      <p className="text-lg text-gray-700 mt-2">Oops! The page you are looking for does not exist.</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all">
        Go Back Home
      </Link>
    </div>
  );
};

export default Error;
