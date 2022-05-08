import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの内容を取得して初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divタグの生成 JavaScript側かHTMLのロムを生成して流し込む
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグの生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)タグの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)タグの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加していく
  document.getElementById("incomplete-list").appendChild(div);

  alert(inputText);
};

//ボタンを押すときにイベントを付与する動作
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
