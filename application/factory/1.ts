// ファクトリはエンティティや値オブジェクトの生成や再構築を行う責務を持っています。
// ユーザーIDのオブジェクト
export type UserId = {
    value: string;
}
  
// User.ts（ユーザーエンティティ）
export type User = {
    id: UserId;
    name: string;
    email: string;
}

export const createUser = (id: UserId, name: string, email: string): User => ({
    id,
    name,
    email,
});

export const UserFactory = {
    // ユーザーを新規作成する際に使用する
    create: (name: string, email: string): User => {
      // IDを自動生成する処理
      const id = createUserId(generateUniqueId());
      return createUser(id, name, email);
    },
};

// 新規ユーザーを作成
const newUser = UserFactory.create('John Doe', 'john.doe@example.com');
console.log('Created new user:', newUser);

// 今紹介した例では「ファクトリを生成せずにエンティティに定義しているcreateUserを直接呼び出した方がよくない？」と思うかもしれません。
// 今回は説明のために簡単な例を紹介しましたが、複雑なオブジェクト生成が必要な場合は、ファクトリ経由でオブジェクトを生成した方がより生成プロセスを効率的に管理することができます。