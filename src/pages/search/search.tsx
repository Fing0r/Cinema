import React, { FC, useState } from "react";
import { Box, Container } from "@mui/material";
import { SEARCH_BLOCK } from "@/shared/settings/config";
import { GenresStep } from "@/pages/search/genres-step";
import { RatingStep } from "@/pages/search/rating-step";
import { PopularStep } from "@/pages/search/popular-step";
import { SearchResult } from "@/pages/search/search-result";

const SearchFilm: FC = () => {
    const [showBlock, setShowBlock] = useState(SEARCH_BLOCK.GENRES);

    return (
        <Box p='1.875rem 0'>
            <Container maxWidth='lg'>
                {showBlock === SEARCH_BLOCK.GENRES && <GenresStep handleClick={setShowBlock} />}
                {showBlock === SEARCH_BLOCK.RATING && <RatingStep handleClick={setShowBlock} />}
                {showBlock === SEARCH_BLOCK.POPULAR && <PopularStep handleClick={setShowBlock} />}
                {showBlock === SEARCH_BLOCK.FILM && <SearchResult />}
            </Container>
        </Box>
    );
};

export { SearchFilm };
