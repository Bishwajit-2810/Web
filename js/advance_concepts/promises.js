function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true
            if (success) {
                resolve("data fetched")
            }
            else {
                reject("data fetched failed")
            }
        }, 2000);
    })
}

fetchData()
    .then((data) => { console.log(data) })
    .catch((error) => { console.log(error) })


fetchData()
    .then((data) => {
        console.log(data)
        return data.toUpperCase()
    })
    .then((value) => { console.log(value) })
    .catch((error) => { console.log(error) })