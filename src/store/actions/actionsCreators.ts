const actionCreator = (type: string) => (payload?: unknown) => ({
    type,
    payload,
});

export default actionCreator;
