import UserItem from "./UserItem.tsx";
import type { User } from "../../api/getUsers.ts";

interface UserListProps {
    users: User[];
}

function UserList({users}: UserListProps){
    if (users.length === 0) {
        return <p>There is no users</p>;
    }

    return (
        <ul>
            {users.map((user) => (
            <UserItem key={user.id} user={user} />
            ))}
        </ul>
    );
}

export default UserList;