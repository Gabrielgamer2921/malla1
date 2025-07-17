// script.js
const bios = {
  mat1: "Matemática I: Introducción a conceptos básicos de álgebra y análisis.",
  fis1: "Física I: Fundamentos de mecánica clásica y movimiento.",
  progra1: "Programación I: Algoritmos básicos y estructuras de datos."
};

const correlativas = {
  mat1: ["fis1"],
  fis1: ["progra1"]
};

const buttons = document.querySelectorAll(".materia");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("bloqueada")) return;

    const id = btn.getAttribute("data-id");
    document.getElementById("bio").innerText = bios[id];

    if (correlativas[id]) {
      correlativas[id].forEach(nextId => {
        const nextBtn = document.querySelector(`.materia[data-id='${nextId}']`);
        if (nextBtn) {
          nextBtn.classList.remove("bloqueada");
        }
      });
    }
  });
});

