### **Requisitos do Jogo de Forca**  

#### **1. Requisitos Funcionais**  

- **RF01**: O sistema deve permitir partidas no modo singleplayer (jogador contra o computador).  
- **RF02**: O sistema deve permitir partidas no modo multiplayer (jogador contra jogador online).  
- **RF03**: O sistema deve permitir que o jogador escolha uma categoria de palavras antes de iniciar a partida.  
- **RF04**: O jogo deve exibir um traço “_” para cada letra da palavra oculta.  
- **RF05**: O sistema deve permitir que o jogador digite ou clique em letras para adivinhá-las.  
- **RF06**: O sistema deve exibir feedback visual para acertos e erros (exemplo: cor diferente para letras erradas).  
- **RF07**: O sistema deve permitir um número limitado de tentativas (exemplo: 6 erros máximos).  
- **RF08**: O sistema deve indicar a quantidade de tentativas restantes.  
- **RF09**: O sistema deve declarar um vencedor quando a palavra for descoberta ou o número máximo de tentativas for atingido.  
- **RF10**: O sistema deve conceder pontos para cada letra acertada.  
- **RF11**: O sistema deve exibir a pontuação final ao fim da partida.  
- **RF12**: O sistema deve permitir um ranking de jogadores.  
- **RF13**: O sistema deve permitir ajustes no tempo limite da partida.  
- **RF14**: O sistema deve oferecer suporte a diferentes idiomas.  
- **RF15**: O sistema deve permitir a ativação de um modo daltônico para melhor visualização.  
- **RF16**: O sistema deve ser compatível com leitores de tela para acessibilidade.  

---

#### **2. Requisitos Não Funcionais**  

- **RNF01**: O jogo deve carregar em menos de 2 segundos em conexões de internet banda larga.  
- **RNF02**: O tempo de resposta para uma jogada deve ser inferior a 0.5 segundos.  
- **RNF03**: O sistema deve criptografar dados sensíveis dos jogadores (como senha).  
- **RNF04**: O sistema deve proteger contra ataques de injeção SQL e XSS.  
- **RNF05**: O sistema deve suportar pelo menos 1000 jogadores simultâneos sem perda de desempenho.  
- **RNF06**: O sistema deve ser compatível com navegadores modernos (Chrome, Firefox, Edge, Safari).  
- **RNF07**: O sistema deve ser responsivo e funcionar bem em dispositivos móveis e desktops.  
