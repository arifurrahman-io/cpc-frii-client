import { useEffect, useState } from "react";

const useVerified = (email) => {
  const [isVerified, setIsVerified] = useState(false);
  const [isVerifiedLoading, setIsVerifiedLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://server.arifur.xyz/users/verified/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsVerified(data.isVerified);
          setIsVerifiedLoading(false);
        });
    }
  }, [email]);
  return [isVerified, isVerifiedLoading];
};

export default useVerified;
