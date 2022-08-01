import React, { FC } from "react";
import { IconButton } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useActions } from "@/shared/hooks/useActions";
import useToggleFilmByAuth from "@/shared/hooks/useToggleFilmByAuth";

interface FavoriteButtonProps {
    id: number;
}

const FavoriteButton: FC<FavoriteButtonProps> = ({ id }) => {
    const { toggleFavoriteFilm } = useActions();
    const toggleFilm = useToggleFilmByAuth(id, toggleFavoriteFilm);

    return (
        <IconButton
            color='default'
            onClick={toggleFilm}
            sx={{
                position: "relative",
                zIndex: 2,
            }}
        >
            <StarBorderIcon />
        </IconButton>
    );
};

export { FavoriteButton };
