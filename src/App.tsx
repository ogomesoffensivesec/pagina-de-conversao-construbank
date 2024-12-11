import { Button } from "./components/ui/button";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "./components/ui/card";
import { AvatarCircles } from "./components/interface/avatar.circles";
import FlickeringGrid from "./components/ui/flickering-grid";
import { VelocityScroll } from "./components/ui/scroll-based-velocity";
import WhatsAppIcon from "./components/icons/whatsapp";
import { Widget } from '@typeform/embed-react'

const faqItems = [
  {
    question: "Como funciona a antecipação de recebíveis?",
    answer: "Você nos envia suas duplicatas ou cheques, analisamos e antecipamos o valor com uma taxa justa, dando a você liquidez imediata."
  },
  {
    question: "Quem pode solicitar a antecipação?",
    answer: "Pequenas, médias e grandes empresas da região de Atibaia/SP que possuam recebíveis futuros podem solicitar."
  },
  {
    question: "Quais são as taxas?",
    answer: "As taxas variam entre 3,89% a 8%, dependendo do volume, prazo e histórico da empresa. Faça sua análise para saber mais."
  },
  {
    question: "Quanto tempo leva a análise?",
    answer: "Geralmente em até 24h você terá uma resposta. O dinheiro pode estar disponível em poucos dias."
  }
]

const avatarUrls = [
  {
    profileUrl: "https://avatar.iran.liara.run/username?username=JoãoSilva",
    imageUrl: "https://avatar.iran.liara.run/username?username=JoãoSilva",
  },
  {
    profileUrl: "https://avatar.iran.liara.run/username?username=AnaMaria",
    imageUrl: "https://avatar.iran.liara.run/username?username=AnaMaria",
  },
  {
    profileUrl: "https://avatar.iran.liara.run/username?username=CarlosRocha",
    imageUrl: "https://avatar.iran.liara.run/username?username=CarlosRocha",
  },
  {
    profileUrl: "https://avatar.iran.liara.run/username?username=LucasSantos",
    imageUrl: "https://avatar.iran.liara.run/username?username=LucasSantos",
  },
  {
    profileUrl: "https://avatar.iran.liara.run/username?username=GabrielaFernandes",
    imageUrl: "https://avatar.iran.liara.run/username?username=GabrielaFernandes",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 to-indigo-900 text-white font-sans overflow-y-auto scroll-smooth relative">
      {/* ALERTA */}
      <section className="bg-red-600 text-white text-center py-2 px-4">
        <span className="text-sm font-medium">
          Atenção: Taxas Promocionais Limitadas Até o Final do Mês!
        </span>
      </section>

      <div className="mx-auto py-8 px-4 max-w-screen-xl">
        {/* HEADLINE */}
        <section className="my-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
            Antecipe seus recebíveis com as melhores taxas
          </h1>
          <h2 className="text-lg md:text-2xl text-indigo-400 font-semibold mt-4 max-w-3xl mx-auto">
            Transforme cheques e duplicatas em capital de giro rápido e seguro, com taxas entre 3,89% a 8%.
          </h2>
        </section>

        {/* IMAGEM PERSUASIVA INICIAL */}
        <div className="w-full flex justify-center mb-12 relative items-center overflow-hidden">
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center z-0">
              <FlickeringGrid
                squareSize={4}
                gridGap={6}
                color="#60A5FA"
                maxOpacity={0.5}
                flickerChance={0.1}
                height={800}
                width={800}
                className="[mask-image:radial-gradient(450px_circle_at_center,white,transparent)] rounded-full opacity-25"
              />
            </div>
            <img
              src="src/assets/img/empresario_feliz.png"
              alt="Empresário contente com fluxo de caixa organizado"
              className="relative z-10 max-w-full h-auto"
            />
          </div>
        </div>

        {/* EMOÇÃO */}
        <section className="mb-12 px-4 leading-normal">
          <p className="text-md font-medium mb-2 max-w-3xl mx-auto text-center">
            Imagine nunca mais sofrer com fluxo de caixa apertado. Cresça com tranquilidade,
            sem depender de burocracias bancárias e atrasos. A Construbank Brasil te ajuda a sair dessa
            montanha-russa financeira, garantindo previsibilidade e controle sobre seu capital.
          </p>
          <p className="text-sm text-white/70 max-w-xl mx-auto text-center mt-8">
            Invista, cresça e aproveite oportunidades sem esperar pelos pagamentos futuros.
          </p>
        </section>

        {/* LÓGICA */}
        <section className="py-16 rounded-lg text-center mb-12 px-4">
          <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-wide">Como Funciona?</h3>
          <div className="mt-4 w-full flex justify-center">
            <img
              src="src/assets/img/steps.png"
              alt="Infográfico mostrando o processo de antecipação de recebíveis"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </section>

        <section className="py-4 mb-24 px-4">
          <VelocityScroll
            text="GARANTA SEU FLUXO DE CAIXA PARA O FINAL DO ANO"
            default_velocity={2}
            className="text-center text-4xl font-bold tracking-[-0.02em] bg-gradient-to-r from-indigo-600 to-white text-transparent bg-clip-text drop-shadow-sm dark:text-white md:text-6xl md:leading-[5rem]"
          />
        </section>

        {/* CHAMADA EXTRA E CTA */}
        <section className="my-24 text-center px-4">
          <h4 className="text-3xl md:text-5xl font-bold">Garanta seu Capital de Giro Agora</h4>
          <p className="text-md mb-4 max-w-md mx-auto text-muted-foreground">
            Antecipe seus recebíveis e tenha o poder financeiro para investir quando precisar.
          </p>
          <Button className="uppercase text-lg mb-14 mt-4 h-14 w-full sm:w-[350px] bg-transparent shadow-none duration-500 transition-all hover:bg-zinc-950/25 tracking-wide">
            Quero Uma Análise Gratuita
          </Button>
        </section>

        {/* FORMULÁRIO DE CONVERSÃO */}
        <section className="container mx-auto flex flex-col md:flex-row items-start justify-between my-12 gap-8 px-4">
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Receba Sua Proposta Personalizada</h3>
            <p className="text-md text-muted max-w-md">
              Preencha o formulário e nossa equipe entrará em contato rapidamente.
              Sem compromisso, sem burocracia, apenas soluções para o seu fluxo de caixa.
            </p>

            {/* Selo de segurança */}
            <div className="mt-4 flex flex-col md:flex-row items-center gap-4 pt-14">
              <img
                src="src/assets/img/secure.png"
                alt="Selo de segurança e confidencialidade"
                className="max-w-[150px] h-auto"
              />
              <span className="text-2xl md:text-6xl text-white font-bold text-center md:text-left">Seus dados são 100% confidenciais</span>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <Card className="bg-transparent border-none shadow-none text-white">
              <CardHeader>
                <h4 className="text-2xl font-bold">Quero Minha Proposta</h4>
                <p className="text-sm text-white/60">Receba uma análise rápida e sem custos.</p>
              </CardHeader>
              <CardContent >
              <Widget id="G2RdDfEG" height={500} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* RACIONAL */}
        <section className="p-8 rounded-lg text-center my-12 px-4">
          <h3 className="text-3xl font-bold mb-6 uppercase">Por que Construbank Brasil?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-12 text-white">
            <div>
              <span className="text-3xl font-extrabold">+R$ 360mi</span>
              <p className="text-sm">Em operações realizadas</p>
            </div>
            <div>
              <span className="text-3xl font-extrabold">+50</span>
              <p className="text-sm">Clientes satisfeitos</p>
            </div>
            <div>
              <span className="text-3xl font-extrabold">+15 anos</span>
              <p className="text-sm">De experiência no mercado</p>
            </div>
          </div>

          <div className="mt-8 max-w-xl mx-auto px-4">
            <blockquote className="italic text-sm">
              "A Construbank Brasil nos ajudou a ter o capital necessário para investir em novas máquinas
              sem esperar meses pelo pagamento de clientes."
            </blockquote>
          </div>

          <div className="mt-4 flex justify-center">
            <AvatarCircles avatarUrls={avatarUrls} />
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24 px-4">
          <div className="container mx-auto px-0 py-8 max-w-screen-xl">
            <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((item, index) => (
                <Card key={index} className="h-full bg-transparent text-white flex justify-start items-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                    <CardDescription>
                      <p className="text-white/80">{item.answer}</p>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

      </div>

      <footer className="bg-[#001E3D] text-white text-sm py-4 px-4">
        <div className="container mx-auto px-0 flex flex-col md:flex-row items-center justify-between">
          <span>© {new Date().getFullYear()} Construbank Brasil - Todos os direitos reservados.</span>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-[#00A8E8]">Termos de Uso</a>
            <a href="#" className="hover:text-[#00A8E8]">Política de Privacidade</a>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante do WhatsApp */}
      <a
        href="https://wa.me/551147099654?text=Ol%C3%A1,%20vim%20atr%C3%A1ves%20da%20campanha%20de%20an%C3%BAncios%20do%20site.%20Gostaria%20de%20entender%20como%20funciona%20a%20antecipa%C3%A7%C3%A3o%20de%20receb%C3%ADveis"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      >
        <WhatsAppIcon />
      </a>
    </main>
  );
}
