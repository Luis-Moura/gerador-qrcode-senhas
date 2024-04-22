async function permittedCharacters (choose) {

    let permitted = []
     
    if (choose.uppercase === '1') {
        permitted.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    if (choose.lowercase === '1') {
        permitted.push(...'abcdefghijklmnopqrstuvwxyz');
    }

    if (choose.numbers === '1') {
        permitted.push(...'0123456789');
    }

    if (choose.specialChar === '1') {
        permitted.push(...'!@#$%¨&*()_-+=:;^~][}{.>,<?/\|');
    }

    return permitted;
}

export default permittedCharacters
