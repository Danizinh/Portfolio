// Definindo as palavras e suas frequências
const words = [
  { text: "HTML", size: 40 },
  { text: "CSS", size: 40 },
  { text: "JavaScript", size: 30 },
  { text: "Bootstrap", size: 30 },
  { text: "Python", size: 40 },
  { text: "PHP", size: 30 },
  { text: "POO", size: 30 },
  { text: "MVC", size: 30 },
  { text: "SQL", size: 40 },
  { text: "MYSQL", size: 30 },
  { text: " PostgreSQL", size: 35 },
  { text: "SQLite", size: 30 },
  { text: "SQL Server", size: 30 },
  { text: "Pandas", size: 40 },
  { text: "Numpy", size: 30 },
  { text: "Matplotlib", size: 30 },
  { text: "Scikit-Learn", size: 15 },
  { text: "Seaborn", size: 25 },
  { text: "GitHub", size: 20 },
  { text: "Git", size: 20 },
  { text: "GenAI", size: 30 },
  { text: "KNN", size: 30 },
  { text: "SVN", size: 30 },
  { text: "Clusterização", size: 30 },
  { text: "Machine Learning", size: 30 },
  { text: "Jupyter notebook", size: 30 },
  { text: "Linear regression ", size: 30 },
];

// Definindo as dimensões da nuvem de palavras
const width = 500;
const height = 500;

// Criando a nuvem de palavras
const layout = d3.layout
  .cloud()
  .size([width, height])
  .words(words.map((d) => ({ text: d.text, size: d.size })))
  .padding(5)
  .rotate(() => ~~(Math.random() * 2) * 90)
  .font("Impact")
  .fontSize((d) => d.size)
  .on("end", draw);

// Iniciar a geração da nuvem de palavras
layout.start();

// Função para desenhar a nuvem de palavras
function draw(words) {
  d3.select("#word-cloud")
    .append("svg")
    .attr("width", layout.size()[0])
    .attr("height", layout.size()[1])
    .append("g")
    .attr(
      "transform",
      "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")"
    )
    .selectAll("text")
    .data(words)
    .enter()
    .append("text")
    .style("font-size", (d) => d.size + "px")
    .style("font-family", "Impact")
    .style("fill", (d, i) => d3.schemeCategory10[i % 10])
    .attr("text-anchor", "middle")
    .attr(
      "transform",
      (d) => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")"
    )
    .text((d) => d.text);
}
