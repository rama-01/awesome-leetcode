const sleep = (millis: number):Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, millis));
} 

sleep(1000).then(() => console.log('hello world'))

export {}
