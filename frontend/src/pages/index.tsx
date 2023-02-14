import { useEffect, useState } from "react";

import PageLayout from "@/components/PageLayout";
import Router from "next/router";
import { isLoggedIn } from "@/services/auth.services";

export default function Home() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const userData = isLoggedIn();
    if (!userData) {
      Router.push("/login");
    }
    setUser(userData);
  }, []);

  return (
    <PageLayout user={user}>
      {!user ? (
        "Loading"
      ) : (
        <p style={{ textAlign: "center", marginTop: "30px", fontSize: "50px" }}>
          Hey, {user}!
        </p>
      )}
    </PageLayout>
  );
}
