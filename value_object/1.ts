type Username = {
    readonly value: string;
};

// ユーザーの値オブジェクトを作成する関数
// Username型のオブジェクトを生成する
const createUsername = (value: string): Username => {
    // ユーザーオブジェクトのバリデーションロジックなどを記載する
    return {
        value: value,
    };
};

// 不変性を持つ値オブジェクトを生成
// 不変性とは「一度作成された後は状態の変更ができない」ことを言います。
const username = createUsername("Alice");

// 'Alice'が出力
console.log(username.value);

// readonlyを付与しているので不変性が保たれる