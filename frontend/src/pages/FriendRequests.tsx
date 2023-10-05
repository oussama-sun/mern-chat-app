import React from "react";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

const FriendRequests = () => {
  const friendRequests = [
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
    {
      email: "test@test.com",
      avatar_url:
        "https://images.unsplash.com/photo-1608848461950-0fe51dfc41cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
      userName: "test",
    },
  ];
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <ul className="menu flex-nowrap no-scrollbar bg-base-200 w-2/3 h-auto max-h-[66%] overflow-y-scroll  rounded-box">
        <li className="menu-title">Your Friend Requests</li>

        {friendRequests.map((user) => {
          const { email, avatar_url, userName } = user;
          return (
            <li>
              <div className="flex items-center p-2 gap-4 btn-ghost rounded-lg">
                <img
                  src={avatar_url}
                  alt="avatar"
                  className="h-10 w-10 rounded-full"
                />
                <div className="grow">
                  <h3 className="font-semibold">{userName}</h3>
                  <code>{email}</code>
                </div>
                <div className="flex gap-4">
                  <i className="text-2xl active:scale-95 cursor-pointer hover:brightness-125 text-error">
                    <AiOutlineCloseCircle />
                  </i>
                  <i className="text-2xl active:scale-95 cursor-pointer hover:brightness-125 text-warning">
                    <AiOutlineCheckCircle />
                  </i>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FriendRequests;
