// 同じ属性であっても区別される
// 同じ属性（名前とメールアドレス）を持つユーザーエンティティを作成して比較をします。
// これらは識別子（ID）を持っているので、ことなるエンティティになります。
const user1 = createUser('1', 'Alice', 'alice@example.com');
const user1 = createUser('2', 'Alice', 'alice@example.com');