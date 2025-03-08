// inicia banco de dados
const db = new IndexedDBRepository("stroop", 1);

const colors = { green: "#6FCF97", blue: "#6FA3EF"};

const data = {
  pt: [
    { word: "Amizade", answer: "green", color: colors.green },
    { word: "Estupro", answer: "blue", color: colors.blue },
    { word: "Consultório", answer: "green", color: colors.green },
    { word: "Decepção", answer: "green", color: colors.green },
    { word: "Vitória", answer: "blue", color: colors.blue },
    { word: "Madeira", answer: "green", color: colors.green },
    { word: "Preconceito", answer: "blue", color: colors.blue },
    { word: "Maligno", answer: "green", color: colors.green },
    { word: "Vidro", answer: "blue", color: colors.blue },
    { word: "Sucesso", answer: "blue", color: colors.blue },
    { word: "Diversão", answer: "green", color: colors.green },
    { word: "Cesto", answer: "blue", color: colors.blue },
    { word: "Homicídio", answer: "green", color: colors.green },
    { word: "Feliz", answer: "green", color: colors.green },
    { word: "Borracha", answer: "blue", color: colors.blue },
    { word: "Acidente", answer: "green", color: colors.green },
    { word: "Afeto", answer: "blue", color: colors.blue },
    { word: "Prédio", answer: "blue", color: colors.blue },
    { word: "Gargalhada", answer: "green", color: colors.green },
    { word: "Prazer", answer: "blue", color: colors.blue },
    { word: "Pé", answer: "green", color: colors.green },
    { word: "Dor", answer: "green", color: colors.green },
    { word: "Elogio", answer: "blue", color: colors.blue },
    { word: "Xícara", answer: "blue", color: colors.blue },
    { word: "Sorriso", answer: "green", color: colors.green },
    { word: "Perda", answer: "blue", color: colors.blue },
    { word: "Tinta", answer: "blue", color: colors.blue },
    { word: "Traição", answer: "green", color: colors.green },
    { word: "Bondade", answer: "green", color: colors.green },
    { word: "Unha", answer: "blue", color: colors.blue },
    { word: "Morte", answer: "green", color: colors.green },
    { word: "Abraço", answer: "green", color: colors.green },
    { word: "Colher", answer: "blue", color: colors.blue },
    { word: "Aborto", answer: "blue", color: colors.blue },
    { word: "Doença", answer: "green", color: colors.green },
    { word: "Areia", answer: "blue", color: colors.blue },
    { word: "Beijo", answer: "green", color: colors.green },
    { word: "Carinho", answer: "green", color: colors.green },
    { word: "Mesa", answer: "green", color: colors.green },
    { word: "Frustração", answer: "blue", color: colors.blue },
    { word: "Amor", answer: "green", color: colors.green },
    { word: "Lápis", answer: "green", color: colors.green },
    { word: "Pobreza", answer: "blue", color: colors.blue },
    { word: "Ódio", answer: "blue", color: colors.blue },
    { word: "Nariz", answer: "blue", color: colors.blue }
  ],
  en: [
    { word: "Success", answer: "green", color: colors.green },
    { word: "Care", answer: "green", color: colors.green },
    { word: "Office", answer: "blue", color: colors.blue },
    { word: "Disease", answer: "blue", color: colors.blue },
    { word: "Compliment", answer: "green", color: colors.green },
    { word: "Wood", answer: "blue", color: colors.blue },
    { word: "Affection", answer: "blue", color: colors.blue },
    { word: "Rape", answer: "green", color: colors.green },
    { word: "Glass", answer: "green", color: colors.green },
    { word: "Victory", answer: "green", color: colors.green },
    { word: "Pain", answer: "blue", color: colors.blue },
    { word: "Basket", answer: "blue", color: colors.blue },
    { word: "Accident", answer: "green", color: colors.green },
    { word: "Love", answer: "green", color: colors.green },
    { word: "Eraser", answer: "blue", color: colors.blue },
    { word: "Murder", answer: "blue", color: colors.blue },
    { word: "Hate", answer: "green", color: colors.green },
    { word: "Building", answer: "blue", color: colors.blue },
    { word: "Happy", answer: "green", color: colors.green },
    { word: "Laughter", answer: "blue", color: colors.blue },
    { word: "Foot", answer: "green", color: colors.green },
    { word: "Frustration", answer: "green", color: colors.green },
    { word: "Fun", answer: "blue", color: colors.blue },
    { word: "Cup", answer: "green", color: colors.green },
    { word: "Kindness", answer: "green", color: colors.green },
    { word: "Poverty", answer: "blue", color: colors.blue },
    { word: "Paint", answer: "blue", color: colors.blue },
    { word: "Abortion", answer: "green", color: colors.green },
    { word: "Evil", answer: "blue", color: colors.blue },
    { word: "Nail", answer: "green", color: colors.green },
    { word: "Prejudice", answer: "green", color: colors.green },
    { word: "Friendship", answer: "blue", color: colors.blue },
    { word: "Spoon", answer: "green", color: colors.green },
    { word: "Disappointment", answer: "blue", color: colors.blue },
    { word: "Kiss", answer: "blue", color: colors.blue },
    { word: "Sand", answer: "blue", color: colors.blue },
    { word: "Loss", answer: "green", color: colors.green },
    { word: "Hug", answer: "blue", color: colors.blue },
    { word: "Table", answer: "green", color: colors.green },
    { word: "Death", answer: "blue", color: colors.blue },
    { word: "Betrayal", answer: "green", color: colors.green },
    { word: "Pencil", answer: "blue", color: colors.blue },
    { word: "Smile", answer: "blue", color: colors.blue },
    { word: "Pleasure", answer: "green", color: colors.green },
    { word: "Nose", answer: "blue", color: colors.blue }
  ]
};

const language = window.localStorage.getItem("language") ?? "pt";
const selectedLanguageData = data[language];

const selectLanguageInput = document.querySelector("#language");
if (selectLanguageInput) {
  selectLanguageInput.value = language;
  selectLanguageInput.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    window.localStorage.setItem("language", selectedLanguage);
    window.location.reload();
  });
}

function clearScreen() {
  const title = document.querySelector("main h1");
  const form = document.querySelector("form");
  const languageSelector = document.querySelector(".language-selector");
  title.remove();
  form.remove();
  languageSelector.remove();
}

const userForm = document.querySelector("#userForm");
if (userForm) {
  userForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;

    await db.init((["users"]));
    await db.add("users", {username, email});

    alert("usuário cadastrado");
  });
}