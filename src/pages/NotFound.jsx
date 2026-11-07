import { Link } from "react-router";
import Footer from "../components/Footer.jsx";

const NotFound = ({ heading = "Page not found", message }) => (
  <div className="flex min-h-dvh flex-col">
    <main className="px-[5%] py-24 md:py-32 lg:py-40">
      <div className="page-container flex flex-col items-center text-center">
        <p className="mb-3 font-semibold text-accent md:mb-4">404</p>
        <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">{heading}</h1>
        <p className="mb-8 md:text-md">
          {message ?? "The page you're looking for doesn't exist or has moved."}
        </p>
        <Link to="/" className="font-semibold text-accent underline underline-offset-4">
          Back to home
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default NotFound;
