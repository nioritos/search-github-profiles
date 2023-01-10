export const SearchProfile = async (profile) => {
    try {
        let url = `https://api.github.com/users/${profile}`;
        console.log(url)
        const response = await fetch(url).then(async (d) => await d.json()).catch(err => console.error(err));
        return response;
    } catch(err) {
        console.error(err)
    }
};