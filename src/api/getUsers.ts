export interface User {
    id: number;
    name: string;
    email: string;
}

export async function getUsers(): Promise<User[]> {
   try {
       const response = await fetch( "https://jsonplaceholder.typicode.com/users");

       if (!response.ok){
           throw new Error(`HTTP_${response.status}`);
       }
       return response.json();

   } catch {
       throw new Error("NETWORK_ERROR");
   }
}

