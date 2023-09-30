// ユーザーオブジェクト
type User = {
    id: string;
    name: string;
    email: string;
};

// UserRepositoryは、Userドメインオブジェクトの永続化層へのアクセスを抽象化するインターフェースです。
type UserRepository = {
    findById: (id: string) => Promise<User | null>;
    findAll: () => Promise<User[]>;
    save: (user: User) => Promise<void>;
};

// ユーザー情報を保持するためのインメモリ配列
const users: User[] = [];

// 指定されたIDを持つユーザーを検索し、存在すればユーザーを返し、存在しなければnullを返す
const findById = async (id: string): Promise<User | null> => {
  return users.find((user) => user.id === id) || null;
};

// すべてのユーザーを検索し、ユーザーの配列をかえす
const findAll = async (): Promise<User[]> => {
  return users;
};

// ユーザーを保存します。ユーザーが既に存在する場合は更新し、存在しない場合は新規追加
const save = async (user: User): Promise<void> => {
  const index = users.findIndex((u) => u.id === user.id);

  if (index !== -1) {
    users[index] = user;
  } else {
    users.push(user);
  }
};

// userRepositoryは、UserRepositoryインターフェースに従ったインメモリリポジトリの実装です。
export const userRepository: UserRepository = {
  findById,
  findAll,
  save,
};

// ↓↓↓作成したリポジトリをビジネスロジックを実装するサービス層で呼び出す例です。
// ユーザーの作成
const createUserService = async (name: string, email: string): Promise<User> => {
    const newUser: User = {
      id: generateUniqueId(), // ユニークなIDを生成する関数
      name: name,
      email: email,
    };
    // 具体的なDBとの接続処理はリポジトリ内で行われている
    await userRepository.save(newUser);
    return newUser;
  };
  
  // ユーザーの取得
  const getUserByIdService = async (id: string): Promise<User | null> => {
    // 具体的なDBとの接続処理はリポジトリ内で行われている
    return await userRepository.findById(id);
  };
  
  // すべてのユーザーの取得
  const getAllUsersService = async (): Promise<User[]> => {
    // 具体的なDBとの接続処理はリポジトリ内で行われている
    return await userRepository.findAll();
  };