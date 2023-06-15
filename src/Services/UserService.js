const getFavourites = () => {
    const favourites = localStorage.getItem('favourites')
    return favourites ? JSON.parse(favourites) : [];
}

export { getFavourites };
