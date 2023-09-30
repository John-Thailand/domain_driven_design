type Username = {
    value: string;
    toDisplayName: () => string;
}

const createUsername = (value: string): Username => {
    if (value === '') {
        throw new Error('Username cannot be empty');
    }
    // ユーザーオブジェクトの先頭の文字を大文字に変換する振る舞い
    const toDisplayName = (): string => {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    return { value, toDisplayName };
}

// 値オブジェクトを生成
const username = createUsername('alice');
// 値オブジェクト自身が独自の振る舞いを呼び出す
console.log(username.toDisplayName()); // "Alice"