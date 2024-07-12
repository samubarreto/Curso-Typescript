interface ICard {
  title: string,
  paragraph: string,
  author: string
} // interface serve pra definir os tipos das propriedades recebidas pelo componente

export default function Card({ title, paragraph, author} : ICard) {
  return (<>
  
    <div>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <p>{author}</p>
    </div>
  
  </>)
}