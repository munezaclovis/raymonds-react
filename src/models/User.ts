import { IRole } from "./Role";

export type IUser = {
    id: number | undefined,
    name: string | undefined,
    email: string | undefined,
    role: IRole,
    created_at: string | undefined,
    updated_at: string | undefined,
}