import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./firebase"

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
        if (user) {
          setAuthUser(user)
        } else {
          setAuthUser(null)
        }
    });

    return () => {
      listen();
    }

  }, []);

  const userSignOut = () => {
    signOut(auth).then(() => {
      console.log("Signed Out Succesful")
    }).catch(error => console.log(error))
  }

  return (
    <div
      className="fixed flex flex-col justify-center items-center top-0 left-0 w-full h-full mx-auto text-[#060957]  text-3xl font-bold bg-[#060957] "
    >
      <div
        className="border bg-white  rounded-lg p-4 mb-5 md:mb-6"
      >
        {authUser ?
          <>
            <p
              className=""
            >
              {`Signed In as: ${authUser.email}`}
            </p>
            <button
              className="bg-red-700  font-bold p-1.5 rounded-md"
              onClick={userSignOut}
            >
              <p
               className=""
              >
                Sign Out
              </p>
            </button>
          </>
          :
          <p>
            Signed Out
          </p>
        }
      </div>
    </div>
  )
};
