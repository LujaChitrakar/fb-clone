import "./online.css";

export default function Online({ Users }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          src={Users.profilePicture}
          alt="person"
          className="rightbarProfileImg"
        />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{Users.username}</span>
    </li>
  );
}
