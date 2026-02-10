import type {User} from "../api/getUsers.ts";

export type UsersState =
    | {status: "idle"}
    | {status: "loading"}
    | {status: "error"; error: string}
    | {status: "success"; users: User[]}
