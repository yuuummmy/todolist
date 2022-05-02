import "./styles.css";

const onClickAdd = () => {
  //textbox値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  alert(inputText);
  document.getElementById("add-text").value = "";
};

document
  .getElementById("add-buttion")
  .addEventListener("click", () => onClickAdd());
