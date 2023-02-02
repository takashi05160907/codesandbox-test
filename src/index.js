// const,let等の変数宣言
/**
 *
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = 'letは再宣言不可能'；

// const val3 = "const変数";
// console.log(val3);

// // val3 = "const変数は上書き不可";

// const val3 = "const変数は再宣言不可";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "takashi",
//   age: 33
// };
// console.log(val4);

// val4.name = "yoko";
// console.log(val4);

// val4.adress = 'hiroshima';
// console.log(val4)；

// constで定義した配列はプロパティの変更が可能

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const name = "takashi";
// const age = 33;
// // 私の名前はnameです。年齢は　age歳です。　と画面に出力する
// // 従来
// const message = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message);

// // テンプレートリテラル
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1desu"));
// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// 分割代入
// const myProfile = {
//   name: "takashi",
//   age: 33
// };

// // const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

const myProfile = ["takashi", 33];
const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);
