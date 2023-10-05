import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="py-4 px-6 flex justify-between items-center">
      <Link to={"/dashboard"} className="font-semibold text-xl cursor-pointer z-50">
        CHAT
      </Link>
    </nav>
  );
}

export default Header;
