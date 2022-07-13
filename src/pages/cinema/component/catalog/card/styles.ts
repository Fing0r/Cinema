export const cardStyle = {
    position: "relative",
    flex: "0 1 100%",
    display: "flex",
    boxShadow: "0 10px 40px rgb(0 0 0 / 30%)",
    overflow: "hidden",
    fontSize: "1rem",
};

export const cardContentStyle = {
    padding: 0,
    flex: "1 1 100%",
    display: "flex",
    flexDirection: "column",
    "&:last-child": {
        padding: 0,
    },
};

export const cardLinkStyle = {
    zIndex: 1,
    "&:after": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
    },
};
