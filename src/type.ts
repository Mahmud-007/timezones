export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    role: string;
}
export type Record = {
    id: string;
    name: string;
    city: string;
    timezone: string;
    currentTime: string;
    diffGMT: string;
    creator: string;
}