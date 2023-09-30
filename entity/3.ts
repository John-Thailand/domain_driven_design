// 同一性により区別される
// 2つのユーザーエンティティが同じ識別子（ID）を持っているかどうかで判定します。
const isSameUser = (userA: User, userB: User): boolean => {
    return userA.id === userB.id;
};

const user1 = createUser('1', 'Alice', 'alice@example.com');
const user2 = createUser('1', 'Bob', 'bob@example.com');

// user1とuser2は同じエンティティである
console.log(isSameUser(user1, user2)); // true