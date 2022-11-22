export const FriendList = (props) => { 
    return (
    <ul class="friend-list">
        {
            props.friends.map(friend => (
                <li class="friend-item" key={friend.id}>
                    <span
                        class={"friend-status " + (friend.isOnline.toString())}></span>
                    <img class="friend-avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p class="friend-name">{friend.name}</p>
                </li>
            ))
    }
    </ul>
    );
};

