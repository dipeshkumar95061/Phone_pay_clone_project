function editText(element) {
  const currentText = element.textContent;
  const isAmount = currentText.trim().startsWith("₹");
  const value = isAmount ? currentText.replace("₹", "").trim() : currentText;

  const input = document.createElement("input");
  input.value = value;
  input.className = "edit-input";

  input.onblur = () => {
    element.textContent = isAmount ? "₹" + input.value : input.value;
    element.style.display = "block";
  };

  input.onkeydown = (e) => {
    if (e.key === "Enter") {
      input.blur();
    }
  };

  element.textContent = "";
  element.appendChild(input);
  input.focus();
}
