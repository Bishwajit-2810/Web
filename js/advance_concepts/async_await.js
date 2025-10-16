function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "bishwajit", url: "google.com" })
        }, 3000);
    })
}
async function getUserData() {
    try {
        console.log("Fetching user data...")
        const userData = await fetchUserData()
        console.log("user data: ", userData);
        console.log("Fetching user data successfully")

    } catch (error) {
        console.log("error fetching data");

    }
}
getUserData()
