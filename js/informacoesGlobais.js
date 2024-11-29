const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = dados.total_pessoas_conectadas / 1e9
    const pessoasNoMundo = dados.total_pessoas_mundo / 1e9
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) * 100).toFixed(2)

    const paragrafo = document.createElement("p")
    paragrafo.classList.add("graficos-container__texto")

    paragrafo.innerHTML = `Você sabia que o mundo tem <i>${pessoasNoMundo} bilhões</i> de pessoas e que aproximadamente <i>${pessoasConectadas} bilhões</i> estão conectados a alguma rede social e passam em média <i>${horas} horas</i> e <i>${minutos} minutos</i> conectados.<br>Isso significa que aproximadamente <i>${porcentagemConectada}%</i> das pessoas estão conectadas a alguma rede social.`

    const container = document.getElementById("graficos-container")
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()
