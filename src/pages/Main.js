import React, { useEffect, useState } from "react";
import styles from "../css/Main.module.css";
import ProfileCard from "../components/ProfileCard";
import Loader from "../components/Loader";
import axios from "axios";

export default function Main() {
  const [loader, setLoader] = useState(true);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => {
          const persons = res.data;
          return persons;
        })
        .then((res) => {
          res.map(async (person) => {
            axios
              .get(
                `https://avatars.dicebear.com/v2/avataaars/{{${person.username}}}.svg?options[mood][]=happy`
              )
              .then((res) => {
                const avatar = res.data;
                setUsers((prevState) => {
                  return [...prevState, { ...person, avatar: avatar }];
                });
              });
          });
          setLoader(false);
        });
    };

    fetchUser();
  }, []);

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user.id !== userId));
  };

  const handleUpdate = (id, data) => {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, ...data };
        } else {
          return user;
        }
      });
    });
  };

  if (!loader) {
    return (
      <div>
        <ul className={styles.usersContainer}>
          {users.map((user) => (
            <li className={styles.userWrapper} key={user.id}>
              <ProfileCard
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
                user={user}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return <Loader />;
}
