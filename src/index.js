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

// const myProfile = ["takashi", 33];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// デフォルト値
// const sayHello = (name = "user") => console.log(`こんにちは！${name}さん`);
// sayHello();

// スプレッド構文
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

// mapやfilterを使った配列の処理
// const nameArr = ["takashi", "rin", "youko"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(`${index + 1}番目は${nameArr[index]}`);
// }

// const nameArr2 = nameArr.map((name)=> {
//   return name + '1';
// })
// console.log(nameArr2);

// nameArr.map((name,index)=>console.log(`${index + 1}番目は${name}`));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 0;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "takashi") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// 三項演算子
// ある条件　？ 条件がtrueの時　: 条件が　falesの時；
// const val1 = 1<0 ? 'true':'false';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number'? num.toLocaleString() : '数値を入力して下さい';
// console.log(formattedNum);

// const checkSum = (num1,num2)=> {
//   return num1 + num2 > 100 ? `100を超えています。数値は${num1 + num2}です　`:`許容範囲内です。数値は${num1 + num2}です`;}
//   console.log(checkSum(100,20))
