import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchProfile = async () => {

      const token = localStorage.getItem("token");

      try {

        const res = await axios.get(
          "http://localhost:5000/api/user/profile",
          {
            headers: {
              Authorization: token
            }
          }
        );

        setUser(res.data);

      } catch (error) {

        console.log("Error fetching profile");

      }

    };

    fetchProfile();

  }, []);

  return (

    <div>

      <h2>User Profile</h2>

      {user ? (

        <div>

          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>

        </div>

      ) : (

        <p>Loading...</p>

      )}

    </div>

  );

};

export default Profile;