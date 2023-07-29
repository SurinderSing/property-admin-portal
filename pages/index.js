import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Loader from "../layout/Loader";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/dashboard');
  }, [])

  return (
    <>
      <Loader />
    </>
  )
};

export default Index;
