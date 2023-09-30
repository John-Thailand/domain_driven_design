// ２つのユーザーオブジェクトが等価をチェックする関数
const areUsernamesEqual = (username1: Username, username2: Username): boolean => {
    return username1.value === username2.value;
}

// 値オブジェクトを３つ生成する
const username1 = createUsername('Alice');
const username2 = createUsername('Bob');
const username3 = createUsername('Alice');

// 値オブジェクトが等価性によって比較される
// 等価性とは値オブジェクトがその内部の値に基づいて比較される性質です。
console.log(areUsernamesEqual(username1, username2)); // false
console.log(areUsernamesEqual(username1, username3)); // true