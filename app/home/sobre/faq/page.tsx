const PERGUNTAS = [
  {
    pergunta: "O que é Discobak?",
    resposta:
      "Se estiver referindo ao nome, Disco vem de Discar um número e BAK é Beyond all Knowledge.",
  },
];

export default function Faq() {
  return (
    <div className="faq">
      {PERGUNTAS.map((p) => (
        <div key={p.pergunta} className="faq-card">
          <h2>{p.pergunta}</h2>
          <p>{p.resposta}</p>
        </div>
      ))}
    </div>
  );
}
