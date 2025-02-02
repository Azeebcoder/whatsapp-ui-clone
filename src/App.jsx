import React from "react";

import { FaMessage, FaUserGroup, FaMeta } from "react-icons/fa6";
import { MdOutlineHistoryToggleOff } from "react-icons/md";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { RiChatNewFill, RiEmojiStickerFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { FaSearch, FaChevronDown, FaPlus, FaMicrophone } from "react-icons/fa";
import { BsFillCameraVideoFill } from "react-icons/bs";

const App = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }} className="flex">
      {/* login and shortcut icons navbar sidebar */}

      <section className="flex flex-col justify-between h-full w-[4.5rem] p-3 bg-[#202C33] items-center border-r-[2px] border-[#374248]">
        {/* This is First Section To Whatsapp secttion */}
        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-1 text-[#AEBAC1] text-2xl">
            <li className="flex items-center justify-center cursor-pointer p-1 hover:bg-[#374248] rounded-full w-[50px]  h-[50px] duration-300 ease-in">
              <FaMessage />
            </li>
            <li className="flex items-center justify-center cursor-pointer p-1 hover:bg-[#374248] rounded-full w-[50px]  h-[50px]  duration-300 ease-in">
              <MdOutlineHistoryToggleOff />
            </li>
            <li className="flex items-center justify-center cursor-pointer p-1 hover:bg-[#374248] rounded-full w-[50px]  h-[50px]  duration-300 ease-in">
              <RiUserCommunityFill />
            </li>
            <li className="flex items-center justify-center cursor-pointer p-1 hover:bg-[#374248] rounded-full w-[50px]  h-[50px]  duration-300 ease-in">
              <FaUserGroup />
            </li>
            <li className="flex items-center justify-center cursor-pointer p-1 hover:bg-[#374248] rounded-full w-[50px]  h-[50px]  duration-300 ease-in">
              <FaMeta />
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-1 text-[#AEBAC1] text-2xl">
            <li className="flex items-center justify-center cursor-pointer p-1 hover:bg-[#374248] rounded-full w-[50px]  h-[50px] duration-300 ease-in">
              <IoIosSettings />
            </li>
            <li className="flex items-center justify-center cursor-pointer p-1 hover:bg-[#374248] rounded-full w-[50px]  h-[50px]  duration-300 ease-in">
              <img
                className="rounded-full"
                src="/naruto.jpg"
                alt=""
              />
            </li>
          </ul>
        </div>
      </section>

      {/* all chats bar show details of all chats   */}

      <section className="max-w-[27rem] bg-[#111B21] px-6 text-[#AEBAC1] border-r border-[#374248]">
        <ul className="h-full flex flex-col justify-between">
          <div className="flex justify-between items-center py-2 h-[10%]">
            <div className="text-2xl font-bold">Chats</div>
            <div>
              <ul className="flex text-2xl gap-3">
                <li className="flex items-center justify-center cursor-pointer p-0.5 hover:bg-[#374248] rounded-full w-[50px]  h-[50px]  duration-300 ease-in">
                  <RiChatNewFill />
                </li>
                <li className="flex items-center justify-center cursor-pointer p-0.5 hover:bg-[#374248] rounded-full w-[50px]  h-[50px]  duration-300 ease-in">
                  <CiMenuKebab />
                </li>
              </ul>
            </div>
          </div>
          <div className="h-[6%] flex items-center bg-[#202C33] px-4 rounded-xl">
            <button className="ml-2 flex items-center justify-center">
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="ml-5 h-full w-full outline-none"
            />
          </div>
          <div className="h-[8%] flex items-center">
            <ul className="flex gap-1 items-center justify-center">
              <li className="px-3 py-0.5 rounded-3xl bg-[#374248] hover:bg-[#0A332C] hover:text-[#03A86E] duration-300 cursor-pointer">
                All
              </li>
              <li className="px-3 py-1 rounded-3xl bg-[#374248] hover:bg-[#0A332C] hover:text-[#03A86E] duration-300 cursor-pointer">
                Unread
              </li>
              <li className="px-3 py-1 rounded-3xl bg-[#374248] hover:bg-[#0A332C] hover:text-[#03A86E] duration-300 cursor-pointer">
                Favoutites
              </li>
              <li className="px-3 py-1 rounded-3xl bg-[#374248] hover:bg-[#0A332C] hover:text-[#03A86E] duration-300 cursor-pointer">
                Groups
              </li>
            </ul>
          </div>
          <div className="h-[77%] overflow-y-auto my-3 custom-scrollbar">
            <div className="flex items-center gap-3 hover:bg-[#202C33] p-2 rounded duration-200 cursor-pointer group overflow-hidden ">
              <img
                className="w-[15%] rounded-full"
                src="/itachi.jpg"
                alt=""
              />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-white">Itachi Uchiha</h3>
                  <p className=" text-[#84949E] text-sm">7:54 pm</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#84949E] mb-3">Even My Silence Is loud!</p>
                  <div className="pr-1 duration-50 translate-x-11 group-hover:translate-x-0">
                    <FaChevronDown />
                  </div>
                </div>
                <hr className="text-[#84949e91]" />
              </div>
            </div>
            <div className="flex items-center gap-3 hover:bg-[#202C33] p-2 rounded duration-200 cursor-pointer group overflow-hidden">
              <img
                className="w-[15%] rounded-full"
                src="/obito.jpg "
                alt=""
              />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-white">Obito Uchiha</h3>
                  <p className=" text-[#84949E] text-sm">7:40 pm</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#84949E] mb-3">I didn't trip-reality lagged</p>
                  <div className="pr-1 duration-50 translate-x-11 group-hover:translate-x-0">
                    <FaChevronDown />
                  </div>
                </div>
                <hr className="text-[#84949e91]" />
              </div>
            </div>
            <div className="flex items-center gap-3 hover:bg-[#202C33] p-2 rounded duration-200 cursor-pointer group overflow-hidden">
              <img
                className="w-[15%] rounded-full"
                src="/sasuke.jpg "
                alt=""
              />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-white">Sasuke Uchiha</h3>
                  <p className=" text-[#84949E] text-sm">7:35 pm</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#84949E] mb-3">Smiles? Nah, they're overrated</p>
                  <div className="pr-1 duration-50 translate-x-11 group-hover:translate-x-0">
                    <FaChevronDown />
                  </div>
                </div>
                <hr className="text-[#84949e91]" />
              </div>
            </div>
            <div className="flex items-center gap-3 hover:bg-[#202C33] p-2 rounded duration-200 cursor-pointer group overflow-hidden">
              <img
                className="w-[15%] rounded-full"
                src="/kakashi.jpg "
                alt=""
              />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-white">Kakashi Hatake</h3>
                  <p className=" text-[#84949E] text-sm">7:29 pm</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#84949E] mb-3">Late? Nah, I run on style.</p>
                  <div className="pr-1 duration-50 translate-x-11 group-hover:translate-x-0">
                    <FaChevronDown />
                  </div>
                </div>
                <hr className="text-[#84949e91]" />
              </div>
            </div>
            <div className="flex items-center gap-3 hover:bg-[#202C33] p-2 rounded duration-200 cursor-pointer group overflow-hidden">
              <img
                className="w-[15%] rounded-full"
                src="/madara.jpg "
                alt=""
              />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-white">Madara Uchiha</h3>
                  <p className=" text-[#84949E] text-sm">7:03 pm</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#84949E] mb-3">Wake up to Reality!!</p>
                  <div className="pr-1 duration-50 translate-x-11 group-hover:translate-x-0">
                    <FaChevronDown />
                  </div>
                </div>
                <hr className="text-[#84949e91]" />
              </div>
            </div>
            <div className="flex items-center gap-3 hover:bg-[#202C33] p-2 rounded duration-200 cursor-pointer group overflow-hidden">
              <img
                className="w-[15%] rounded-full"
                src="/pain.jpg "
                alt=""
              />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-white">Pain</h3>
                  <p className=" text-[#84949E] text-sm">6:56 pm</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#84949E] mb-3">Know the pain</p>
                  <div className="pr-1 duration-50 translate-x-11 group-hover:translate-x-0">
                    <FaChevronDown />
                  </div>
                </div>
                <hr className="text-[#84949e91]" />
              </div>
            </div>
            <div className="flex items-center gap-3 hover:bg-[#202C33] p-2 rounded duration-200 cursor-pointer group overflow-hidden">
              <img
                className="w-[15%] rounded-full"
                src="/jiriya.jpg "
                alt=""
              />
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <h3 className="text-white">Jiraiya</h3>
                  <p className=" text-[#84949E] text-sm">5:43 pm</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-[#84949E] mb-3">Research isn't peeking, it's science!</p>
                  <div className="pr-1 duration-50 translate-x-11 group-hover:translate-x-0">
                    <FaChevronDown />
                  </div>
                </div>
                <hr className="text-[#84949e91]" />
              </div>
            </div>
          
          </div>
        </ul>
      </section>

      {/* this is the single chat section */}

      <section className="flex flex-col justify-between text-[#AEBAC1] w-full">
        <div className="bg-[#202C33] flex justify-between items-center px-5 w-full h-[10%]">
          <div className="flex items-center h-full gap-1">
            <img
              className="h-full p-3 cursor-pointer rounded-full"
              src="/sasuke.jpg"
              alt=""
            />
            <h2 className="text-xl text-white font-bold cursor-pointer">
              Sasuke Uchiha
            </h2>
          </div>
          <div className="flex gap-7 pr-5">
            <div className="flex items-center justify-center text-xl py-2 px-4 border rounded-3xl text-[#4B5C65] duration-200 cursor-pointer hover:text-white">
              <BsFillCameraVideoFill />
            </div>
            <div className="flex items-center justify-center text-xl duration-200 cursor-pointer hover:text-white">
              <FaSearch />
            </div>
            <div className="flex items-center justify-center text-xl duration-200 cursor-pointer hover:text-white">
              <CiMenuKebab />
            </div>
          </div>
        </div>

        <div className="relative bg-[#0B141A] min-h-[80%] flex flex-col justify-end bg-[url(/background.webp)] bg-center bg-no-repeat bg-cover">
          <div className="absolute inset-0 bg-black opacity-80"></div>

          <div className="relative z-10">
            <div className="p-4 px-10 pb-10">
            <div className="space-y-4">
              <div className="flex justify-end">
                <div className="bg-[#005C4B] text-[#D6E1E2] p-3 rounded-xl rounded-br-none">
                  You're Like my shadow,
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-[#202C33] text-[#E9EDEF] p-3 rounded-xl rounded-bl-none">
                  How?
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#005C4B] text-[#D6E1E2] p-3 rounded-xl rounded-br-none">
                  Always there, even when i don't want you.
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-[#202C33] text-[#E9EDEF] p-3 rounded-xl rounded-bl-none">
                  And you're like a jutsu I can't escape,
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#005C4B] text-[#D6E1E2] p-3 rounded-xl rounded-br-none">
                  How is that?
                </div>
              </div>

              <div className="flex justify-start">
                <div className="bg-[#202C33] text-[#E9EDEF] p-3 rounded-xl rounded-bl-none">
                  irritating but necessary.
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#005C4B] text-[#D6E1E2] p-3 rounded-xl rounded-br-none">
                😂😂🤣🤣🤣😂
                </div>
              </div>

            </div>
          </div>
          </div>
        </div>

        <div className="h-[10%] overflow-hidden bg-[#202C33] flex px-7 justify-between items-center">
          <div className="flex justify-center items-center cursor-pointer hover:text-white text-xl">
            <FaPlus />
          </div>
          <div className="min-w-[90%] px-6 py-3 rounded-xl flex items-center bg-[#2A3942]">
            <div className="flex justify-center items-center cursor-pointer hover:text-white text-xl">
              <RiEmojiStickerFill />
            </div>
            <input
              className="ml-7 w-full outline-none"
              type="text"
              placeholder="Type a message"
            />
          </div>
          <div className="flex justify-center items-center cursor-pointer hover:text-white text-xl">
            <FaMicrophone />
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
