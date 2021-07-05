function updateUserDataById(usersdata, userId, updatedata) {
    for(let i in usersdata){
        if(usersdata[i].id == userId){
            usersdata[i] = updatedata;
            return 1;
        }
    }
    return 0;
}

function getUserByID(usersdata, userId) {
    for(let i in usersdata) {
        if(usersdata[i].id == userId)
            return usersdata[i];
    }
    return 0;
}

function deleteUserByID(usersdata, userId) {
    for(let i in usersdata) {
        if(usersdata[i].id == userId)
            return i;
    }
    return 0;
}

function getSortedOrder(loginName) {
    return function (a, b) {
        if (a[loginName] > b[loginName]) {
            return 1;
        } else if (a[loginName] < b[loginName]) {
            return -1;
        }
        return 0;
    }
}

function getUsersBySubstring(arr,substring,limit){
    let result=[];
    for (let i in arr){
        let str = arr[i].login;
        if(str.includes(substring) && result.length<limit){
            result.push(arr[i]);
        }
    }
    return result;
}



exports.updateUserDataById = updateUserDataById; 
exports.getUserByID = getUserByID;
exports.deleteUserByID = deleteUserByID;
exports.getSortedOrder = getSortedOrder;
exports.getUsersBySubstring = getUsersBySubstring;