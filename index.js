// 変数
// let Tora = "Hello World";
// // Tora = "Hello WOrld2!!";

// // 定数
// const Torachan = ("cat");
// console.log(Torachan);

// 配列
let cat = ["雑種" , "スコティッシュフォールド", "ロシアンブルー","マンチカン"];
console.log(cat[0]);

// ループ文
// let index = 0;
// while(index < cat.length) {
//     // 繰り返したい命令
//     console.log(cat[index]);
//     index++;
// }

// if else
// if(cat.length < 5){
//     console.log("雑種猫ちゃん");
// } else {
//     console.log("ペットショップ");
// }

// 関数
const test = (arg)=> {
    // ここに実行したい命令を書く
    if(cat.length < arg){
        console.log("雑種猫ちゃん");
    } else {
        console.log("ペットショップ");
    }
};

// test(7);
// test(1);
// test(4);

// オブジェクト
const cat2 = {
    color : "brown",
    size : "large",
    breed : "mix",
    Toraneko : () => {
        console.log("Hello World!")
    }
};

console.log(cat2);
console.log(cat2.breed);
console.log(cat2.Toraneko());

// 特殊なオブジェクト2つ defaultで設定されているオブジェクトがある windowとdocument
console.log(window); 
// Webブラウザ全体のオブジェクト
// console.log(window,innerHeight); 

console.log(document);
console.log(document.getElementsByTagName("button")[0].addEventListener("click", ()=> {
    // 命令を書く
    window.alert("Hello World")
}));
