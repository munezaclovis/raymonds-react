import { IRole } from "./Role";

export type IUser = {
    id: number | null | undefined;
    name: string | null | undefined;
    email: string | null | undefined;
    role: IRole;
    created_at: string | null | undefined;
    updated_at: string | null | undefined;
};

export type IUserErrors = {
    message: string | null | undefined;
    name: string[] | null | undefined;
    email: string[] | null | undefined;
};
