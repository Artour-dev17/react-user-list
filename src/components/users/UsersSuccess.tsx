import type {User} from "../../api/getUsers.ts";
import UserList from "./UserList.tsx";
import UsersEmpty from "./UsersEmpty.tsx";
import ReloadButton from "../ReloadButton.tsx";

interface Props{
    users: User[];
    onClick: ()=> void;
}
// UI-компонент: отвечает только за отображение успешного состояния
function UsersSuccess({users, onClick}:Props){
    return (
        <>
            <ReloadButton onClick={onClick}/>

            {users.length === 0 ? (
                <UsersEmpty/>
            ) : (
                <UserList users={users}/>
            )}
        </>
    );
}

export default UsersSuccess;