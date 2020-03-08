import { Column } from "@antv/g2plot";
import { DataSet } from "@antv/data-set";
fetch(
  "https://raw.githubusercontent.com/pengx12/dvtry1/master/src/whc-sites-2019.csv"
)
  .then(res => res.text())
  .then(data => {
    const csvdata = new DataSet.View().source(data, {
      type: "csv"
    }).rows;

    console.log(csvdata);
    const columnPlot = new Column(document.getElementById("container"), {
      title: {
        visible: true,
        text: "基础柱状图"
      },
      forceFit: true,
      csvdata,
      padding: "auto",
      xField: "name_en",
      yField: "C2",
      meta: {
        type: {
          alias: "类别"
        },
        sales: {
          alias: "销售额(万)"
        }
      }
    });
    columnPlot.render();
  });
