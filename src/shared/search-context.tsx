import {
    createContext,
    Dispatch,
    FC,
    memo,
    ReactNode,
    SetStateAction,
    useContext,
    useMemo,
    useState,
} from "react";

interface ISearchContext {
    popularity: string | null;
    setPopularity: Dispatch<SetStateAction<string | null>>;
    rating: string | null;
    setRating: Dispatch<SetStateAction<string | null>>;
}

interface SearchProviderProps {
    children: ReactNode;
}

const SearchContext = createContext({} as ISearchContext);

const SearchProvider: FC<SearchProviderProps> = memo(({ children }) => {
    const [popularity, setPopularity] = useState<null | string>(null);
    const [rating, setRating] = useState<null | string>(null);

    const value: ISearchContext = useMemo(() => {
        return {
            popularity,
            setPopularity,
            rating,
            setRating,
        };
    }, [popularity, rating]);

    return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
});

export { SearchProvider };

export const useSearch = () => useContext(SearchContext);
