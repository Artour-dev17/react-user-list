import type {User} from "../../api/getUsers.ts";

interface UserItemProps {
    user: User;
}

function UserItem ({user}: UserItemProps){
    return (
        <li id={"user"}>
            <strong>{user.name}</strong> - {user.email}
        </li>
    );
}

export default UserItem;