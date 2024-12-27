import { useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidEdit } from "react-icons/bi";

const profileData = [
  {
    name: "John Doe",
    image:
      "https://plus.unsplash.com/premium_photo-1723489324155-d0955ccf902d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, id!",
  },
  {
    name: "Jane Smith",
    image:
      "https://plus.unsplash.com/premium_photo-1723489324155-d0955ccf902d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, id!",
  },
  {
    name: "Michael Brown",
    image:
      "https://plus.unsplash.com/premium_photo-1723489324155-d0955ccf902d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, id!",
  },
  {
    name: "Emily Davis",
    image:
      "https://plus.unsplash.com/premium_photo-1723489324155-d0955ccf902d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, id!",
  },
  {
    name: "Wickson Kaimah",
    image:
      "https://plus.unsplash.com/premium_photo-1723489324155-d0955ccf902d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    message:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, id!",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtered profiles based on search query
  const filteredProfiles = profileData.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-[100%] h-[100vh] flex lg:justify-center bg-blue-500 lg:items-center">
      <div className="bg-white lg:w-[25%] lg:h-[65%] w-full h-full shadow-md flex flex-col rounded-md p-4 gap-3 relative">
        <div className="flex w-full items-center justify-between border border-t-white border-l-white border-r-white border-b-blue-500 py-3 h-auto">
          <p className="text-gray-500 text-xl">Messages</p>
          <IoIosSettings className="text-gray-500 text-3xl cursor-pointer" />
        </div>
        <div className="relative mb-2">
          <IoSearchSharp className="absolute left-3 bottom-3 text-xl text-blue-500" />
          <input
            type="search"
            name="search"
            id="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 rounded-lg pl-10 outline-none bg-zinc-100"
            placeholder="Search messages"
          />
        </div>
        <div className="w-full flex flex-col gap-4 overflow-y-auto">
          {filteredProfiles.length > 0 ? (
            filteredProfiles.map((profile, index) => (
              <div
                key={index}
                className="flex gap-4 w-full justify-center items-center px-3 cursor-pointer"
              >
                <div className="w-20">
                  <img
                    src={profile.image}
                    alt={`${profile.name}'s profile`}
                    className="w-full rounded-full"
                  />
                </div>
                <div>
                  <h6 className="font-medium text-[14px]">{profile.name}</h6>
                  <p className="text-[12px]">{profile.message}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No messages found</p>
          )}
        </div>
        <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full p-2 bg-blue-700 flex justify-center items-center">
          <BiSolidEdit className="text-white text-center text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default App;
