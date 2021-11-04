export type PaginationType = {
    current_page: number,
    data: any[],
    first_page_url: string,
    from: number,
    last_page: 3,
    last_page_url: string,
    links:
    {
        url: string | null,
        label: string,
        active: boolean
    }[],
    next_page_url: string,
    path: string,
    per_page: number,
    prev_page_url: boolean,
    to: number,
    total: number,
}

export type IAction = {
    type: string,
    payload: any
}