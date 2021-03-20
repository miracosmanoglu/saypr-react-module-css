import React, { useState } from "react";
import styles from "../css/ProfileCard.module.css";
import Modal from "./Modal";
export default function ProfileCard({ user, handleDelete, handleUpdate }) {
  const [liked, setLiked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [updateInfo, setUpdateInfo] = useState(user);

  const handleLike = () => {
    setLiked((prevState) => {
      return !prevState;
    });
  };

  const handleEdit = () => {
    setUpdateInfo(user);
    setShowModal((prevState) => {
      return !prevState;
    });
  };

  const handleInput = (e) => {
    if (e.target.id === "name") {
      setUpdateInfo((prevState) => {
        return { ...prevState, name: e.target.value };
      });
    }
    if (e.target.id === "email") {
      setUpdateInfo((prevState) => {
        return { ...prevState, email: e.target.value };
      });
    }
    if (e.target.id === "phone") {
      setUpdateInfo((prevState) => {
        return { ...prevState, phone: e.target.value };
      });
    }
    if (e.target.id === "website") {
      setUpdateInfo((prevState) => {
        return { ...prevState, website: e.target.value };
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      updateInfo.name &&
      updateInfo.email &&
      updateInfo.phone &&
      updateInfo.website
    ) {
      handleUpdate(user.id, updateInfo);
      setShowModal(false);
    }
  };

  return (
    <div className={styles.userContainer}>
      <div
        className={styles.userImage}
        dangerouslySetInnerHTML={{ __html: user.avatar }}
      ></div>
      <div className={styles.userDescription}>
        <h3>{user.name}</h3>
        <div>
          <i className="far fa-envelope"></i>
          <span>{user.email}</span>
        </div>
        <div>
          <i className="fas fa-phone"></i>
          <span>{user.phone}</span>
        </div>
        <div>
          <i className="fas fa-globe"></i>
          <span>{user.website}</span>
        </div>
      </div>
      <ul className={styles.userButtons}>
        <li>
          <button onClick={handleLike}>
            <i className={liked ? "fas fa-heart" : "far fa-heart"}></i>
          </button>
        </li>
        <Modal
          triggerItem={
            <li>
              <button onClick={handleEdit}>
                <i className="far fa-edit"></i>
              </button>
            </li>
          }
          show={showModal}
        >
          <form
            onSubmit={handleSubmit}
            className={`${styles.editModalWrapper} ${styles.scale_in_center}`}
          >
            <div className={styles.modalTop}>
              <span>Basic Modal</span>
              <i onClick={handleEdit} className="fas fa-times"></i>
            </div>
            <div className={styles.modalInputs}>
              <div className={updateInfo.name ? null : styles.showError}>
                <label htmlFor="name">Name:</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <input
                    defaultValue={user.name}
                    onChange={handleInput}
                    id="name"
                    type="text"
                    maxLength="25"
                  />
                  <p
                    className={`${styles.errorMessage} ${styles.swing_in_top_fwd}`}
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div className={updateInfo.email ? null : styles.showError}>
                <label htmlFor="email">Email:</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <input
                    defaultValue={user.email}
                    onChange={handleInput}
                    id="email"
                    type="email"
                    maxLength="25"
                  />
                  <p
                    className={`${styles.errorMessage} ${styles.swing_in_top_fwd}`}
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div className={updateInfo.phone ? null : styles.showError}>
                <label htmlFor="phone">Phone:</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <input
                    defaultValue={user.phone}
                    onChange={handleInput}
                    id="phone"
                    type="text"
                  />
                  <p
                    className={`${styles.errorMessage} ${styles.swing_in_top_fwd}`}
                  >
                    This field is required
                  </p>
                </div>
              </div>
              <div className={updateInfo.website ? null : styles.showError}>
                <label htmlFor="website">Website:</label>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <input
                    defaultValue={user.website}
                    onChange={handleInput}
                    id="website"
                    type="text"
                  />
                  <p
                    className={`${styles.errorMessage} ${styles.swing_in_top_fwd}`}
                  >
                    This field is required
                  </p>
                </div>
              </div>
            </div>
            <ul className={styles.modalButtons}>
              <li>
                <button type="button" onClick={handleEdit}>
                  Cancel
                </button>
              </li>
              <li>
                <button type="submit">OK</button>
              </li>
            </ul>
          </form>
        </Modal>
        <li>
          <button onClick={() => handleDelete(user.id)}>
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  );
}
