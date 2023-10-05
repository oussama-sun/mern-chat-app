import { BiLogOut, BiUser, BiUserPlus } from "react-icons/bi";
import { useGET } from "../hooks/useNetwork";
import { getRequest } from "../functions/network";
import { Link, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const { data } = useGET("/auth/profile");
  const { email, userName, avatar_url } = data as User;
  const navigate = useNavigate();

  function Loglout() {
    getRequest("/auth/logout")
      .then(() => navigate("/login"))
      .catch((err) => console.error(err));
  }
  return (
    <div
      className={`w-full py-4 px-10 space-y-4 h-[calc(100vh-60px)] flex flex-col justify-between `}
    >
      <h4 className="text-gray-500">Your Chats</h4>
      <div className="flex-1">
        <div>// chats that is user has</div>
      </div>
      {/* Add aa friend */}
      <Link to={"/addfriend"} className="flex flex-col gap-4">
        <h2>Overview</h2>
        <div className="flex items-center justify-center gap-4 btn-ghost p-4 rounded-lg pr-56 cursor-pointer">
          <i className="scale-150 text-success p-1 rounded-full">
            <BiUserPlus />
          </i>
          <p>Add friend</p>
        </div>
      </Link>
      {/* Friend requests */}
      <div className="flex flex-col gap-4">
        <h2>Friend requests</h2>
        <Link
          to={"/friendrequests"}
          className="flex relative items-center justify-center gap-4 btn-ghost p-4 rounded-lg pr-56 cursor-pointer"
        >
          <div className="badge badge-secondary badge-outline absolute top-0 right-0 ">
            +99
          </div>
          <i className="scale-150 text-success p-1 rounded-full">
            <BiUser />
          </i>
          <p>friend requests</p>
        </Link>
      </div>
      {/* User Card */}
      <div className="flex items-center p-2 gap-4 btn-ghost rounded-lg">
        <img src={avatar_url} alt="avatar" className="h-10 w-10 rounded-full" />
        <div className="grow">
          <h3 className="font-semibold">{userName}</h3>
          <code>{email}</code>
        </div>
        <i
          onClick={() => Loglout()}
          className="text-3xl text-warning cursor-pointer hover:brightness-125"
        >
          <BiLogOut />
        </i>
      </div>
    </div>
  );
};

export default Dashboard;
