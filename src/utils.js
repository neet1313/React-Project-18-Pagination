
const paginate = (followers) => {
    const itemsPerPage = 9;

    const pages = []; //chopped array
    for (let i = 0; i < followers.length; i++) {
        if (i % itemsPerPage === 0) {
            const arr = followers.slice(i, i + itemsPerPage);
            pages.push(arr);
        }
    }
    return pages;
}

export default paginate
