// inicia banco de dados
const db = new IndexedDBRepository("stroop", 1);

async function dbInit() {
  await db.init(["users", "results"]);
}
dbInit();

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

const pageForm = document.querySelector(".page-form");

const controlButtons = document.querySelector(".control-buttons");
controlButtons.style.display = "none";

function clearForm() {
  document.querySelector("input[name='username']").value = "";
  document.querySelector("input[name='email']").value = "";
}

function isMobileDevice() {
  return window.matchMedia("only screen and (max-width: 768px)").matches;
}

const userForm = document.querySelector("#userForm");
if (userForm) {
  userForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;

    await db.init(["users"]);

    const findUserByEmail = await db.search("users", {email});

    if (findUserByEmail.length === 0) {
      await db.add("users", { username, email });
    }
    const user = await db.search("users", { email });

    window.localStorage.setItem("current-user", JSON.stringify(user[0]));

    clearForm();

    pageForm.classList.add("hidden");

    await startStroopTest();
  });
}

async function getCurrentUser() {
  const currentUser = window.localStorage.getItem("current-user");
  if (currentUser) {
    return JSON.parse(currentUser);
  }
  return null;
}

async function startStroopTest() {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    alert("Usuário não encontrado");
    return;
  }

  const testContainer = document.createElement("div");
  testContainer.classList.add("stroop-test");
  testContainer.style.position = "fixed";
  testContainer.style.top = "50%";
  testContainer.style.left = "50%";
  testContainer.style.transform = "translate(-50%, -50%)";
  testContainer.style.fontSize = "60px";
  testContainer.style.fontWeight = "bold";
  testContainer.style.textAlign = "center";

  document.body.appendChild(testContainer);

  const words = selectedLanguageData;
  let index = 0;
  let results = [];

  function showTimer() {
    return new Promise((resolve) => {
      let count = 5;
      testContainer.innerText = count;
      const interval = setInterval(() => {
        count--;
        if (count === 0) {
          clearInterval(interval);
          resolve();
        } else {
          testContainer.innerText = count;
        }
      }, 1000);
    });
  }

  async function showNextWord() {
    if (isMobileDevice()) {
      controlButtons.style.display = "flex";
    }

    if (index >= words.length) {
      const params =  {
        username: currentUser.username,
        email: currentUser.email,
        results,
      };
      await db.init(["results"]);
      await db.add("results", params);
      showResults();
      return;
    }

    const wordData = words[index];
    testContainer.innerText = wordData.word;
    testContainer.style.color = wordData.color;

    let startTime = Date.now();

    function keyPressHandler(event) {
      if (event.key === "c" || event.key === "m") {
        let responseTime = (Date.now() - startTime) / 1000; // Convertendo para segundos
        let correct = (event.key === "c" && wordData.answer === "green") ||
                      (event.key === "m" && wordData.answer === "blue");

        results.push({
          word: wordData.word,
          color: wordData.color,
          responseTime: responseTime.toFixed(2), // Limita para 2 casas decimais
          correct
        });

        document.removeEventListener("keydown", keyPressHandler);
        document.removeEventListener("click", buttonClickHandler);
        testContainer.innerText = "";

        controlButtons.style.display = "none";
        setTimeout(() => {
          index++;
          showNextWord();
        }, 1000);
      }
    }

    function buttonClickHandler(event) {
      let button = event.target.closest("a")?.dataset?.value;
      if (button) {
        let responseTime = (Date.now() - startTime) / 1000;
        let correct = (button === "C" && wordData.answer === "green") || 
                      (button === "M" && wordData.answer === "blue");
        results.push({
          word: wordData.word,
          color: wordData.color,
          responseTime: responseTime.toFixed(2),
          correct
        });
        document.removeEventListener("keydown", keyPressHandler);
        document.removeEventListener("click", buttonClickHandler);
        testContainer.innerText = "";

        controlButtons.style.display = "none";
        setTimeout(() => {
          index++;
          showNextWord();
        }, 1000);
      }
    }

    document.addEventListener("keydown", keyPressHandler);
    document.addEventListener("click", buttonClickHandler);
  }

  function showResults() {
    controlButtons.style.display = "none";
    testContainer.innerHTML = `
      <h2 style="font-size: 24px; margin-bottom: 10px;">FIM</h2>
      <p style="font-size: 18px;"><strong>Nome:</strong> ${currentUser.username}</p>
      <p style="font-size: 18px;"><strong>Email:</strong> ${currentUser.email}</p>
      <h3 style="font-size: 20px; margin-bottom: 10px;">Resultados:</h3>
      <div style="max-height: 300px; overflow: auto; border: 1px solid #ddd; border-radius: 5px;">
        <table style="width: 100%; border-collapse: collapse; position: relative;">
          <thead>
            <tr style="background: #f0f0f0; position: sticky; top: 0; z-index: 1;">
              <th style="border: 1px solid #ddd; padding: 8px; font-size: 0.9rem; text-align: center;">#</th>
              <th style="border: 1px solid #ddd; padding: 8px; font-size: 0.9rem; text-align: center;">Palavra</th>
              <th style="border: 1px solid #ddd; padding: 8px; font-size: 0.9rem; text-align: center;">Tempo (s)</th>
              <th style="border: 1px solid #ddd; padding: 8px; font-size: 0.9rem; text-align: center;">Congruente</th>
            </tr>
          </thead>
          <tbody id="resultsTableBody"></tbody>
        </table>
      </div>
    `;
  
    const resultsTableBody = testContainer.querySelector("#resultsTableBody");
  
    results.forEach((result, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td style="border: 1px solid #ddd; padding: 8px; font-size: 0.9rem; text-align: center;">${i + 1}</td>
        <td style="border: 1px solid #ddd; padding: 8px; font-size: 0.9rem; text-align: center; color: ${result.color};">${result.word}</td>
        <td style="border: 1px solid #ddd; padding: 8px; font-size: 0.9rem; text-align: center;">${result.responseTime}</td>
        <td style="border: 1px solid #ddd; padding: 8px; font-size: 0.9rem; text-align: center;">${result.correct ? "✔️" : "❌"}</td>
      `;
      resultsTableBody.appendChild(row);
    });
  
    const restartButton = document.createElement("button");
    restartButton.innerText = "Tela Inicial";
    restartButton.style.display = "block";
    restartButton.style.margin = "20px auto";
    restartButton.style.padding = "10px 15px";
    restartButton.style.fontSize = "18px";
    restartButton.style.border = "none";
    restartButton.style.background = "#6FA3EF";
    restartButton.style.color = "white";
    restartButton.style.borderRadius = "5px";
    restartButton.style.cursor = "pointer";
    restartButton.onclick = () => {
      location.reload();
    };
  
    testContainer.appendChild(restartButton);
  }

  await showTimer();
  await showNextWord();
}