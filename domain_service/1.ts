// 値オブジェクト側で持たせるロジックの具体例
const createEmail = (email: string): Email => {
    // メールアドレスが適切な形式化をチェックするロジック等
    if (!validateEmail(email)) {
        throw new Error("Invalid email format.");
    }
    return { value: email };
}

// ドメインサービスで持たせるロジック
// ユーザーエンティティの型定義
type User = {
    id: number;
    name: string;
    email: string;
    password: Password;
};
// ハッシュ化したパスワードの型定義
type Password = {
    hashedValue: string;
};
// ドメインサービス内で定義するDB保存に使うハッシュ化関数
const createPassword = (plainTextPassword: string): Password => {
    // パスワードハッシュ化処理（実際には安全なハッシュ化アルゴリズムを使用する）
    const hashedValue = "hashed_" + plainTextPassword;
    return { hashedValue };
};