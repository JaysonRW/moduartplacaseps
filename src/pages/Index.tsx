
import { useState } from "react";
import { ArrowDown, ArrowUp, FileText, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const Index = () => {
  const [heroForm, setHeroForm] = useState({
    nome: "",
    empresa: "",
    projeto: "",
    contato: ""
  });

  const [mainForm, setMainForm] = useState({
    nomeCompleto: "",
    empresa: "",
    tipoProjeto: "",
    email: "",
    telefone: ""
  });

  const handleWhatsAppRedirect = (formData: any, isHero = false) => {
    const { nome, nomeCompleto, empresa, projeto, tipoProjeto, contato, email, telefone } = formData;
    
    let message = `Olá! Gostaria de solicitar informações sobre placas de EPS para construção.\n\n`;
    message += `Nome: ${isHero ? nome : nomeCompleto}\n`;
    if (empresa) message += `Empresa: ${empresa}\n`;
    message += `Tipo de Projeto: ${isHero ? projeto : tipoProjeto}\n`;
    if (!isHero) {
      message += `E-mail: ${email}\n`;
      message += `Telefone: ${telefone}\n`;
    } else {
      message += `Contato: ${contato}\n`;
    }
    message += `\nAguardo retorno para orçamento.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/5541998118203?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
    toast.success("Redirecionando para WhatsApp...");
  };

  const handleHeroSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!heroForm.nome || !heroForm.projeto || !heroForm.contato) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    handleWhatsAppRedirect(heroForm, true);
  };

  const handleMainSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mainForm.nomeCompleto || !mainForm.tipoProjeto || !mainForm.email || !mainForm.telefone) {
      toast.error("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    handleWhatsAppRedirect(mainForm, false);
  };

  const projectImages = [
    {
      src: "/lovable-uploads/476123ee-1841-47f4-b5c2-41f4efe0ef79.png",
      title: "Obra Comercial - Fase Estrutural",
      description: "Construção com placas de EPS Moduart demonstrando a facilidade de montagem e precisão dimensional."
    },
    {
      src: "/lovable-uploads/37c9bdf6-15ef-45d9-9f8c-3f15c1d875b5.png",
      title: "Construção Residencial - Paredes Prontas",
      description: "Residência construída com placas EPS Moduart, oferecendo isolamento térmico superior e rapidez na execução."
    },
    {
      src: "/lovable-uploads/8d8ab08b-b7d6-4ef9-b3e6-41b9da59566e.png",
      title: "Projeto Industrial - Sistema Modular",
      description: "Sistema construtivo modular com placas EPS, permitindo construção rápida e eficiente."
    },
    {
      src: "/lovable-uploads/be2e0716-e08f-4166-b23f-457349a8a5fc.png",
      title: "Construção Residencial Avançada",
      description: "Casa construída com tecnologia EPS Moduart, mostrando a qualidade do acabamento final."
    },
    {
      src: "/lovable-uploads/cfcf0588-0c43-483e-83dc-d8501b8776be.png",
      title: "Ambiente Interno - Detalhes Construtivos",
      description: "Interior da construção evidenciando a precisão e qualidade das placas EPS Moduart."
    },
    {
      src: "/lovable-uploads/41fc5186-5622-48dc-8a88-050295618a4d.png",
      title: "Acabamento Interno Profissional",
      description: "Ambiente interno finalizado demonstrando a versatilidade e qualidade das placas EPS."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Placas de EPS para Construção: 
                  <span className="text-blue-300"> A Base de Confiança</span> para Sua Obra
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  A Moduart fornece soluções estruturais em EPS com excelência e tecnologia 
                  para construtores e a indústria da construção civil.
                </p>
              </div>

              {/* Hero Form */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Solicite Orçamento Direto</h3>
                  <form onSubmit={handleHeroSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Seu nome*"
                        value={heroForm.nome}
                        onChange={(e) => setHeroForm({...heroForm, nome: e.target.value})}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Nome da empresa (opcional)"
                        value={heroForm.empresa}
                        onChange={(e) => setHeroForm({...heroForm, empresa: e.target.value})}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Tipo de projeto*"
                        value={heroForm.projeto}
                        onChange={(e) => setHeroForm({...heroForm, projeto: e.target.value})}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Email ou telefone*"
                        value={heroForm.contato}
                        onChange={(e) => setHeroForm({...heroForm, contato: e.target.value})}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3">
                      Fale com Nosso Time Comercial
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-lg shadow-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/81e54642-3102-4b22-82e9-a75b83aefb05.png" 
                  alt="Placas de EPS Moduart - Qualidade e Tecnologia para Construção"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <p className="text-lg font-semibold">Placas de EPS Moduart</p>
                    <p className="text-sm text-white/90">Qualidade e Robustez para sua Obra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Moduart: Qualidade e Tecnologia que Você Constrói
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowUp className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Produtos Exclusivos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Garantia de insumos superiores para sua edificação com acesso a produtos exclusivos e de alta qualidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowDown className="text-green-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Peças Extrusadas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Precisão dimensional que otimiza sua montagem e acabamento com tecnologia avançada de extrusão.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="text-orange-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Recobrimento 2,5mm</h3>
                <p className="text-gray-600 leading-relaxed">
                  Resistência, durabilidade e beleza incomparáveis com recobrimento em micro concreto de 2,5mm.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowUp className="text-purple-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">EPS Tipo 3</h3>
                <p className="text-gray-600 leading-relaxed">
                  Padrão de qualidade que oferece leveza, isolamento térmico e acústico superior com densidade EPS tipo 3.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ArrowDown className="text-red-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Fabricação Rápida</h3>
                <p className="text-gray-600 leading-relaxed">
                  Agilidade na sua cadeia de suprimentos, garantindo o ritmo da sua obra com fabricação em tempo reduzido.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="text-indigo-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Durabilidade</h3>
                <p className="text-gray-600 leading-relaxed">
                  Um investimento em longevidade para qualquer projeto com materiais de alta durabilidade e resistência.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Conheça nossos padrões de fabricação
            </Button>
          </div>
        </div>
      </section>

      {/* Parceria Section */}
      <section className="py-20 px-4 bg-blue-900 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Parceria Moduart: Seu Suporte em Cada Etapa
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Phone className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-semibold">Suporte Especializado</h3>
              <p className="text-blue-100 leading-relaxed">
                Nossa equipe de engenheiros e consultores ao seu lado, do planejamento à entrega.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <Mail className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-semibold">Condições Especiais</h3>
              <p className="text-blue-100 leading-relaxed">
                Flexibilidade para otimizar seu fluxo de caixa e garantir o cronograma da sua obra.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                <FileText className="text-white" size={40} />
              </div>
              <h3 className="text-2xl font-semibold">Sustentabilidade</h3>
              <p className="text-blue-100 leading-relaxed">
                Redução de resíduos no canteiro de obras e sustentabilidade em sua construção.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Inspire-se: Construções de Sucesso com Placas de EPS Moduart
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projectImages.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.src} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Depoimentos */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 italic mb-4">
                  "As placas de EPS da Moduart revolucionaram nossos projetos. A qualidade é excepcional e a rapidez na entrega nos permite cumprir prazos apertados."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-semibold">JC</span>
                  </div>
                  <div>
                    <p className="font-semibold">João Carlos Silva</p>
                    <p className="text-sm text-gray-500">Construções Silva & Cia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <p className="text-gray-600 italic mb-4">
                  "O suporte técnico da Moduart é incomparável. Eles nos acompanham em cada etapa do projeto, garantindo o melhor resultado."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-semibold">MF</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maria Fernanda Costa</p>
                    <p className="text-sm text-gray-500">Arquiteta</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Pronto para Impulsionar Sua Obra? Fale Conosco!
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto"></div>
          </div>

          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleMainSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="nomeCompleto">Nome Completo *</Label>
                    <Input
                      id="nomeCompleto"
                      value={mainForm.nomeCompleto}
                      onChange={(e) => setMainForm({...mainForm, nomeCompleto: e.target.value})}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="empresa">Nome da Empresa</Label>
                    <Input
                      id="empresa"
                      value={mainForm.empresa}
                      onChange={(e) => setMainForm({...mainForm, empresa: e.target.value})}
                      placeholder="Opcional"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tipoProjeto">Tipo de Projeto *</Label>
                  <Select value={mainForm.tipoProjeto} onValueChange={(value) => setMainForm({...mainForm, tipoProjeto: value})}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione o tipo de projeto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residencial">Residencial</SelectItem>
                      <SelectItem value="comercial">Comercial</SelectItem>
                      <SelectItem value="industrial">Industrial</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={mainForm.email}
                      onChange={(e) => setMainForm({...mainForm, email: e.target.value})}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefone">Telefone (com WhatsApp) *</Label>
                    <Input
                      id="telefone"
                      value={mainForm.telefone}
                      onChange={(e) => setMainForm({...mainForm, telefone: e.target.value})}
                      placeholder="(41) 99999-9999"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 text-lg">
                  Enviar Solicitação via WhatsApp
                </Button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Prefere ligar? Fale com nossa equipe:</p>
                <div className="flex justify-center space-x-6">
                  <a href="tel:+5541998118203" className="text-blue-600 hover:text-blue-800 font-semibold">
                    (41) 99811-8203
                  </a>
                  <span className="text-gray-400">|</span>
                  <a href="tel:+5541999728097" className="text-blue-600 hover:text-blue-800 font-semibold">
                    (41) 99972-8097
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Moduart</h3>
              <p className="text-gray-400 leading-relaxed">
                Especialistas em placas de EPS para construção civil. 
                Qualidade, tecnologia e suporte especializado para sua obra.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>(41) 99811-8203</p>
                <p>(41) 99972-8097</p>
                <p>contato@moduart.com.br</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Moduart. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
