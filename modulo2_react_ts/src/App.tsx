import Layout from "./components/Layout";
import Card from "./components/Card";

export default function App() {
  return (<>

    <Layout>
      <Card
        title="A Jornada"
        paragraph="Descubra os desafios e vitórias de uma viagem inesquecível."
        author="João Silva"
      />

      <Card
        title="Tecnologia Hoje"
        paragraph="Como a inovação está transformando nossas vidas diárias."
        author="Ana Pereira"
      />

      <Card
        title="Vida Saudável"
        paragraph="Dicas práticas para melhorar seu bem-estar físico e mental."
        author="Carlos Lima"
      />
    </Layout>

  </>);
}