const data = [
    {
        uri: "https://www.themoviedb.org/t/p/original/rweIrveL43TaxUN0akQEaAXL6x0.jpg",
        width: 1080,
        height: 1920,
        id: idGenerator(),
        title: "www.luehangs.site2"
    },
    {
        uri: "https://www.themoviedb.org/t/p/original/rweIrveL43TaxUN0akQEaAXL6x0.jpg",
        width: 1080,
        height: 1920,
        id: idGenerator(),
        title: "www.luehangs.site"
    },
    {
        uri: "https://www.themoviedb.org/t/p/original/rweIrveL43TaxUN0akQEaAXL6x0.jpg",
        width: 1080,
        height: 1920,
        id: idGenerator(),
        title: "www.luehangs.site"
    },
    {
        uri: "https://www.themoviedb.org/t/p/original/rweIrveL43TaxUN0akQEaAXL6x0.jpg",
        width: 1080,
        height: 1920,
        id: idGenerator(),
        title: "www.luehangs.site"
    },
    
];

function idGenerator() {
    return Math.random().toString(36).substr(2, 9);
}

module.exports = data;