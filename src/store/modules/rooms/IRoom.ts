import { IUser } from "@/store/modules/auth/IUser";

export interface IRoom {
    id: number,
    owner_id: number,
    name: string,
    description: string,
    state: string,
    users: number,
    users_max: number,
    guild_id: number,
    score: number,
    user: IUser
}
