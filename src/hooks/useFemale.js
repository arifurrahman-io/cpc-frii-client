import { useEffect, useState } from "react";

const useFemale = (email) => {
  const [isFemale, setIsFemale] = useState(false);
  const [isFemaleLoading, setIsFemaleLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/female/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsFemale(data.isFemale);
          setIsFemaleLoading(false);
        });
    }
  }, [email]);
  return [isFemale, isFemaleLoading];
};

export default useFemale;
