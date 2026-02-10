import {useEffect, useState} from "react";
import {getUsers} from "../api/getUsers.ts";
import type { UsersState } from "../types/UsersState.ts";

export function useUsers(){

    const [state, setState] = useState<UsersState>({status: "idle"});

    async function loadUsers(){
        setState({status: "loading"});

        try {
            const data = await getUsers();

            setState({status: "success", users: data});
        } catch(e) {
            if (e instanceof Error){
                setState({status: "error", error: e.message });
            }
        }
    }

    useEffect(() => {
        loadUsers();
    }, []);

    function reset(){
        setState({status: "idle"});

    }

    return {
        state,
        reload: loadUsers,
        reset,
    };
}
