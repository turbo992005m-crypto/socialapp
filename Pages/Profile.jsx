import { useContext } from "react";
import { authcontext } from "../Context/Authcontext";
import { useState } from "react";
import Post from "../components/Post/Post";
import Loading from "../components/Loading";
import Feed from "./Feed";
import { ApiServices } from "../services/API";
import { useEffect } from "react";

export default function Profile() {
  const { Userdata } = useContext(authcontext);
  if (!Userdata) return <Loading />;
  const [follcount, setfollcount] = useState(Userdata.followersCount);

  async function getmyprofile() {
    const { data } = await ApiServices.getmyprofile();
    console.log(data);
  }
  useEffect(() => {
    getmyprofile();
  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="relative h-64">
        <img src={Userdata.photo} className="w-full h-full object-cover" />
        <div className="absolute -bottom-16 left-10">
          <img
            src={Userdata.photo}
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>
      </div>

      <div className="pt-20 px-10">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">{Userdata.name}</h1>
            <p className="text-gray-500">{Userdata.username}</p>
          </div>
          <button
            onClick={() => setfollcount((prev) => prev + 1)}
            className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700"
          >
            Follow
          </button>
        </div>

        <div className="flex gap-8 mt-6">
          <Stat label="Followers" value={follcount} />
          <Stat label="Following" value={Userdata.following.length} />
        </div>

        <div className=" max-w-xl mx-auto  py-10 grid  gap-6 ">
          <Feed />
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="font-bold text-lg">{value}</p>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
}
