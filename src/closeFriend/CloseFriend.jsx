import "./closeFriend.css";

export const CloseFriend = ({ Users }) => {
  return (
    <li className="sidebarFriend">
      <img
        src={Users.profilePicture}
        alt="Profile"
        className="sidebarFriendImg"
      />
      <span className="sidebarFriendName">{Users.username}</span>
    </li>
  );
};
