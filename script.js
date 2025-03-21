// t1 Esquizoide
// t2 Esquizotípico 
// t3 Paranoide
// t4 Borderline
// t5 Histriônico
// t6 Narcisista
// t7 Anti-social
// t8 Obsessivo-compulsivo
// t9 Dependente
// t10 Evitativo
// 🔹 Mapeamento de transtornos para arquétipos 🔹

// 🔹 Mapeamento de transtornos para os 36 arquétipos 🔹
const archetypes = [
    { // 1
      name: "O Estrangeiro",
      match: ["t1"],
      description: "O Estrangeiro constrói sua identidade a partir do distanciamento; não mede seu valor pela aprovação externa e raramente se percebe como um de nós. Sua autoestima é silenciosa e autossuficiente: se a imagem que faz de si é validada ou não, é irrelevante. Evita impulsos, riscos ou escolhas guiadas por desejos passageiros, pois prefere a previsibilidade e o controle. A intimidade não o atrai. Tolera interações sociais quando inevitáveis, mas raramente se envolve ou cria vínculos profundos. Seu estilo de comunicação é contido, conciso e prático. Fala pouco, raramente expressa opiniões pessoais e evita envolver-se em debates. Emoções intensas ou reações inesperadas quase nunca emergem — ele se mantém previsível, distante e indiferente."
    },
    { // 2
      name: "O Estrategista",
      match: ["t1", "t8"],
      description: "A figura da competência e da autonomia intelectual. Não se vê como alguém emocional ou social, e sim como correto, preciso e imune ao caos externo. Extremamente racional e deliberado, evita riscos e decisões precipitadas. É simples: pondera e escolhe o caminho mais seguro e técnico. Mantém interações mínimas, funcionais e geralmente formais. A proximidade emocional o desgasta, e ele entende que relacionamentos são complexos, imprevisíveis e, muitas vezes, desnecessários. Raramente confronta ou impõe opiniões, mas provavelmente será inflexível quando julgar estar certo. Adota uma postura reservada e altamente funcional em grupos; cumpre normas mais para evitar conflitos ou desordem do que por necessidade de pertencer. Rejeita papéis que exijam carisma ou habilidades sociais e prefere ser o técnico, o planejador, o executor eficiente e invisível."
    },
    { // 3
        name: "O Viajante",
        match: ["t1", "t2"],
        description: "Um personagem à parte do mundo, excêntrico e autossuficiente. Sua autoestima não depende da aceitação dos outros, mas de ser fiel à própria visão de mundo — por mais incompreensível que ela pareça ser. Sua identidade é original, autêntica e distante. Comunica-se com associações de ideias incomuns, fala pouco e de forma elíptica ou abstrata. Evita impulsos, situações de escolha pública ou rápida e age com extrema cautela. Não precisa de ajuda para tomar decisões — escolhe por si mesmo, guiado por um senso bastante particular de lógica. Recusa-se a participar de dinâmicas de poder e, definitivamente, não ambiciona controle sobre ninguém. Mudanças externas são vistas com desconfiança, mas ele está aberto e tem grande fascínio por conceitos incomuns ou teorias alternativas, desde que sejam condizentes com seu mundo interior."
      },
      { // 4
        name: "O Magistrado",
        match: ["t3", "t8"],
        description: "A representação da manutenção da ordem, das regras e da lógica. Orgulha-se da própria vigilância e do senso de justiça. Extremamente cauteloso, decide com base em riscos e consequências. Não há glória nem piedade — apenas o compromisso com a precisão e o horror ao improviso. Preservar tudo isso se torna sua responsabilidade, mas não ama o poder — desconfia dele, como de todas as coisas (e amar o que quer que seja já é, em si, um exagero). Relaciona-se com reserva e suspeita, mesmo com os mais próximos, e permeia suas interações com testes silenciosos de lealdade e consistência moral. Direto, formal e interrogativo, exige clareza e detesta respostas vagas. É assertivo ao defender regras, fatos ou princípios que considera inegociáveis. Há pouco espaço para humor ou informalidades, e acredita que o mundo será mais suportável quando a culpa for distribuída, a pena calculada e todas as coisas colocadas em um sistema lógico e seguro."
      },
      { // 5
        name: "O Sentinela",
        match: ["t1", "t3"],
        description: "A imagem da sobrevivência no isolamento, da autossuficiência, da frieza racional e da desconfiança. Acredita que manter distância das pessoas e de seus jogos duvidosos é sinal de lucidez e integridade. Relaciona-se com reserva — ou, às vezes, não se relaciona de jeito nenhum: vê quem se aproxima com desconfiança e, por isso, opta por mantê-los distantes (e sob observação). Irrita-se mais com a quebra de confiança do que com ataques diretos. Atua com cautela e resguardo, tem a inteligência de não se expor por pouco e sempre opta pelo planejamento à reação impulsiva. Domina com maestria a comunicação direta e objetiva, mantém o foco nos fatos e no que é útil. Evita posições de poder e influência direta sobre pessoas, pois prefere manter o controle sobre o próprio espaço. Assim, a liderança, quando ocorre, é pela vigilância e discrição — nunca pela autoridade formal."
      },
      { // 6
        name: "O Eremita",
        match: ["t1", "t10"],
        description: "Imerso nas próprias ideias, o Eremita escolhe distanciar-se do mundo por medo de ser ferido ou descoberto. Ele sabe, melhor que todos, que o mundo é um lugar ruidoso demais, com gestos largos demais e palavras que dizem muito pouco. Reside em sua fortaleza, incompreendido pelos desatentos, acima de expectativas e punições. Lá, pelo menos, as coisas têm outros nomes e outros pesos — e ele decide. Toda a perplexidade vem desse ‘não estar’, desse ‘o que poderia ter sido’, desse ‘o que será que ele pensa ali, tão silencioso?’. E quem é esse personagem? Como pode ser tão calmo, tão pacífico, tão experiente em seu admirável mundo previsível?"
      },
      { // 7
        name: "O Intérprete",
        match: ["t2", "t3"],
        description: "Atento e cauteloso, o Intérprete lê o mundo inteiro pelas entrelinhas. Está sempre alerta, em estado de suspeita constante. Observa, interpreta e exerce influência questionando certezas e expondo falhas de forma sutil e coordenada. Sob estresse, reforça o pensamento analítico para tentar antecipar riscos. A conclusão de sua análise raramente é óbvia — e certamente diferente do que uma mente menos engenhosa concluiria. A tomada de decisões reflete um mundo interno curioso e isolado; evita agir por impulso, e qualquer ação tem algum tipo de base — mesmo que os outros não vejam como isso possa fazer sentido."
      },
      { // 8
        name: "O Oráculo",
        match: ["t2"],
        description: "A figura da sabedoria enigmática, do afastamento social e da percepção fora do comum. Ele está à parte e observa de fora o fluxo social e emocional das pessoas. Sabe que seu saber é de outra ordem — intuitivo ou mágico. Vive um mundo interno pouco compartilhado, onde associa ideias, interpreta sinais e constrói conexões invisíveis. Valoriza o contato profundo, mas é raro que ele exista. De qualquer forma, as conexões superficiais o exaurem. Fala como quem traz verdades de outro lugar, mas não se impõe — acredite quem estiver pronto, e é isso. De resto, as convenções sociais lhe parecem incompreensíveis; e, na verdade, nem ele se interessa por elas. É uma pessoa fascinante, que sabe demais, pertence de menos, é pouco compreendido — e não se importa com nada disso. Quem o procura é porque sabe que ele guarda algo valioso — e são esses que valem a pena."
      },
      { // 9
        name: "O Imperador",
        match: ["t1", "t6"],
        description: "A imagem da autossuficiência, do distanciamento controlado e da autoestima baseada na independência. Sua comunicação é elegante, algo arrogante, e seus gestos são controlados. Entende a maioria das relações como triviais ou desgastantes e raramente traz os outros para dentro da cena — embora eles se mantenham como admiradores fiéis. Sob pressão, age de forma calculista e protege sua imagem evitando o confronto. Dificilmente admite vulnerabilidades e tem baixa tolerância à falha dos outros. Não tem explosões emocionais, mas o desprezo ou a indiferença transparecem com facilidade. Sua posição é de superioridade tácita, sem esforço aparente. Evita submeter-se ao que não acredita e não aceita ser liderado ou manipulado — bom, ninguém seria capaz de colocá-lo nesse lugar de qualquer forma."
      },
      { // 10
        name: "O Príncipe",
        match: ["t6", "t9"],
        description: "Uma figura digna de reconhecimento pelas habilidades, influência e capacidade de autoproteção. No entanto, tem uma necessidade constante de reafirmação externa. Com autoestima oscilante, torna-se frágil diante da indiferença. Decide guiado pela necessidade de preservar a autoimagem e garantir suporte externo. Quando confrontado com desafios, procura pessoas confiantes que reforcem seu valor ou ofereçam suporte. Tem uma comunicação assertiva, sabe ser carismático e envolvente, e tenta agradar para manter os outros por perto. Busca o poder indireto: seduz, manipula ou se alia para manter-se, sem assumir os riscos de liderar sozinho — pois não sabe como agir direito em contextos que exijam autonomia plena."
      },
      { // 11
        name: "O Incendiário",
        match: ["t4", "t5"],
        description: "Uma figura altamente impulsiva, o Incendiário decide com base em suas emoções e expectativas afetivas, mesmo que isso exija atitudes dramáticas ou arriscadas. Por isso, opta com frequência por escolhas insustentáveis a longo prazo. Encanta e seduz para manter os outros por perto. Não só ama e odeia com mais intensidade do que as pessoas comuns, como também muda de ideia facilmente sobre os outros. Em geral, os conflitos se tornam cenas nas quais ele atua ora como sedutor, ora como acusador, conforme se sinta acolhido ou rejeitado. Mas esse não é o único motivo de ser o centro das atenções: é também porque ele se importa de verdade, ama de verdade, sente de verdade — e a verdade sabe ser encantadora também. Tem uma alta abertura à experiência — e sabemos que assim nascem as mentes mais brilhantes (e indomáveis). Viver intensamente, mesmo que de forma instável, é mais natural para seu temperamento do que viver sob regras para manter a estabilidade."
      },
      { // 12
        name: "O Usurpador",
        match: ["t6", "t7"],
        description: "Há quem diga ser esse o arquétipo mais perigoso. Acima do bem e do mal, tem autoestima sólida, centrada em certas habilidades reconhecidamente extraordinárias e na crença — daí contraditória — de que merece mais: poder, status e liberdade. Não sente culpa por romper limites. Toma decisões rápidas e frias, mas pode ser impulsivo se houver vantagem clara ou oportunidade de controle. O cálculo é sempre sobre poder, controle e vitória. Por interesse ou tédio, aproxima-se com pouco ou nenhum apego real. Apesar de sedutor, mantém uma postura instrumental — a presença ou a ausência dos outros são apenas meios para seus fins. Assertividade intimidadora, pouca reatividade e rejeição a vulnerabilidades. Não pensa muito sobre o futuro e, muito menos, olha para trás."
      },
      { // 13
        name: "A Cortesã",
        match: ["t5", "t7"],
        description: "Este é o arquétipo do convencimento, do controle disfarçado de sedução. Por beleza, inteligência ou carisma — reais ou no imaginário comum — parece estar acima das limitações sociais. Fala o que pensa, não teme riscos e testa seu domínio sobre os ambientes. Sua alta abertura à experiência existe em função de um desprezo pelo tédio. Cria laços frágeis, mas é bem hábil para manter os outros por perto. Diante de desafios, dobra a aposta: pouco se abala e reage às novas circunstâncias de forma calculista, até ter, mais uma vez, o controle da narrativa. Naturalmente assertiva até a arrogância, dificilmente ignorável — porque ou a amam, ou a odeiam (qual é mais fácil, não há como dizer)."
      },
      { // 14
        name: "A Vertigem",
        match: ["t4"],
        description: "A Vertigem está à deriva entre extremos. Sua autoestima é instável e está sob pouco ou nenhum controle privado. Tudo nessa personagem é intenso, urgente, devastador. Sua altíssima abertura à experiência a torna uma pessoa criativa e envolvida em múltiplos projetos. A impulsividade é a regra, e relacionar-se é questão de sobrevivência. Teme o abandono, alterna entre o apego profundo e injustificado e rompimentos drásticos, sempre testando a solidez das relações. Nem o amor nem o ódio bastam — e nunca há paz. E, quando a perda vem (porque sempre vem, e para todos), ela implode — e logo renasce para tentar de novo. Para ela, parar de sentir seria a morte — ela precisa disso, precisa sentir o que seja, para saber que existe. Dito tudo isso, torna-se compreensível que quem esteja perto dela sinta vertigem: a sensação de que o mundo está por acabar e que não restará pedra sobre pedra."
      },
      { // 15
        name: "O Ilusionista",
        match: ["t7","t10"],
        description: "O Ilusionista é uma sombra à espreita. Inteligente, pragmático, solitário, calculista. Não ama, não confia, não se apega — nem se expõe também. Domina a arte de desaparecer, de existir sem ser percebido, de manipular (sem jamais se comprometer no meio do caminho). É leal à liberdade e à solidez do controle. Aproxima-se quando o risco é nulo e desaparece se há chance de ser visto de verdade. Vive das brechas e das fraquezas dos outros. E, quando ataca, ninguém sabe dizer de onde veio o golpe — só se percebe o estrago."
      },
      { // 16
        name: "O Maestro",
        match: ["t5","t6"],
        description: "O arquétipo da persuasão, do magnetismo interpessoal e da capacidade de cativar multidões. Vê o mundo como uma orquestra em harmonia: ele é o regente principal; seus seguidores, os músicos; e os demais, a plateia. Ele está ali, no centro do palco, onde tudo está sob seu controle. Não sabemos se deseja realmente conhecer os espectadores ou se tudo serve ao seu propósito de apropriar-se dos sentimentos, pensamentos e comportamentos deles. De qualquer forma, move-se atraindo todos os olhares — dominante, carismático, extremamente belo — e ninguém jamais se questionará se há alguém melhor para estar ali."
      },
      { // 17
        name: "O Cartógrafo",
        match: ["t5","t6"],
        description: "O Cartógrafo desenha o mundo, mede e delimita territórios como quer — arbitrariamente ou não. Representa o controle sobre o espaço, a vaidade técnica estruturada e o desejo de legado. Orgulha-se de seu perfeccionismo e controle emocional. Pelo rigor, mérito e excelência (ou talvez pela rigidez de valores), vai muito longe em seus objetivos. Pouco impulsivo, pondera o impacto de suas decisões na própria imagem e reputação. Relaciona-se de forma seletiva e hierárquica; tolera mal a informalidade forçada, cenários caóticos ou improvisados e a exposição de suas vulnerabilidades. Extremamente exigente consigo e com os outros, é pouco expressivo emocionalmente — costuma manifestar a raiva de forma passivo-agressiva ou em críticas inteligentemente calculadas, sempre à altura de sua reputação."
      },
      { // 18
        name: "O Patriarca de Ferro",
        match: ["t3","t7"],
        description: "O Patriarca de Ferro é razoavelmente menos ingênuo que os outros. Sua autoestima vem da crença de que não será enganado nem dominado, e orgulha-se da capacidade de antecipar traições e sobreviver. Sua tomada de decisão é preventiva e estratégica, sempre considerando o pior cenário. Pode haver impulsividade também, mas ela surge como reação rápida a ameaças — reais ou percebidas, não importa, pois para ele são alternativas idênticas. Vínculos são temporários e frágeis; aproxima-se para obter vantagem, mas sempre em estado de hipervigilância. Reage ao perigo com agressividade defensiva, nem que tenha que atacar a priori. Direto, objetivo, intimidador e desconfiado, gosta de liderar pelo medo ou pela estratégia — como forma de manter-se no controle, na tomada de decisão, à disposição de todos os dados para antever a traição."
      },
      { // 19
        name: "A Estrela Cadente",
        match: ["t4","t6"],
        description: "A Estrela Cadente carrega um brilho intenso, flutuante e passageiro. Uma imagem ofuscante do desejo de amor e admiração, do uso da extroversão e da manipulação como meio — e do risco de se autodestruir durante o processo. Sua comunicação é carismática, intensa e sedutora — mas pode, rapidamente e sem aviso, tornar-se acusatória, defensiva ou carregada de ironia e sarcasmo. Reage com intensidade desproporcional à rejeição, frustração ou críticas e, então, alterna entre crises de raiva, desespero ou afastamento súbito. A intensidade emocional e o desejo de validação deixam-na flexível a novas experiências e mudanças, mas é comum que abandone qualquer projeto cedo demais, caso sinta que não está recebendo o reconhecimento esperado."
      },
      { // 20
        name: "O Escudeiro",
        match: ["t9"],
        description: "O arquétipo da lealdade, da complementariedade e da necessidade do outro para uma existência com significado. Sua personalidade é dependente de fluidez, desprendimento e entrega. Dificilmente toma decisões sozinho: não é que não escolha, mas sua escolha está sempre em função dos outros — da felicidade potencial dos outros. Ele é resiliente para ceder; seu apego é estável e estará sempre presente, mesmo diante dos desafios. Comunicativo enquanto em benefício da harmonia, embora goste mais de ouvir do que de falar e não tenha dificuldade alguma em abrir mão da própria opinião para tomar partido de alguém que ama. Representa o serviço incondicional ao vínculo e o orgulho da função: um personagem por inteiro a serviço dos homens."
      },
      { // 21
        name: "O Relojoeiro",
        match: ["t8"],
        description: "O Relojoeiro representa a beleza da mecânica e do método, o controle absoluto do tempo, das variáveis e do sistema — e o isolamento no ofício. Este é o arquétipo do perfeccionismo, da solidez de valores, da necessidade de controle e do comprometimento com altos padrões. Sua autoestima depende diretamente do desempenho, do autocontrole e do mérito — e detesta a negligência. Às vezes, valoriza tanto os meios que o objetivo final da ação se perde. Antes de uma escolha, com o mesmo cuidado com que pesa precedentes, regras, consequências e desfechos alternativos, costuma revisar o próprio raciocínio múltiplas vezes — por isso, toda tomada de decisão é trabalhosa e dificilmente há espontaneidade. Valoriza relações baseadas em compromisso, previsibilidade e reciprocidade prática. É leal, protetor e demonstra afeto garantindo que o outro esteja seguro. Raramente interpreta as coisas como um fim em si mesmas; por isso, prefere atividades que envolvem resolução de problemas — afinal, para podermos concluir com propriedade que a meta foi cumprida, temos que avaliar o rigor técnico, o tamanho do ganho e a utilidade das consequências (e, se tudo foi a priori calculado, melhor ainda)."
      },
      { // 22
        name: "O Cronista",
        match: ["t8", "t10"],
        description: "Um personagem responsável, atento, com princípios sólidos — mas amedrontado pela dúvida de ser ou não bom o bastante para os outros. O perfeccionismo e a ansiedade social o tornam vulnerável à autocrítica excessiva e a um medo paralisante de decepcionar. A tomada de decisão sempre pesa riscos sociais e práticos e, em geral, é lenta e orientada pela busca por segurança. Essa tentativa constante de controlar variáveis e antecipar críticas o deixa exausto com mais frequência do que admite. Para ele, é mais fácil estar em relações em que os papéis sejam bem definidos ou com pessoas seguras e confiáveis. Age através de gestos concretos, tentando provar seu valor pela utilidade e pelo cuidado. Tem uma comunicação formal, polida, precisa e cheia de filtros — e valoriza ambientes previsíveis e com regras claras. Como não gosta de exposição desnecessária, evita a liderança formal — exceto quando tem domínio técnico total e sabe que realmente é o melhor para o papel."
      },
      { // 23
        name: "O Cativo",
        match: ["t3", "t9"],
        description: "O Cativo é a representação simbólica da submissão calculada, da lealdade forçada pelo medo e da dependência disfarçada de afeto. Vigia o vínculo que o aprisiona, sempre atento aos sinais de abandono ou traição. Calibra seu comportamento para manter o outro por perto, mas dificilmente se sente seguro ou amado de verdade. É um cuidador dedicado e altruísta — embora acredite, em segredo, que tudo isso é uma troca tensa e arriscada pela simples presença do outro. Essa é a figura que sobreviveu ao caos das relações humanas por meio da dependência, mas também desenvolveu mecanismos de controle emocional para nunca ser pego desprevenido."
      },
      { // 24
        name: "O Fantasma",
        match: ["t10"],
        description: "Representa o medo incapacitante da rejeição e a segurança na timidez e no isolamento. É pacífico, sensato, introspectivo e observador, sempre respeitando espaços e limites. Apesar disso, carrega uma autoimagem de inadequação e evita qualquer situação que exponha suas vulnerabilidades. Decide pouco — e quase sempre para manter o conforto. A impulsividade é raríssima. Nos poucos laços que cria, tende a ser leal, silencioso e presente, mas sempre na retaguarda. É o mestre da escuta passiva: evita debates, polêmicas ou falar de si mesmo. Dificilmente incomoda as pessoas. Na verdade, elas o valorizam e gostariam de ouvir mais suas ideias, ver de forma mais espontânea sua sabedoria — afinal, bons ouvintes fazem excelentes contadores de histórias."
      },
      { // 25
        name: "O Patrono",
        match: ["t8", "t9"],
        description: "Representa o dilema entre cuidar e controlar, a necessidade de ser útil como forma de garantir permanência, o medo de falhar e perder o afeto — e o risco de tudo isso se transformar na perda da liberdade. Responsável, confiável, presente e naturalmente indispensável na vida das pessoas. Gosta de se sentir útil e tem um medo enorme de decepcionar. Escolhe com base em cálculos minuciosos e na preocupação com o impacto da escolha sobre quem ama. Evita riscos, age com extrema prudência e tende a procrastinar escolhas difíceis, esperando sempre a confirmação do melhor caminho. Por isso, a impulsividade é quase inexistente. Reage à frustração ou à decepção com retraimento e autoexigência. Dificilmente tem explosões emocionais, mas pode acumular ressentimento e culpa silenciosa. Demonstra afeto cuidando, garantindo a ordem e protegendo o outro de imprevistos ou erros."
      },
      { // 26
        name: "O Coreógrafo",
        match: ["t5", "t8"],
        description: "Mestre da performance impecável, manipulador da estética e organizador da cena: o Coreógrafo organiza o movimento e o ritmo, é capaz de trazer beleza ao controle e entende como as coisas se movimentam — usando a técnica para aperfeiçoá-las. Trabalha em função da técnica e usa o aplauso como métrica. Competente e detalhista, mas também encantador, frequentemente se torna o centro funcional e afetivo dos grupos. Sob pressão, recorre ao perfeccionismo, ao autocontrole e ao aumento de performance — incluindo a social. Fala com clareza e eloquência; soa até didático — tudo meticulosamente calculado. Tem facilidade em dominar ambientes sociais e impor seu ponto sem parecer agressivo. Quando contrariado, oscila entre o controle racional e reações emocionais performáticas — ironia, sarcasmo ou drama. Aí está: o equilíbrio perfeito entre a excelência e o palco."
      },
      { // 27
        name: "O Andarilho",
        match: ["t2", "t4"],
        description: "O ceticismo existencial desse personagem o torna uma criatura errante. Olha para o nosso mundo e desconfia se ele é mesmo real. \"Por que tudo se dá de forma tão insólita?\" — os lugares, as pessoas, as cenas, o tempo. Daí decorre a necessidade de validação e afeto: uma segurança de que ele próprio existe e é real. Suas viagens lhe deram um repertório enorme de ideias e memórias — e um ainda maior de emoções. De certa forma, exige isso dos outros também, e então se torna difícil se aproximar de forma consistente. De qualquer jeito, ele mesmo raramente está no mesmo lugar dos outros, no mesmo presente dos outros — e o coração inquieto fica nessa eterna busca por paisagens e pessoas onde possa, finalmente, se reconhecer."
      },
      { // 28
        name: "O Exilado",
        match: ["t1", "t7"],
        description: "Um personagem raro, que parece ter nascido fora do nosso mundo — sem rótulos, sem ingenuidade, sem amarras, sem aquela necessidade tola de pertencimento. Conhece o valor das rotas tortas, da flexibilidade intelectual que elas exigem, da inteligência pragmática. Sabe que a solidão não é castigo — é o preço, mesmo, de ser leal à liberdade. E ali está ele: inegociavelmente livre, amoral, sólido, solitário, inutilmente incompreendido."
      },
      { // 29
        name: "O Lobo",
        match: ["t7", "t8"],
        description: "Uma figura potencialmente perigosa — e merecidamente temida e respeitada. Vê o mundo como território de caça. Segue um código inviolável, baseado em valores contraditórios. Esperto, ágil, calculista, autodidata, altamente eficiente. Quando está na presença dos outros, estuda o terreno, mede o risco, calcula o dano — e então executa o que tiver que ser feito, com prazer. É esse o tipo capaz de dominar o mundo."
      },
      { // 30
        name: "O Náufrago",
        match: ["t4", "t9"],
        description: "O arquétipo da contradição entre relações intensas, o medo de ser deixado à deriva e a autossabotagem afetiva. Para ele, lealdade e apego são praticamente a mesma coisa. É extremamente intuitivo e responde rápido ao que esperam dele. Mas, mais cedo ou mais tarde, terá de confrontar o medo paralisante do fim — e a obrigação de colocar-se sob controle privado mais uma vez. Quando se vê sozinho, chega até a ser um alívio, pois já não há mais com o que se preocupar. Essa dinâmica do rompimento explica a contradição principal desse personagem: é muito mais difícil para ele estar em um relacionamento e, ainda assim, quando ele acaba, viver o vazio e a solidão é muito menos assustador."
      },
      { // 31
        name: "O Alquimista",
        match: ["t1", "t7", "t8"],
        description: "Um ritualista introvertido, obcecado pelos meios. O personagem que, em vez de se perder em fantasias, as aprisiona e as dobra até a forma — até que se transformem em um sistema organizado e exemplar. Podem até dizer que ele faz isso por vaidade, mas, na verdade, ele só sabe que o mundo está ruindo silenciosamente — e que ver padrões é tentar ordenar o abismo. Metódico, controlado, quase belo ao manipular as falhas mais profundas. Faz do rigor um ofício e da solidão um método. Sua inteligência e pragmatismo apreendem padrões e elaboram fórmulas próprias, tentando extrair sentido da desordem. É por isso que o chamam de O Alquimista: ele é realmente capaz de transformar todo o caos em ouro."
      },
      { // 32
        name: "O Máscara",
        match: ["t5", "t9", "t10"],
        description: "O ator dos atos mais talentosos e desenvoltos. Tem uma coleção de mais de mil rostos para desempenhar, com perfeição, o papel que cada palco e cada plateia exige. Está tão profundamente submerso em sua cena que aparece aos outros como alguém espontâneo, com um encanto natural, que existe de uma forma bela — e tudo isso é verdade. Mas há também ali algo de cena, de ensaio e de súplica. Está esperando há um tempo (já longo demais?) por algo ou alguém que há de vê-lo inteiro — e, então, saber o que fazer com isso. Mas essa espera é uma forma legítima de estar presente: porque, apesar das mil máscaras, apesar do medo e da necessidade de apego, ele está sempre entregue."
      },
      { // 33
        name: "O Artista",
        match: ["t2", "t4", "t5"],
        description: "O artista fabricou para si, por engenho, coragem ou capricho, um novo mundo fantástico que transparece em seus jeitos. Um mundo que sua mente imaginativa habilmente apresenta às outras pessoas — sem, no entanto, convidá-las a viver nele. Um todo completo, como ele mesmo, formado por imagens belas e imperturbáveis. Daí decorrem seus modos inusitados de se apresentar, sua expressividade, que nos levam a chamá-lo de uma figura autêntica e performática. Apesar do enorme poder de encantar com a linguagem, suas ideias são pouco usuais e suas expressões, imprevisíveis. Está, a todo momento, compondo cenas sombrias e fascinantes — e, no fim, mesmo que ninguém o entenda, ele encanta. Pode-se dizer: é o tipo capaz de transcender a condição humana, a única imagem que irá restar, no fim, quando todos os escombros forem removidos."
      },
      { // 34
        name: "O Fauno",
        match: ["t2", "t3", "t8"],
        description: "A figura que fareja a intenção e sabe, com clareza, que as pessoas não são o que aparentam ser. Ele mesmo, silenciosamente, sempre sabe mais do que aparenta, sempre é mais hábil, sempre é mais metódico do que deixa transparecer. E talvez sinta mais também — mas aí há dúvida. E as pessoas sabem: ele é desconfiado, hipervigilante, recluso por convicção. Observa o mundo de forma detalhista, busca o controle da narrativa e usa sua capacidade analítica para enxergar padrões ocultos nas coisas. O que alguns chamam de magia, ele chama de atenção — e isso dá medo, porque ele é, de fato, atento. Daí decorre algo que qualquer um pode entender: que ele fique, inteiro e solitário, escondido no centro do labirinto das coisas — e que realmente prefira estar ali (nas suas formas conhecidas), a ser traído pela superfície."
      },
      { // 35
        name: "O Mímico",
        match: ["t5", "t10"],
        description: "Ele nasceu para encantar, embora tema ser desmascarado. Vive de reflexos — dos sorrisos que copia, das emoções que ensaia, das palavras que sabe que agradam — e é ótimo nisso. É um artista e prisioneiro da performance: a contradição entre o medo do vazio e da invisibilidade quando não atrai atenção, e a sensação de vulnerabilidade e inadequação quando se torna o centro. Assim, vive entre a expressividade e o arrependimento de se expressar. Sabem que é charmoso, que entretém e que seus jeitos representam um enorme repertório emocional (mas essa última parte já é contraditória). As pessoas têm segurança de que o espetáculo será belo — embora ninguém saiba quem ele é sob tudo isso. Será que ele se perdeu no personagem? E seu medo maior não é o silêncio da plateia, mas o dia em que alguém lhe peça para existir sem máscara."
      },
      { // 36
        name: "O Equilibrista",
        match: ["t4", "t8"],
        description: "O Equilibrista atravessa a vida racionalmente, sempre prestes a cair no abismo das emoções. O desejo de amar é contido pelo horror do caos dos relacionamentos e, em geral, ele rompe antes do abandono. Tem autoestima frágil e dependente — tanto da aprovação externa quanto da própria avaliação sobre a adequação de seu comportamento. Cada decisão é pesada, organizada, planejada e calculada — até que tudo sai do controle e a sobrecarga emocional o carrega para o desespero. Daí decorre uma enorme dificuldade de manter a linearidade da narrativa. Busca a perfeição e é destruído pela cobrança. A raiva disfarçada de tranquilidade, o afeto de exigência. E todo dia é um ato de equilíbrio: entre o desejo de viver e o controle para não viver demais."
      }      
];


// Definição dos clusters
const clusters = {
cluster1: ["t1", "t2", "t3"],
cluster2: ["t4", "t5", "t6", "t7"],
cluster3: ["t8", "t9", "t10"]
};

const questions = [
{ text: "Se você tivesse que escrever uma bio curta e sincera para um perfil anônimo, o que diria?",
    options: [
    "Só observando, nada pessoal…",
    "Um sonhador curioso viajando entre realidades.",
    "Sempre alerta.",
    "Numa mudança constante. Me avise se entender alguma coisa!",
    "Gosto de pessoas, de histórias e de boas conversas.",
    "Não sigo tendências, crio.",
    "É simples assim: a vida é um jogo, e eu jogo para ganhar.",
    "Se eu me propus a algo, que seja bem feito.",
    "Não sou bom em decidir sobre essas coisas… O que você acha?",
    "Se eu soubesse que ninguém julgaria, até falaria mais…"
] },
{ text: "Você está diante de uma decisão importante, como costuma lidar com isso?", type: "slider" },
{ text: "Quando alguém se aproxima querendo ser seu amigo, como você reage?",
    options: [
    "Se for alguém mais na dele e que respeite meu espaço, daí tudo bem.",
    "É algo desconfortável, pois é difícil saber o que as pessoas querem e esperam.",
    "Não sei… Preciso observar melhor o comportamento dela pra ter mais segurança.",
    "Se essa pessoa se interessar de verdade, me aproximo e me apego com facilidade.",
    "Quanto mais amigos melhor… Gosto de conhecer pessoas novas, espero que sejam divertidas.",
    "Acho que não é todo mundo que merece atenção, mas eu gosto quando me admiram e se interessam por mim.",
    "Amizades vêm e vão… Essa pessoa tem algo a me oferecer?",
    "Tenho dificuldade em lidar com gente impulsiva ou emocional demais.",
    "Tento agradar para já garantir que gostem de mim.",
    "Tenho medo de ter criado alguma expectativa e depois decepcionar as pessoas."
] },
{ text: "Você está passando por um período difícil. Como lida com isso?",
    options: [
    "Passo por isso sozinho, como sempre. E está tudo bem, vai se resolver, é assim que as coisas são.",
    "Fico preso em pensamentos, analisando sinais e padrões no mundo, tentando entender o que significa.",
    "Redobro minha atenção e analiso tudo ao meu redor com mais cuidado.",
    "Preciso que alguém fique comigo, embora não queira conselhos — só que me mostrem que estão comigo e que as coisas vão ficar bem.",
    "Converso com mais de um amigo, preciso sentir que estou falando de coisas importantes e sendo ouvido também.",
    "Não perco tempo me lamentando… Sei que é temporário, que tenho capacidade pra resolver e que tudo será um crescimento no fim.",
    "As pessoas se complicam muito. A situação parece difícil? Mudo meu caminho e pronto.",
    "Me concentro no que posso controlar, e planejo pra resolver da forma mais eficiente possível.",
    "Preciso do apoio das pessoas pra me ajudarem a tomar decisões.",
    "É difícil pedir ajuda, mesmo quando preciso — tenho medo do que vão pensar se eu explicar o problema."
] },
{ text: "Você está em uma conversa e alguém diz algo com que você discorda. Como reage?",
    options: [
    "Provavelmente não direi nada... Não ligo e também não vejo motivo para discutir.",
    "Eu explico, mas ninguém nunca me entende.",
    "Não quero que outros influenciem o que eu penso, então defendo firmemente minhas opiniões.",
    "Se for alguém importante pra mim, fico angustiado tentando entender por que discordamos.",
    "Gosto de debater, desde que me escutem também.",
    "Gosto de discutir, e com frequência convenço os outros, pois falo com segurança e propriedade.",
    "Gosto de testar até onde as pessoas vão para defender o ponto de vista delas.",
    "Apresento argumentos lógicos e bem estruturados.",
    "Concordo fácil com pessoas confiantes ou de quem eu gosto.",
    "Se for uma conversa difícil, desvio do assunto."
] },
{ text: "Você entra em um grupo novo. Como se sente e age?",
    options: [
    "Se eu puder evitar interações desnecessárias, melhor.",
    "Tenho curiosidade em ficar observando os padrões de comportamento das pessoas.",
    "Me preocupa a ideia de que possam estar falando de mim sem eu saber.",
    "Me sinto deslocado, mas quero muito ser aceito.",
    "Acompanho o tom do grupo, mas sempre levo energia com um toque especial meu.",
    "Observo primeiro quem vale a pena, e então me conecto com as pessoas certas.",
    "Identifico as dinâmicas do grupo para poder ter controle.",
    "Se o grupo for muito desorganizado vou tentar colocar alguma ordem.",
    "Espero que alguém me inclua nas conversas, pois tenho medo de me intrometer.",
    "Só participo se perceber que é um ambiente seguro e receptivo."
] },
{ text: "O que pode realmente te tirar do sério?",
    options: [
    "Ser forçado a interagir quando não estou afim.",
    "Quando não consigo expressar direito minhas ideias, ou noto que minhas experiências não são compartilhadas.",
    "Quando percebo que estão tentando me passar para trás.",
    "Quando sinto que estou sendo deixado de lado.",
    "Ser interrompido no meio de uma fala importante.",
    "Perder para alguém menos competente que eu.",
    "Gente sensível demais e que faz drama por qualquer coisa.",
    "Mudanças de última hora que bagunçam os planos.",
    "Ser deixado sozinho para lidar com um problema.",
    "Ser criticado ou humilhado em público."
] },
{ text: "Algo inesperado acontece e muda totalmente seus planos. Como você reage?",
    options: [
    "Tanto faz. Nunca estive muito apegado aos planos de qualquer jeito.",
    "Genial! E se isso mudar as coisas de um jeito inusitado, e me trazer algo que eu nem sabia que precisava?",
    "Estranho... Por que isso aconteceu justo agora? O que está por trás disso?",
    "Se eu estava animado para algo e os planos mudam, sinto por um tempo que tudo perdeu o sentido.",
    "Ótimo! Mudanças são boas pois quebram o tédio da rotina.",
    "Meu plano original ainda é melhor, só preciso encontrar um jeito de aplicá-lo nas novas circunstâncias.",
    "Se eu não gostar, ignoro os limitantes e faço as coisas do meu jeito de qualquer forma.",
    "Preciso reorganizar tudo do zero, e gasto um tempão nisso.",
    "Eu travo e não consigo tomar novas decisões, então procuro alguém pra me ajudar.",
    "Fico ansioso e tento me preparar para o pior cenário possível."
] },
{ text: "Quando você está dentro de um grupo, o que é mais importante para você? (Segure e arraste para colocar em ordem de prioridade)",
    type: "draggable",
    options:
    [
        "Independência",
        "Liderança e Carisma",
        "Estabilidade e Proteção",
        "Estrutura e Controle",
        "Reconhecimento e Validação"
    ]
},
{ text: "Se sua mente fosse um lugar, como ela seria?",
    options: [
    "Uma biblioteca silenciosa, onde só eu posso entrar e explorar.",
    "Um reino mágico underground, onde as leis da lógica não funcionam da mesma forma.",
    "Um tabuleiro de xadrez sem limites, onde preciso antecipar todos os movimentos possíveis.",
    "Um palácio feito de mosaicos coloridos - belos, diversos, frágeis, sempre prestes a se quebrar.",
    "Um festival de arte, música e teatro, com programação nova todos os dias.",
    "Uma torre muito alta, com vista para tudo e todos.",
    "Uma casa de pôquer clandestina, onde só vence quem arrisca alto, pensa rápido e blefa melhor.",
    "Um relógio suíço, preciso, impecável, prático e eficiente.",
    "Um barzinho de samba, vibrante e animado quando cheio de gente que se gosta.",
    "Um tribunal de justiça, onde todos os movimentos são analisados e julgados."
] },
{ text: "Pergunta 11: Como você lida com conflitos e frustrações?", type: "slider11" },
{ text: "Pergunta 12: O que é mais importante para você em qualquer situação? (Segure e arraste para colocar em ordem de prioridade)", type: "draggable12",
    options: [
        "Independência e controle sobre o que acontece comigo",
        "Segurança e estabilidade, evitando erros e imprevistos",
        "Relacionamentos e aprovação das pessoas ao meu redor",
        "Criatividade, novidade e liberdade para explorar novas ideias",
        "Ordem e previsibilidade, saber que tudo está bem estruturado"
    ]
}
];

let currentQuestion = 0;
const answers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

document.addEventListener("DOMContentLoaded", () => {
localStorage.removeItem("quizAnswers"); // Isso zera as respostas ao recarregar a página
loadQuestion();
});

function shuffleArray(array) {
return array.map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value);
}

function updateQuestionCounter() {
document.getElementById("question-counter").innerText = `${currentQuestion + 1}/${questions.length}`;
}

function loadQuestion() {
updateQuestionCounter(); // 🔹 Atualiza o contador de perguntas sempre que carregar uma nova pergunta

document.getElementById("question-text").innerText = questions[currentQuestion].text;
let optionsDiv = document.getElementById("options");
optionsDiv.innerHTML = "";

document.getElementById('answer-inner').classList.remove('grid');

if (questions[currentQuestion].type === "draggable") {
  optionsDiv.innerHTML = "<ul id='draggable-list' class='draggable-list'></ul>";
  let list = document.getElementById("draggable-list");

  questions[currentQuestion].options.forEach((item, index) => {
      let listItem = document.createElement("li");
      listItem.textContent = item;
      listItem.draggable = true;
      listItem.dataset.index = index;
      listItem.classList.add("draggable-item"); // Adiciona classe para estilização
      listItem.addEventListener("dragstart", dragStart);
      listItem.addEventListener("dragover", dragOver);
      listItem.addEventListener("drop", drop);
      list.appendChild(listItem);
  });
}
else if (questions[currentQuestion].type === "slider") {
optionsDiv.innerHTML = `
    <div class='slider-container'>
        <div class="slider-labels">
            <span>Razão</span>
            <span>Emoção</span>
        </div>
        <input type='range' class='slider' id='q2a' min='-2' max='2' step='1' value='${answers["2a"] || 0}'>
    </div>

    <div class='slider-container'>
        <div class="slider-labels">
            <span>Autonomia</span>
            <span>Influência</span>
        </div>
        <input type='range' class='slider' id='q2b' min='-2' max='2' step='1' value='${answers["2b"] || 0}'>
    </div>

    <div class='slider-container'>
        <div class="slider-labels">
            <span>Impulsividade</span>
            <span>Planejamento</span>
        </div>
        <input type='range' class='slider' id='q2c' min='-2' max='2' step='1' value='${answers["2c"] || 0}'>
    </div>

    <div class='slider-container'>
        <div class="slider-labels">
            <span>Flexibilidade</span>
            <span>Rigor</span>
        </div>
        <input type='range' class='slider' id='q2d' min='-2' max='2' step='1' value='${answers["2d"] || 0}'>
    </div>
`;
}
else if (questions[currentQuestion].type === "slider11") {
optionsDiv.innerHTML = `
    <div class='slider-container'>
        <div class="slider-labels">
            <span>Evito o confronto</span>
            <span>Enfrento de cabeça</span>
        </div>
        <input type='range' class='slider' id='q11a' min='1' max='5' step='1' value='${answers["11a"] || 3}'>
    </div>

    <div class='slider-container'>
        <div class="slider-labels">
            <span>Reprimo o que sinto</span>
            <span>Expresso tudo intensamente</span>
        </div>
        <input type='range' class='slider' id='q11b' min='1' max='5' step='1' value='${answers["11b"] || 3}'>
    </div>

    <div class='slider-container'>
        <div class="slider-labels">
            <span>A culpa é minha</span>
            <span>A culpa é dos outros</span>
        </div>
        <input type='range' class='slider' id='q11c' min='1' max='5' step='1' value='${answers["11c"] || 3}'>
    </div>

    <div class='slider-container'>
        <div class="slider-labels">
            <span>Eu aceito ordens</span>
            <span>Eu desafio autoridade</span>
        </div>
        <input type='range' class='slider' id='q11d' min='1' max='5' step='1' value='${answers["11d"] || 3}'>
    </div>
`;
}
else if (questions[currentQuestion].type === "draggable12") {
    optionsDiv.innerHTML = "<ul id='draggable-list-12' class='draggable-list'></ul>";
    let list = document.getElementById("draggable-list-12");

    let optionsCopy = [...questions[currentQuestion].options]; // Copy options for randomization
    optionsCopy.forEach((item, index) => {
        let listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.draggable = true;
        listItem.dataset.index = index;
      listItem.classList.add("draggable-item"); // Adiciona classe para estilização
        
        // Ensure event listeners for draggable actions
        listItem.addEventListener("dragstart", dragStart12);
        listItem.addEventListener("dragover", dragOver12);
        listItem.addEventListener("drop", drop12);

        list.appendChild(listItem);
    });
}
else {
  document.getElementById('answer-inner').classList.add('grid');
  
    // SHUFFLE
    if (questions[currentQuestion].options) {
        const shuffledOptions = shuffleArray([...questions[currentQuestion].options]);
        shuffledOptions.forEach(option => {
            optionsDiv.innerHTML += `<label class="module">
                <input type='radio' name='q${currentQuestion}' value='${option}' ${answers[currentQuestion] === option ? "checked" : ""}>
                ${option}
            </label><br>`;
        });
    }
    // // DO NOT SHUFFLE for testing
    // questions[currentQuestion].options.forEach(option => {
    //     optionsDiv.innerHTML += `<label class="module">
    //         <input type='radio' name='q${currentQuestion}' value='${option}' ${answers[currentQuestion] === option ? "checked" : ""}>
    //         ${option}
    //     </label><br>`;
    // });
}
}

function dragStart(event) {
event.dataTransfer.setData("text/plain", event.target.dataset.index);
}

function dragOver(event) {
event.preventDefault();
}

function drop(event) {
event.preventDefault();
const draggedIndex = event.dataTransfer.getData("text/plain");
const targetIndex = event.target.dataset.index;
let list = document.getElementById("draggable-list");
let items = Array.from(list.children);

list.insertBefore(items[draggedIndex], items[targetIndex]);
updateIndices();
}

function updateIndices() {
let list = document.getElementById("draggable-list");
let items = Array.from(list.children);
items.forEach((item, index) => {
    item.dataset.index = index;
});
}

function dragStart12(event) {
event.dataTransfer.setData("text/plain", event.target.dataset.index);
}

function dragOver12(event) {
event.preventDefault();
}

function drop12(event) {
event.preventDefault();
const draggedIndex = event.dataTransfer.getData("text/plain");
const targetIndex = event.target.dataset.index;
let list = document.getElementById("draggable-list-12");
let items = Array.from(list.children);

if (draggedIndex !== targetIndex) {
    let draggedItem = items[draggedIndex];
    let targetItem = items[targetIndex];

    if (draggedItem && targetItem) {
        list.insertBefore(draggedItem, targetItem);
        updateIndices12();
    }
}
}

function updateIndices12() {
let list = document.getElementById("draggable-list-12");
let items = Array.from(list.children);
items.forEach((item, index) => {
    item.dataset.index = index;
});
}

function saveAnswer() {
if (questions[currentQuestion].type === "draggable") {
    let items = document.querySelectorAll("#draggable-list li");
    items.forEach((item, index) => {
        let itemText = item.textContent.trim();
        answers[`9${itemText.charAt(itemText.length - 1).toLowerCase()}`] = `p${index + 1}`;
    });
} else if (questions[currentQuestion].type === "slider") {
    answers["2a"] = document.getElementById("q2a").value;
    answers["2b"] = document.getElementById("q2b").value;
    answers["2c"] = document.getElementById("q2c").value;
    answers["2d"] = document.getElementById("q2d").value;
}
else if (questions[currentQuestion].type === "slider11") {
    answers["11a"] = document.getElementById("q11a").value;
    answers["11b"] = document.getElementById("q11b").value;
    answers["11c"] = document.getElementById("q11c").value;
    answers["11d"] = document.getElementById("q11d").value;
}
else if (questions[currentQuestion].type === "draggable12") {
    let items = document.querySelectorAll("#draggable-list-12 li");
    items.forEach((item, index) => {
        let itemText = item.textContent.trim();
        answers[`12p${index + 1}`] = itemText; // Stores priority ranking as "12p1", "12p2", etc.
    });
}
else {
    const selectedOption = document.querySelector(`input[name='q${currentQuestion}']:checked`);
    if (selectedOption) {
        answers[currentQuestion] = selectedOption.value;
    }
}
localStorage.setItem("quizAnswers", JSON.stringify(answers));
}

function nextQuestion() {
saveAnswer();
if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    
  updateQuestionCounter(); // 🔹 Atualiza o contador ao avançar para a próxima pergunta

    // 🔹 Faz a rolagem para o topo da página
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    loadQuestion();
} else {
    submitQuiz();
}
}

function prevQuestion() {
saveAnswer();
if (currentQuestion > 0) {
    currentQuestion--;
  
updateQuestionCounter(); // 🔹 Atualiza o contador ao voltar para a pergunta anterior

    loadQuestion();
} else {
    window.location.href = "index.html"; // 🔹 Redireciona para a página inicial se estiver na primeira pergunta
}
}

function getArchetype(transtornoScores) {
const sorted = Object.entries(transtornoScores).sort((a, b) => b[1] - a[1]);
const primary = sorted[0][0];
const secondary1 = sorted[1][0];
const secondary2 = sorted[2][0];
const top3 = [primary, secondary1, secondary2];
const primaryScore = sorted[0][1];
const secondScore = sorted[1][1];
const dominanceThreshold = 20; 

// 🔥 Pureza
if (primaryScore - secondScore >= dominanceThreshold) {
    const pure = archetypes.find(a => a.match.length === 1 && a.match.includes(primary));
    if (pure) return pure.name;
}

// ✅ Perfect Match (all 3 top traits and no more)
let match = archetypes.find(a => top3.every(t => a.match.includes(t)) && a.match.length === 3);
if (match) return match.name;

// ✅ Refino: Busca o arquétipo com maior quantidade de top3 antes de aceitar qualquer strong match
let bestMatch = null;
let maxIntersection = 0;
archetypes.forEach(a => {
    if (a.match.includes(primary)) {
        const intersection = a.match.filter(t => top3.includes(t)).length;
        if (intersection > maxIntersection) {
            maxIntersection = intersection;
            bestMatch = a;
        }
    }
});
if (bestMatch) return bestMatch.name;

// 🔄 Fallback se nada funcionar (muito improvável)
return "Perfil não arquetípico";
}


document.addEventListener("DOMContentLoaded", function () {
let transtornoScores = JSON.parse(localStorage.getItem("transtornoScores"));
if (transtornoScores) {
    // Garante que os valores sejam números
    Object.keys(transtornoScores).forEach(key => {
        transtornoScores[key] = Number(transtornoScores[key]);
    });
    drawDecagonChart(transtornoScores);
}
});

function drawDecagonChart(transtornoScores) {
const canvas = document.getElementById("chartCanvas");
const ctx = canvas.getContext("2d");

// Improve resolution for high-DPI screens
const dpr = window.devicePixelRatio || 1;
canvas.width = 600 * dpr;
canvas.height = 600 * dpr;
ctx.scale(dpr, dpr);

const width = 600;  // Fixed width for better quality
const height = 600; // Fixed height for better quality
const centerX = width / 2;
const centerY = height / 2;
const maxRadius = Math.min(width, height) / 2 - 20;
const levels = 5;
const colors = ["#FF9478", "#F69FD1", "#839DEF", "#00C9EA", "#00DAEA", "#00EFEA", "#00EE9C", "#9EFF00", "#FFFF39", "#FFE00C"];

ctx.clearRect(0, 0, canvas.width, canvas.height);

// Draw grid lines
ctx.strokeStyle = "#888888"; // Darker lines for clarity
ctx.globalAlpha = 1; // Ensures sharp visibility

for (let i = 1; i <= levels; i++) {
    let radius = (i / levels) * maxRadius;
    ctx.beginPath();
    for (let j = 0; j < 10; j++) {
        let angle = (Math.PI * 2 * j) / 10;
        let nextAngle = (Math.PI * 2 * (j + 1)) / 10;

        let x1 = centerX + radius * Math.cos(angle);
        let y1 = centerY + radius * Math.sin(angle);
        let x2 = centerX + radius * Math.cos(nextAngle);
        let y2 = centerY + radius * Math.sin(nextAngle);

        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
    }
    ctx.closePath();
    ctx.stroke();
}

// Draw background triangles with transparency
for (let i = 0; i < 10; i++) {
    let angle = (Math.PI * 2 * i) / 10;
    let nextAngle = (Math.PI * 2 * (i + 1)) / 10;
    let color = colors[i];

    ctx.globalAlpha = 0.2; // Ensure transparency for background
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + maxRadius * Math.cos(angle), centerY + maxRadius * Math.sin(angle));
    ctx.lineTo(centerX + maxRadius * Math.cos(nextAngle), centerY + maxRadius * Math.sin(nextAngle));
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
}
ctx.globalAlpha = 1; // Reset opacity for main shapes

// Draw filled areas based on transtornoScores
let scores = Object.values(transtornoScores);
let minScore = Math.min(...scores);
let maxScore = Math.max(...scores);
let scoreRange = maxScore - minScore || 1;

function getNormalizedLevel(score) {
    return Math.round(((score - minScore) / scoreRange) * (levels - 1)) + 1;
}

for (let i = 0; i < 10; i++) {
    let angle = (Math.PI * 2 * i) / 10;
    let nextAngle = (Math.PI * 2 * (i + 1)) / 10;
    let color = colors[i];

    let level = getNormalizedLevel(transtornoScores[`t${i + 1}`]);
    let fillRadius = (level / levels) * maxRadius;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX + fillRadius * Math.cos(angle), centerY + fillRadius * Math.sin(angle));
    ctx.lineTo(centerX + fillRadius * Math.cos(nextAngle), centerY + fillRadius * Math.sin(nextAngle));
    ctx.closePath();
    ctx.fillStyle = color; // Ensure main areas remain solid
    ctx.globalAlpha = 1;
    ctx.fill();
}
}

// Resize on window resize
window.addEventListener("resize", () => {
drawDecagonChart(JSON.parse(localStorage.getItem("transtornoScores")));
});





function submitQuiz() {
saveAnswer();

let transtornoScores = {
    t1: 0, t2: 0, t3: 0, t4: 0, t5: 0, 
    t6: 0, t7: 0, t8: 0, t9: 0, t10: 0
};

const savedAnswers = JSON.parse(localStorage.getItem("quizAnswers")) || {};

// 🔹 Pontuação das Barras da Pergunta 2 🔹
const sliderScores = {
    "2a": { "-2": { c1: 4, c2: 0, c3: 2 }, "-1": { c1: 2, c2: 2, c3: 2 }, "0": { c1: 2, c2: 2, c3: 2 }, "1": { c1: 0, c2: 2, c3: 2 }, "2": { c1: 0, c2: 4, c3: 2 } },
    "2b": { "-2": { c1: 4, c2: 0, c3: 0 }, "-1": { c1: 2, c2: 0, c3: 2 }, "0": { c1: 2, c2: 2, c3: 2 }, "1": { c1: 0, c2: 2, c3: 2 }, "2": { c1: 0, c2: 4, c3: 2 } },
    "2c": { "-2": { c1: 0, c2: 4, c3: 2 }, "-1": { c1: 2, c2: 2, c3: 2 }, "0": { c1: 2, c2: 2, c3: 2 }, "1": { c1: 2, c2: 0, c3: 2 }, "2": { c1: 4, c2: 0, c3: 4 } },
    "2d": { "-2": { c1: 4, c2: 2, c3: 0 }, "-1": { c1: 2, c2: 2, c3: 0 }, "0": { c1: 2, c2: 2, c3: 2 }, "1": { c1: 0, c2: 2, c3: 2 }, "2": { c1: 0, c2: 0, c3: 4 } }
};

Object.keys(sliderScores).forEach(slider => {
    let value = savedAnswers[slider];
    if (value !== undefined) {
        let clusterPoints = sliderScores[slider][String(value)];
        clusters.cluster1.forEach(t => transtornoScores[t] += clusterPoints.c1);
        clusters.cluster2.forEach(t => transtornoScores[t] += clusterPoints.c2);
        clusters.cluster3.forEach(t => transtornoScores[t] += clusterPoints.c3);
    }
});

// Percorre todas as perguntas e pontua corretamente
questions.forEach((question, index) => {
    let answer = savedAnswers[index];
    if (answer) {
        let answerIndex = question.options.indexOf(answer);
        if (answerIndex !== -1) {
            let transtornoKey = `t${answerIndex + 1}`;
            
            // Pontua +5 para o transtorno específico
            if (transtornoScores.hasOwnProperty(transtornoKey)) {
                transtornoScores[transtornoKey] += 5;
            }

            // Pontua +2 para o cluster correspondente
            if (answerIndex < 3) {
                clusters.cluster1.forEach(t => transtornoScores[t] += 2);
            } else if (answerIndex >= 3 && answerIndex <= 6) {
                clusters.cluster2.forEach(t => transtornoScores[t] += 2);
            } else {
                clusters.cluster3.forEach(t => transtornoScores[t] += 2);
            }
        }
    }
});

// 🔹 Pontuação da Pergunta 9 (Draggable) 🔹
const priorityScores = {
    "p1": { primary: 10, secondary: 5 },
    "p2": { primary: 7, secondary: 3 },
    "p3": { primary: 4, secondary: 2 },
    "p4": { primary: 2, secondary: 1 },
    "p5": { primary: 0, secondary: 0 }
};
// a=independencia b=lideranca e carisma c=estabilidade e proteção d=estrutura e controle e=reconhecimento e validação
const question9Clusters = {
    "9a": { primary: "cluster1", secondary: "cluster2" },
    "9b": { primary: "cluster2", secondary: "cluster3" },
    "9c": { primary: "cluster3", secondary: "cluster1" },
    "9d": { primary: "cluster3", secondary: "cluster2" },
    "9e": { primary: "cluster2", secondary: "cluster1" }
};

Object.keys(question9Clusters).forEach(option => {
    let position = savedAnswers[option]; // Ex: "p1", "p2", etc.
    if (position && priorityScores[position]) {
        let clusterData = question9Clusters[option];

        // Adiciona pontos ao cluster principal
        clusters[clusterData.primary].forEach(t => {
            transtornoScores[t] += priorityScores[position].primary;
        });

        // Adiciona pontos ao cluster secundário (se existir)
        if (clusterData.secondary) {
            clusters[clusterData.secondary].forEach(t => {
                transtornoScores[t] += priorityScores[position].secondary;
            });
        }
    }
});

// 🔹 Pontuação das Barras da Pergunta 11 🔹
const slider11Scores = {
    "11a": {
        "1": { t7: 2, t6: 2, t4: 1 },  // Antissocial, Narcisista, Borderline
        "2": { t3: 2, t5: 1 },  // Paranoide, Histriônico
        "3": { t2: 1, t9: 1 },  // Esquizotípico, Dependente
        "4": { t8: 2, t1: 1 },  // Obsessivo-Compulsivo, Esquizoide
        "5": { t10: 2, t9: 2 }  // Evitativo, Dependente
    },
    "11b": {
        "1": { t1: 2, t3: 2 },  // Esquizoide, Paranoide
        "2": { t8: 2, t10: 1 },  // Obsessivo-Compulsivo, Evitativo
        "3": { t2: 1, t9: 1 },  // Esquizotípico, Dependente
        "4": { t6: 1, t5: 1 },  // Narcisista, Histriônico
        "5": { t4: 2, t5: 2, t7: 1 }  // Borderline, Histriônico, Antissocial
    },
    "11c": {
        "1": { t9: 2, t3: 2 },  // Dependente, Paranoide
        "2": { t8: 1, t2: 1 },  // Obsessivo-Compulsivo, Esquizotípico
        "3": { t1: 2, t7: 1 },  // Esquizoide, Antissocial
        "4": { t3: 2, t6: 1 },  // Paranoide, Narcisista
        "5": { t7: 2, t6: 2, t4: 1 }  // Antissocial, Narcisista, Borderline
    },
    "11d": {
        "1": { t9: 2, t10: 2 },  // Dependente, Evitativo
        "2": { t8: 1, t1: 1 },  // Obsessivo-Compulsivo, Esquizoide
        "3": { t2: 1, t4: 1 },  // Esquizotípico, Borderline
        "4": { t3: 2, t6: 1 },  // Paranoide, Narcisista
        "5": { t7: 2, t6: 2, t4: 1 }  // Antissocial, Narcisista, Borderline
    }
};

["11a", "11b", "11c", "11d"].forEach(slider => {
    let value = savedAnswers[slider];
    if (value && slider11Scores[slider][value]) {
        Object.keys(slider11Scores[slider][value]).forEach(t => {
            transtornoScores[t] += slider11Scores[slider][value][t];
        });
    }
});

// 🔹 Pontuação da Pergunta 12 (Ordenação de Prioridades)
const priorityScores12 = {
    "Independência e controle sobre o que acontece comigo": { main: ["t7", "t6"], secondary: "t3" },  // Antissocial, Narcisista, Paranoide
    "Segurança e estabilidade, evitando erros e imprevistos": { main: ["t9", "t10"], secondary: "t8" },  // Dependente, Evitativo, Obsessivo-Compulsivo
    "Relacionamentos e aprovação das pessoas ao meu redor": { main: ["t5", "t4"], secondary: "t9" },  // Histriônico, Borderline, Dependente
    "Criatividade, novidade e liberdade para explorar novas ideias": { main: ["t2", "t1"], secondary: "t7" },  // Esquizotípico, Esquizoide, Antissocial
    "Ordem e previsibilidade, saber que tudo está bem estruturado": { main: ["t8", "t3"], secondary: "t10" }  // Obsessivo-Compulsivo, Paranoide, Evitativo
};

// 🔹 Pontuação da Pergunta 12 (Ordenação de Prioridades)
const positionScores12 = {
"12p1": { main: 2, secondary: 1 },  // 1º lugar → +2 para principais, +1 para secundário
"12p2": { main: 1, secondary: 0 },  // 2º lugar → +1 para principais
"12p3": { main: 0, secondary: 1 }   // 3º lugar → +1 para secundário
};

// 🔹 Itera sobre as respostas do usuário na Pergunta 12
Object.keys(positionScores12).forEach(positionKey => {
let selectedOption = savedAnswers[positionKey];  // Obtém a opção escolhida pelo usuário

if (selectedOption && priorityScores12[selectedOption]) {
    let points = priorityScores12[selectedOption];  // Obtém os transtornos relacionados
    let scoreData = positionScores12[positionKey];  // Obtém os valores de pontuação

    // 🔹 Adiciona pontos aos transtornos principais
    points.main.forEach(t => {
        if (transtornoScores.hasOwnProperty(t)) {
            transtornoScores[t] += scoreData.main;
        }
    });

    // 🔹 Adiciona pontos ao transtorno secundário
    if (points.secondary && transtornoScores.hasOwnProperty(points.secondary)) {
        transtornoScores[points.secondary] += scoreData.secondary;
    }
}
});

// 🔹 Critério de Desempate (Pergunta 12)
let scoresArray = Object.entries(transtornoScores);

// 1️⃣ Ordena os transtornos pela pontuação
scoresArray.sort((a, b) => b[1] - a[1]);

// 2️⃣ Verifica se há empate entre os dois transtornos mais pontuados
if (scoresArray.length > 1 && scoresArray[0][1] === scoresArray[1][1]) {
    let tiedTranstornos = [scoresArray[0][0], scoresArray[1][0]]; // Pegamos os transtornos empatados

    // 3️⃣ Se um deles pontuou no 1º lugar da Pergunta 12, recebe +1 ponto extra
    let firstPlace = savedAnswers["12p1"]; 
    if (firstPlace && priorityScores12[firstPlace]) {
        let firstTranstornos = priorityScores12[firstPlace].main; // Os principais do 1º lugar
        let winner = firstTranstornos.find(t => tiedTranstornos.includes(t));
        if (winner) {
            transtornoScores[winner] += 1; // Desempate!
        } else {
            // 4️⃣ Se nenhum deles pontuou no 1º lugar, verificamos o 2º lugar
            let secondPlace = savedAnswers["12p2"];
            if (secondPlace && priorityScores12[secondPlace]) {
                let secondTranstornos = priorityScores12[secondPlace].main;
                let winner = secondTranstornos.find(t => tiedTranstornos.includes(t));
                if (winner) {
                    transtornoScores[winner] += 1; // Desempate!
                } else {
                    // 5️⃣ Se ainda houver empate, usamos a ordem de prioridade fixa
                    transtornoScores[tiedTranstornos[0]] += 1; // O que apareceu primeiro vence
                }
            }
        }
    }
}

// 🔹 Após calcular os transtornos, encontra o arquétipo correspondente 🔹
let chosenArchetype = getArchetype(transtornoScores);

// 🔹 Salva o arquétipo junto com os transtornos no localStorage 🔹
localStorage.setItem("chosenArchetype", chosenArchetype);


// 🔹 Agora salva os resultados e redireciona
localStorage.setItem("transtornoScores", JSON.stringify(transtornoScores)); 
window.location.href = "results.html";
}
