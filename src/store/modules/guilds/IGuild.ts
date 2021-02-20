import { IUser } from "@/store/modules/auth/IUser";

export interface IGuild {
    id: number,
    user_id: number,
    name: string,
    description: string,
    room_id: number,
    badge: string,
    date_created: number,
    member_count: number,
    user: IUser
}
