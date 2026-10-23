
const plantas = [
  {
    nome: "Manjericão",
    especie: "Ocimum basilicum",
    umidade: 65,
    status: "Saudável"
  },
  {
    nome: "Tomate",
    especie: "Solanum lycopersicum",
    umidade: 28,
    status: "Precisa de água"
  },
  {
    nome: "Alecrim",
    especie: "Salvia rosmarinus",
    umidade: 52,
    status: "Saudável"
  }
];

const secaoPlantas = document.querySelector(".plantas");

function mostrarPlantas() {
  secaoPlantas.innerHTML = `
    <h2 id="lista-plantas">Minhas plantas</h2>
    <div class="lista-plantas">
      ${plantas.map(planta => `
        <article class="planta">
          <h3>${planta.nome}</h3>
          <p>Espécie: ${planta.especie}</p>
          <p>Umidade do solo: ${planta.umidade}%</p>
          <p>Status: ${planta.status}</p>
        </article>
      `).join("")}
    </div>
  `;
}

mostrarPlantas();
