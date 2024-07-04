export default function getBearerToken() {
    const access_token = localStorage.getItem('access_token');
    const bearerToken = `Bearer ${access_token}`;

    return bearerToken;
}