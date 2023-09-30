type User {
    id: number;
    name: string;
    email: string;
}

// まず識別子（ID）を持ったユーザーのtエンティティとユーザーエンティティを実際に生成する関数を作成する。
const createUser = (id: number, name: string, email: string): User => {
    if (!id || !name || !email) {
      throw new Error('Invalid arguments for creating user');
    }
    return {
      id,
      name,
      email
    };
};

// ユーザー名を変更する
const changeUserName = (user: User, newName: string): User => {
    if (!newName) {
      throw new Error('Invalid argument for changing user name');
    }
  
    return {
      ...user,
      name: newName
    };
};

// ユーザーのtエンティティを生成する
const user = createUser('1', 'Alice', 'alice@example.com');
console.log(user); // { id: '1', name: 'Alice', email: 'alice@example.com' }

// ユーザーのエンティティを更新する
// よってエンティティは可変性を持つので値を変更することができる
const updateUser = changeUserName(user, 'Alicia');
console.log(updatedUser); // { id: '1', name: 'Alicia', email: 'alice@example.com' }