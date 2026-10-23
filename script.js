
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

function mostrarPlantas(lista = plantas) {
  secaoPlantas.innerHTML = `
    <h2 id="lista-plantas">Minhas plantas</h2>

    <div class="controles">
      <label for="busca">Buscar planta pelo nome</label>
      <input
        type="search"
        id="busca"
        placeholder="Ex.: Tomate"
      >

      <label for="filtro">Filtrar plantas</label>
      <select id="filtro">
        <option value="todas">Todas as plantas</option>
        <option value="agua">Precisam de água</option>
        <option value="saudaveis">Saudáveis</option>
      </select>
    </div>

    <div class="lista-plantas" aria-live="polite">
      ${lista.map(planta => `
        <article class="planta">
          <h3>${planta.nome}</h3>
          <p>Espécie: ${planta.especie}</p>
          <p>Umidade do solo: ${planta.umidade}%</p>
          <p>Status: ${planta.status}</p>
        </article>
      `).join("")}
    </div>

    <p id="mensagem-vazia" ${lista.length ? "hidden" : ""}>
      Nenhuma planta encontrada.
    </p>
  `;

  document.querySelector("#busca").addEventListener("input", filtrarPlantas);
  document.querySelector("#filtro").addEventListener("change", filtrarPlantas);
}

function filtrarPlantas() {
  const termo = document.querySelector("#busca").value
    .trim()
    .toLowerCase();

  const filtro = document.querySelector("#filtro").value;

  const resultado = plantas.filter(planta => {
    const nomeCorresponde = planta.nome.toLowerCase().includes(termo);

    const statusCorresponde =
      filtro === "todas" ||
      (filtro === "agua" && planta.umidade < 35) ||
      (filtro === "saudaveis" && planta.umidade >= 35);

    return nomeCorresponde && statusCorresponde;
  });

  const lista = document.querySelector(".lista-plantas");
  lista.innerHTML = resultado.map(planta => `
    <article class="planta">
      <h3>${planta.nome}</h3>
      <p>Espécie: ${planta.especie}</p>
      <p>Umidade do solo: ${planta.umidade}%</p>
      <p>Status: ${planta.status}</p>
    </article>
  `).join("");

  document.querySelector("#mensagem-vazia").hidden = resultado.length > 0;
}

mostrarPlantas();

.controles {
  display: grid;
  gap: 8px;
  margin-bottom: 20px;
}

.controles input,
.controles select {
  width: 100%;
  padding: 12px;
  border: 1px solid var(--borda);
  border-radius: 8px;
  font: inherit;
  background: white;
}

.controles input:focus,
.controles select:focus {
  outline: 2px solid var(--verde);
  outline-offset: 2px;
}

.planta p {
  overflow-wrap: anywhere;
}

[hidden] {
  display: none !important;
}

