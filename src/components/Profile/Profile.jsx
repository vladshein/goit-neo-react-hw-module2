import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.profileImageText}>
        <img src={image} alt="User avatar" className={css.profileImage} />
        <p className={css.profileName}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.profileList}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.profileList}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.profileList}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
