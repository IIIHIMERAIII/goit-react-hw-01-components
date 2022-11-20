function addCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export const Profile = (props) => {
    return (
    <div class="profile">
      <div class="description">
        <img
          src={props.avatar}
          alt="User avatar"
          class="avatar"
        />
        <p class="name">{props.username}</p>
        <p class="tag">@{props.tag}</p>
        <p class="location">{props.location}</p>
      </div>

      <ul class="stats">
        <li class="stats__item">
          <span class="label">Followers</span>
          <span class="quantity">{addCommas(props.stats.followers)}</span>
        </li>
        <li class="stats__item">
          <span class="label">Views</span>
            <span class="quantity">{addCommas(props.stats.views)}</span>
        </li>
        <li class="stats__item">
          <span class="label">Likes</span>
          <span class="quantity">{addCommas(props.stats.likes)}</span>
        </li>
      </ul>
    </div>
  );
};