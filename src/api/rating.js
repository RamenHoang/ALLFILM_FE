import axios from '.';

export const ratingApi = params => axios
    .post(
        `/film/${params.id}/rating/${params.rating}`,
        null,
        { headers: params.headers }
    );
