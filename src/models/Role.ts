export type IRole =
    | {
          name: string | undefined;
      }
    | undefined;

export type IRoleErrors = {
    message: string | null | undefined;
    name: string[] | null | undefined;
};
