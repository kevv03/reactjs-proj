// eslint-disable-next-line react/prop-types
function Searcher({setSearcher}) {
    const handleSearcher = (e) => {
        setSearcher(e.target.value);
    }

    return (
        <>
            <form action="">
                <input type="search" name="buscador" placeholder="Barbie, Fast X, Transformers..." onChange={handleSearcher} />
            </form>
        </>
    )
}

export default Searcher
