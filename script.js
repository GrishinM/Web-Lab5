function quickSort(arr) {
    let len = arr.length
    if (len == 0)
        return []
    let a = [], b = [], p = arr[0];
    for (let i = 1; i < len; i++) {
        if (arr[i] < p)
            a[a.length] = arr[i]
        else
            b[b.length] = arr[i]
    }
    return quickSort(a).concat(p, quickSort(b));
}

function min(arr) {
    let min = arr[0]
    for (let i of arr) {
        if (i < min) {
            min = i
        }
    }
    return min
}

function max(arr) {
    let max = arr[0]
    for (let i of arr) {
        if (i > max) {
            max = i
        }
    }
    return max
}

function mid(arr) {
    let len = arr.length
    let sorted = quickSort(arr)
    if (len % 2 == 1)
        return sorted[(len - 1) / 2]
    else
        return 0.5 * (sorted[len / 2 - 1] + sorted[len / 2])
}

console.log(1)
let arr = [];
for (let i = 0; i < 1000; i++) {
    arr.push(Math.random())
}
console.log(arr)

console.log(2)
console.log(min(arr))
console.log(max(arr))
console.log(mid(arr))

console.log(3)
console.log(quickSort(arr))

console.log(4)
let dict = {}
for (let el of document.body.getElementsByTagName("*")) {
    let tagName = el.tagName.toLowerCase();
    if (!(tagName in dict))
        dict[tagName] = 1
    else
        dict[tagName] += 1
}
for (let key in dict)
    console.log(key + " - " + dict[key])