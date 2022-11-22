import PropTypes from "prop-types";

function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
    return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt="User avatar"
          class="avatar"
        />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li class="stats__item">
          <span class="label">Followers</span>
          <span class="quantity">{addCommas(followers)}</span>
        </li>
        <li class="stats__item">
          <span class="label">Views</span>
            <span class="quantity">{addCommas(views)}</span>
        </li>
        <li class="stats__item">
          <span class="label">Likes</span>
          <span class="quantity">{addCommas(likes)}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.prototype = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};