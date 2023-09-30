// ユーザー新規作成用のサービス
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