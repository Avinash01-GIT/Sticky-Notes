let titleInput = document.getElementById("titleInput");
let textInput = document.getElementById("textInput");
let colorInput = document.getElementById("color");
let addNoteBtn = document.getElementById("Addnote");
let notesContainer = document.querySelector(".right");

addNoteBtn.addEventListener("click", () => {
  if (titleInput.value === "" || textInput.value === "") {
    alert("Please input a title and text for the note");
    return;
  }
  const noteBigDiv = document.createElement("div");
  const noteDiv = document.createElement("div");
  const noteTitle = document.createElement("h3");
  const noteText = document.createElement("p");
  const closeButton = document.createElement("span");

  noteBigDiv.classList.add("noteIt");
  noteDiv.classList.add("note");
  noteDiv.style.backgroundColor = colorInput.value;
  noteBigDiv.textContent = titleInput.value;
  noteText.textContent = textInput.value;
  closeButton.textContent = "X";
  closeButton.classList.add("close-btn");

  noteBigDiv.appendChild(noteTitle);
  noteDiv.appendChild(noteText);
  noteBigDiv.appendChild(closeButton);
  noteBigDiv.appendChild(noteDiv);
  notesContainer.appendChild(noteBigDiv);

  titleInput.value = "";
  textInput.value = "";
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-btn")) {
    e.target.parentNode.remove();
  }
});
