viewof view3 = embed({
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Artigos publicados na área de ciência da computação de acordo com o gênero e sendo o principal autor do artigo",
  "data": {"url": "https://raw.githubusercontent.com/danielmarquesvg/vegaliteDatabases/main/mendeleyfull.csv"},
   "transform": [
    {"filter": "datum.position == 0"},
    {"filter": {"field": "gender", "oneOf": ["F", "M"]}},
    {"filter": "datum.cs == 1"}
  ],
  "width": 20,
  "height": 300,
  "mark": "bar",
  "selection": {
    "sel_gender": {
      "type": "single",
      "on": "mouseover",
      "fields": ["gender"]
    }
  },
  "encoding": {
    "column": {
      "field": "year",
      "type": "ordinal",
      "axis": {"title": "ano"}
    },
    "y": {
        "aggregate": "count",
        "field": "paper_key",
        "type": "quantitative", 
        "axis": {"title": "Quantidade de artigos publicados", "grid": false}
   },
    "x": {
      "field": "gender", "type": "nominal",
      "scale": {"rangeStep": 5},
      "axis": {"title": ""}
    },
    "color": {
      "condition": {
        "selection": "sel_gender",
        "field": "gender",
        "type": "nominal",
        "scale": {
          "domain": ["F", "M"],
          "scheme": "set1"
        },
        "legend": {
          "title": "Gênero"
        }
      },
       "value": "#EFEFEF"

    }
  },
   "config": {
    "view": {"stroke": "transparent"},
    "axis": {"domainWidth": 1}
  }
}
)