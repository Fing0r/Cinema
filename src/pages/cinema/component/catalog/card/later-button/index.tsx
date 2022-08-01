import React, { FC, memo } from "react";
import { IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useActions } from "@/shared/hooks/useActions";
import useToggleFilmByAuth from "@/shared/hooks/useToggleFilmByAuth";

interface LaterButtonProps {
    id: number;
}

const LaterButton: FC<LaterButtonProps> = memo(({ id }) => {
    const { toggleLaterFilm } = useActions();
    const toggleFilm = useToggleFilmByAuth(id, toggleLaterFilm);

    return (
        <IconButton
            color='default'
            onClick={toggleFilm}
            sx={{
                position: "relative",
                zIndex: 2,
            }}
        >
            <BookmarkBorderIcon />
        </IconButton>
    );
});

export { LaterButton };
