"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Pricing",
    path: "/pricing",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center justify-between p-4">
      {/* logo */}
      <div>
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={30} height={30} />
          <span className="text-2xl font-bold"> Ai Trip Planner </span>
        </Link>
      </div>

      {/* nav menu */}
      <div className="flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className="text-lg hover:scale-105 hover:text-primary transition-all"
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* button */}
      {!user ? (
        <SignInButton mode="modal">
          <Button>Get Started</Button>
        </SignInButton>
      ) : (
        <Link href="/create-trip">
          <Button>Create new trip</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
