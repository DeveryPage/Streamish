const baseUrl = '/api/video';

export const getAllVideos = () => {
    return fetch(baseUrl)
        .then((res) => res.json())
};

export const getWithComments = () => {
    return fetch(baseUrl + '/GetWithComments')
        .then((res) => res.json())

};

export const addVideo = (video) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(video),
    });
};

export const searchByVideo = (terms) => {
    return fetch(baseUrl + `/search?q=${terms}`)
        .then((res) => res.json())
};