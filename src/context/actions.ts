export const login = (userId: string) => ({
    type: 'LOGIN',
    payload: {
        userId,
    },
});
