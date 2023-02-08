import { useEffect, useState } from "react";

import PageLayout from "@/components/PageLayout";
import Router from "next/router";
import { isLoggedIn } from "@/services/auth.services";

export default function Home() {
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const user = isLoggedIn();
    if (!user) {
      Router.push("/login");
    }
    setUser(user);
    setIsLoading(false);
  }, []);

  return (
    <PageLayout user={user}>
      {isLoading ? (
        "Loading"
      ) : (
        <p style={{ textAlign: "center", marginTop: "30px", fontSize: "50px" }}>
          Hey, {user}!
        </p>
      )}
    </PageLayout>
  );
}
