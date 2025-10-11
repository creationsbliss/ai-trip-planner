"use client";

import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { api } from "../../convex/_generated/api";
import { UserDetailContext } from "./UserDetailContext";

type UserDetail = {
  _id?: string;
  name: string;
  email: string;
  imageUrl: string;
};

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const createNewUser = useMutation(api.user.createUser);
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<UserDetail | null>(null);

  useEffect(() => {
    const handleCreateNewUser = async () => {
      if (user) {
        const result = await createNewUser({
          name: user?.fullName ?? "",
          email: user?.primaryEmailAddress?.emailAddress ?? "",
          imageUrl: user?.imageUrl ?? "",
        });
        setUserDetail(result);
      }
    };

    user && handleCreateNewUser();
  }, [user, createNewUser]);

  return (
    <div>
      <UserDetailContext value={{ userDetail, setUserDetail }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </UserDetailContext>
    </div>
  );
};

export default Provider;
