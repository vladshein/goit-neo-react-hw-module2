import css from "./FriendListItem.module.css";
const FriendListItem = ({ avatar, name, isOnline }) => {
  console.log("avatar");

  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline ? (
        <p style={{ color: "green" }}>Online</p>
      ) : (
        <p style={{ color: "red" }}>Offline</p>
      )}
    </div>
  );
};
export default FriendListItem;
