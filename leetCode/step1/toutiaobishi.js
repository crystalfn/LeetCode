/**
 * 1
 */
var input = parseInt(readline());
var res = 0;

function outputNum(num) {
    if(num === 1) return;
    let cur = parseInt(Math.sqrt(num));
    if(num === Math.pow(cur, 2)) {
        res++;
        outputNum(cur);
    } else {
        res += num - Math.pow(cur, 2);
        outputNum(Math.pow(cur, 2));
    }
}
outputNum(input);
console.log(res);

/**
 * 3
 */
var T = parseInt(readline());
var res = [];

for(let i = 0; i < T; i++){
    let n = parseInt(readline());
    if(n < 3) res.push(-1);
    for(let j = 1; j < n; j++) {
        let cur = Math.sqrt(n + j * j);
        if(cur === parseInt(cur)) res.push(j);
    }
    res.push(-1);
}

for(let j = 0; j < T; j++) {
    console.log(res[j]);
}

/**
 * 4
 */
var n = parseInt(readline());
var arr = [];
var res = '';

for(let i = 0; i < n; i++){
    let lines = readline().split(' ');
    arr[i] = [];
    arr[i][0] = lines[0];
    arr[i][1] = lines[1];
}

function result(arr) {
    if(arr.length === 1) return arr[0][0] + ' ' + arr[0][1];
        
    let ai = [];
    let bi = [];
    for(let i = 0; i < n; i++) {
        if(ai.indexOf(arr[i][0]) < 0) ai.push(arr[i][0]);
        if(bi.indexOf(arr[i][1]) < 0) bi.push(arr[i][1]);
    }
    
    for(let i = 0; i < ai.length; i++) {
        for(let j = 0; j < bi.length; j++) {
            for(let k = 0; k < n; k++) {
                if(arr[k][0] === ai[i] || arr[k][1] === bi[j]) {
                    return ai[i] + ' ' + bi[j];
                }
            }
        }
    }
    return 'No';
}

console.log(result(arr));