export const GetInfo = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    try {
        const response = await fetch(url);
        const result = await response.json();
        let data = {profileData: result, status_code: response.status};        
        return data;
    } catch (error) {
        console.error(error);
        return;
    }
}