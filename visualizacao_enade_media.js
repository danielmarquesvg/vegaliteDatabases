viewof viewEnadeMedia = embed({
  "$schema" : "https://vega.github.io/schema/vega-lite/v4.json",
  "data": {
    "url": "https://raw.githubusercontent.com/danielmarquesvg/enadata/master/enade2018/dados/media_enade.csv",
    "format": {"type": "csv"}
  },
  "title": "Média da nota geral dos estudantes de acordo com o tipo de instituição",
  "width": 400,
  "height": 200,
  "transform": [
    {
      "calculate": "if((datum.categoria === 'amostra_geral'),'Amostra Geral',datum.novaColuna)",
      "as": "novaColuna"
    },
    {
      "calculate": "if((datum.categoria === 'ies_publicas'),'IES Públicas',datum.novaColuna)",
      "as": "novaColuna"
    },
    {
      "calculate": "if((datum.categoria === 'ies_privadas'),'IES Privadas',datum.novaColuna)",
      "as": "novaColuna"
    }
  ],
  "mark":"bar",
  "encoding": {
    "y": {
      "axis": {
        "title": "Média da nota geral",
        "labelFontSize": 12,
        "titleFontSize": 12
      },
      "field": "media",
      "type": "quantitative"
    },
    "x": {
      "axis": {
        "labelAngle": 0,
        "labelFontSize": 12,
        "titleFontSize": 12,
        "title": null
      },
      "field":"novaColuna"
    }
  }
})