
async function  Fetchapi(apiPath) {
    const result = await fetch(apiPath)
    var record = await result.json()
    return record
}

export  default Fetchapi