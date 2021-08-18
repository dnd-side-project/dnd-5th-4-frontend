export const uploadDress = (dress: object) => ({
    type: 'UPLOAD_DRESS',
    payload: {
        dress,
    },
});
