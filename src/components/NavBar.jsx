import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
        <div className="text-xl font-bold text-red-500">
          <Link to="/">MovieApp</Link>
        </div>
        <div className="flex gap-6">
          <Link
            to="/"
            className="hover:text-red-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/Favorites"
            className="hover:text-red-400 transition-colors duration-200"
          >
            Favorites
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
