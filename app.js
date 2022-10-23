const quiz = [
    {
        question: "ゲーム史上、最も売れたゲーム機は次のうちどれ？",
        answers: [
            "スーパーファミコン",
            "プレイステーション２",
            "スイッチ",
            "DS"
        ],
        correct: "DS"
    },{
        question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
        answers: [ 
        'MOTHER2', 
        'スーパーマリオブラザーズ3', 
        'スーパードンキーコング', 
        '星のカービィ'
        ],
        correct: 'MOTHER2'
    },{
        question: 'ファイナルファンタジーⅣの主人公の名前は？',
        answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
        correct: 'セシル'
    }
];

// $button[0].textContent = answers[0];
// $button[1].textContent = answers[1];
// $button[2].textContent = answers[2];
// $button[3].textContent = answers[3];
// リファクタリング 何度も出てくる命令をまとめる
// point 「$」でHTMLのオブジェクトが入っていることが理解しやすい
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    let buttonLength = $button.length;
    while(buttonIndex < $button.length) {
        // ここに命令
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz ();

const clickHandler = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！") 
        score++;
    } else { 
        window.alert("不正解！") 
    }

    quizIndex++;
    if(quizIndex < quizLength) {
        // 問題数がまだあればこちらを実行
        setupQuiz ();
    } else {
        // 問題数がもうなければこちらを実行
        window.alert("終了！あなたの正解数は"+ score + '/' + quizLength + "です")
        // point 文字列と変数は+でつなぐことができる
    }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener("click", (e)=> {
        clickHandler(e);
    });
    handlerIndex++;
}
// $button[0].addEventListener("click", (e)=> {
//     clickHandler(e);
// });
// $button[1].addEventListener("click", (e)=> {
//     clickHandler(e);
// });
// $button[2].addEventListener("click", (e)=> {
//     clickHandler(e);
// });
// $button[3].addEventListener("click", (e)=> {
//     clickHandler(e);
// });
