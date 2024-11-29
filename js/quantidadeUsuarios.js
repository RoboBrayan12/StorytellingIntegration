// import { getCSS, tickConfig } from "./common.js"

const getCSS = (variavel) => {
    const bodyStyles = getComputedStyle(document.body)
    return bodyStyles.getPropertyValue(variavel)
}

const tickConfig = {
    family: getCSS("--font"),
    size: 16,
    color: getCSS("--primary-color"),
}

async function quantidadeUsuariosPorRede() {
    const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"
    const res = await fetch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: "bar",
            marker: {
                color: getCSS("--primary-color"),
            },
        },
    ]

    const laytout = {
        plot_bgcolor: getCSS("--bg-color"),
        paper_bgcolor: getCSS("--bg-color"),
        title: {
            text: "Redes sociais com mais usuários",
            x: 0,
            font: {
                color: getCSS("--primary-color"),
                size: 30,
                font: getCSS("--font"),
            },
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: "Nome das redes",
                font: {
                    color: getCSS("--secondary-color"),
                },
            },
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: "Bilhões de usuários ativos",
                font: {
                    color: getCSS("--secondary-color"),
                },
            },
        },
    }

    const grafico = document.createElement("div")
    grafico.className = "grafico"
    document.getElementById("graficos-container").appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
}

quantidadeUsuariosPorRede()
