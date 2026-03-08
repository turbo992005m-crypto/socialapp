import React from "react";
import {
  Navbar as HEroUINavbar,
  NavbarBrand,
  NavbarContent,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@heroui/react";
import { Link } from "react-router-dom";
import { authcontext } from "../Context/Authcontext";
import { useContext } from "react";

export default function Navbar() {
  const { setusertoken, Userdata } = useContext(authcontext);

  function Logout() {
    localStorage.removeItem("token");
    setusertoken(null);
  }
  return (
    <HEroUINavbar>
      <NavbarBrand>
        <Link to={"/"}>
          <p className="font-bold text-inherit">SOCIAL MEDIA APP</p>
        </Link>
      </NavbarBrand>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src={Userdata?.photo}
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <Link className="h-14" to={"/profile"}>
                <p className="font-semibold">Signed in as {Userdata?.name}</p>
                <p className="font-semibold">{Userdata?.email}</p>
              </Link>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={Logout}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </HEroUINavbar>
  );
}
