function getGoodPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("good");
            resolve("done_good");
        }, 1000);
    })
}

function getBadPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("bad");
            reject("done_bad");
        }, 1000);
    })
}

function usePromise() {
    getGoodPromise().then(
        getGoodPromise
    ).then(
        getGoodPromise
    ).then(
        (result) => {
            console.log(result);
        }
    ).catch((error) => {
        console.error(error);
    })
}