viewof view1 = embed({
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Capacidade hídrica do açude de Farinha na cidade de Patos-PB",
  "data": {
    "url": "https://raw.githubusercontent.com/danielmarquesvg/vegaliteDatabases/main/Volume_acude_farinha_patosPB.csv",
    "format": {
      "type": "csv",
      "parse": {
        "DataDoRegistro": "utc:'%d/%m/%Y'"
      }
    }
  },
  "width": 500,
  "height": 200,
  "mark": "line",
  "encoding": {
    "y": {
      "field": "VolumePercentual",
      "type": "quantitative",
      "axis": {"title": "Volume do açude (%)"}
    },
    "x": {
      "field": "DataDoRegistro",
      "type": "temporal",
      "axis": {"title": "Ano"}
    }
  }
})