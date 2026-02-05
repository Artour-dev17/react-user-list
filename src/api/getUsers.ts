export interface User {
    id: number;
    name: string;
    email: string;
}

export async function getUsers(): Promise<User[]> {
    const response = await fetch( "https://jsonplaceholder.typicode.com/users");

    if (!response.ok){
        throw new Error("Ошибка загрузки пользователей");
    }

    return response.json();
}

