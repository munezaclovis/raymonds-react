export type IRole = {
    id: number | null | undefined;
    name: string | null | undefined;
};

export type IRoleErrors = {
    message: string | null | undefined;
    name: string[] | null | undefined;
};
