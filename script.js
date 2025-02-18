let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const noTexts = [
    "？你认真的吗…", 
    "要不再想想？", 
    "不许选这个！ ", 
    "我会很伤心…", 
    "不行:(",
    "求求啦"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 50;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 6) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 6 次变化）
    if (clickCount === 1) mainImage.src = "images/CSGO/yaoren.jpg"; // 第一张
    if (clickCount === 2) mainImage.src = "images/CSGO/renshu.jpg";   // 第二张
    if (clickCount === 3) mainImage.src = "images/CSGO/chouxiangyeniu.jpg";   // 第三张
    if (clickCount === 4) mainImage.src = "images/CSGO/shenqi.jpg";  // 第四张
    if (clickCount === 5) mainImage.src = "images/CSGO/sahngxintuifei.jpg";  // 第五张
    if (clickCount >= 6) mainImage.src = "images/CSGO/kelianbaba.jpg";  // 第六张

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">上号上号!! ( >᎑<)♡︎ᐝ</h1>
            <img src="images/CSGO/shanghao.jpg" alt="拥抱" class="yes-image"    height="400px">
        </div>
    `;

    document.body.style.overflow = "hidden";
});