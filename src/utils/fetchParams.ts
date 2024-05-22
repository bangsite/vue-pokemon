export const fotmatParamsWithFilter = (params: { [key: string]: any }) => {
    const newParams: { [key: string]: any } = {};

    if (Object.keys(params.pagination)) {
        // Format pagination parameters
        for (const [key, value] of Object.entries(params.pagination)) {
            newParams[`page[${key}]`] = value;
        }
    }

    if (Object.keys(params.filters)) {
        // Format filters parameters
        for (const [key, value] of Object.entries(params.filters)) {
            newParams[`filter[${key}]`] = value;
        }
    }

    // Add sort parameter
    if (params.sort) {
        newParams['sort'] = params.sort;
    }

    return newParams;
}
