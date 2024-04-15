import { SearchIcon } from './data/icons';

function Search() {
    return (
        <form className="relative hidden basis-4/12 rounded-2xl border lg:block">
            <input
                type="search"
                className="w-full rounded-2xl border-t-clr py-2 pe-4 ps-12 outline-none ring-2 ring-transparent placeholder:text-t-clr focus:ring-primary-hover"
                placeholder="Search"
            />
            <span className="absolute left-0 top-0 flex h-full w-12 items-center justify-center rounded-2xl text-t-clr">
                <SearchIcon className="h-4 w-4" />
            </span>
        </form>
    );
}

export default Search;
