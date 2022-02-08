

function copy_arr(myObj) {
    const newObj = {};
    let key;
    for(key in myObj) {
        newObj[key] = myObj[key];
    }
    return newObj;
};

const oldObj = {
    name: 'Urmat',
    surname: 'Temirov',
    hobby: {
        1: 'pull-ups on the bar',
        2: 'run'
    }

};

console.log(oldObj);

