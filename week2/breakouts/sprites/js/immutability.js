// immutable, statless, functional
function sum(nums) {
    var i = nums.length,
        sum = 0

    while( i-- ) {
        sum += nums[i]
    }

    return sum
}

// mutable, changes state, dysfunctional
function add1(nums) {
    var i = nums.length,
        add1nums = []

    while( i-- ) {
        add1nums[i] = nums[i]+1 // this is not immutable
        // modifiying the original data
    }
    return add1nums
}

var numnums = [1,2,3,4]

console.log(numnums)

var newNums = add1(numnums)

console.log(newNums, numnums)

// enforcing immutability on an Object

var myMutableObj = {
    name: 'Snoopy',
    age: 'Old',
    species: 'Dog'
}

myMutableObj.age = 'Young'

var myImmutableObj = {
    name: 'Droopy',
    age: 'Older'
}

// forcing immutability
Object.defineProperty(myImmutableObj,'species', {
    writable: false,
    value: 'Dog'
})
