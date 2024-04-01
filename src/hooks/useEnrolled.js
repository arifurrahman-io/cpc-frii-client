import { useEffect, useState } from "react";

const useEnrolled = (email, courseId) => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isEnrolledLoading, setIsEnrolledLoading] = useState(true);
  useEffect(() => {
    if (email, courseId) {
      fetch(`https://server.arifur.xyz/enrollments/${email}/${courseId}`)
        .then((res) => res.json())
        .then((data) => {
          setIsEnrolled(data.isEnrolled);
          setIsEnrolledLoading(false);
        });
    }
  }, [email, courseId]);
  return [isEnrolled, isEnrolledLoading];
};

export default useEnrolled;