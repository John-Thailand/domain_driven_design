// 権限の型
type Role = {
    value: string,
}

// ユーザーの権限の値オブジェクトを生成する関数
const createRole = (value: string): Role => {
    // バリデーションなどのロジックを記述
    return { value };
};

// 同じ権限を２つ定義
const userRole = createRole('User');
const anotherUserRole = createRole('User')

// 以下の２つのオブジェクトは同じ値を持っているため、交換可能です。
console.log(userRole);
console.log(anotherUserRole);