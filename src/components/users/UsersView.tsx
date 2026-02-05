import type { UsersState } from "../../types/UsersState.ts";
import UsersLoading from "./UsersLoading.tsx";
import UsersError from "./UsersError.tsx";
import UsersSuccess from "./UsersSuccess.tsx";

interface Props{
    state: UsersState;
    onReload: ()=> void;
}

function UsersView({state, onReload }: Props){
    if (state.status === "loading") return <UsersLoading />;
    if (state.status === "error") return <UsersError error={state.error} onRetry={onReload} />;
    if (state.status === "success") return <UsersSuccess users={state.users} onClick={onReload} />;

    return null;
}

export default UsersView;