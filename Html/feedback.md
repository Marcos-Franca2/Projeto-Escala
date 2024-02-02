1 - NÃO DESMOTIVE PELOS COMENTÁRIOS, A INTENÇÃO É AJUDAR.

## ORGANIZAÇÃO APLICAÇÃO ##
1 - Não faz sentido eu clicar no botão de menu e ir para uma outra página html (no caso menu.html).
O correto seria uma div oculta que ao clicar no menu, tu mostrasse ele.

2 - Provavelmente tu fez de propósito, mas o site não está responsivo. Hoje em dia todas aplicações acabam sendo responsivas.

##-----------------------------------------------------------------------------------------------------------##
## CÓDIGO RUIM ## 
1 - Sei que é um código seu, massss evite brincar (filhodobil)

2 - Depois que o projeto estiver pronto, evite deixar console.log no código

3 - a função cadastrarMotorista está fazendo duas funções. Cadastrando e consultando motoristas.
Evite fazer duas coisas em uma única função, pois dessa forma ela não poderá ser reaproveitada em uma tela
que de fato tu queira apenas cadastrar.

4 A função cadatrarnovohorario() está uma loucura rsrs
 5 - NUNCA myFunction()

6 - horaselect2, horariox, horax, radioselect,radiobox ETC. Horrivel para entender e dar manutenção no código.
as variáveis genéricas só fazendo debug para entender de fato o que está ocorrendo nesse miolo.

7 - Tem muita bagunça no código. Talvez pegar um dia para bater um papo.

##-----------------------------------------------------------------------------------------------------------##
## BELEZA ##

1 - Cuidado com as cores, o botão na tela index "MENU" é um azul junto com o fundo verde, não dá tanto destaque.
Além disso a cor preta como texto do botão também não é muito boa para leitura.

2 - O menu ficou bem legal, apenas um probleminha na animação do texto quando eu passo o mouse em cima. O texto
vai se ajustando conforme a descrição do menu é exibida. 

##-----------------------------------------------------------------------------------------------------------##
## PROBLEMA DE USABILIDADE ## 

1 - O sistema permite eu cadastrar um motorista sem colocar nome e matricula RESOLVIDO  

2 - O sistema permite cadastrar uma matricula sem o nome RESOLVIDO 

3 - Cadastrei um motorista errado, não achei uma opção para editar ou deletar. RESOLVIDO

4 - No cadastro de horário ao clicar em um dia da semana o botão não muda de cor, assim se eu tomar água e voltar
não saberei qual dia da semana foi selecionado.

5 - Está permitindo escalar motoristas no mesmo horário. RESOLVIDO

6 - Está permitindo selecionar múltiplos motoristas e múltiplos horários juntos. MOTORISTA É DE PROPOSITO 

7 - Quando saio da tela de escala, ao voltar os dados não estão na tela. Mesmo após eu selecionar a data que havia feito
a escala.

DICA - No cadastro dos horários, poderia ter uma opção para copiar os horários de outro dia da semana. Posso esta
enganado, mas acredito que os horários dos dias da semana se repetem.

DICA2 - Ao clicar em um horário da semana que ainda não possui horas cadastrada, ocorre erro. 
O erro não está interferindo na aplicação, mas é deselegante o console ficar com erros.
##-----------------------------------------------------------------------------------------------------------##

## CONSIDERAÇÕES FINAIS ## 
Primeiramente parabéns! 
Código feio, interface não muito bonita não importa tanto INICIALMENTE, o importante é o produto final.

Acho que depois que arrumar os problemas de usabilidade, terá um bom produto final que atende a necessidade na qual
foi proposto.

Referente a interface, ela é bem feia, mas é muito dificil ter criatividade para criar algo bonito.
Tente procurar uma fonte de inspiração quando for fazer algo.

Por exemplo na tela de cadastro de horas, olha como é muito melhor essa:
https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4bd14d86181161.5d9210559882d.png

Agora referente ao código tente pensar da seguinte forma.

A FUNÇÃO FAZ APENAS UMA COISA

EU ESTOU ENTENDENDO O CÓDIGO

ESTÁ CLARO O QUE O CÓDIGO ESTÁ FAZENDO

Pois tenho certeza, que daqui uns 3 meses, se tu for precisar adicionar alguma coisa nesse código vai ficar puto
com você mesmo, pelas coisas não estar bem claro.

Além disso sempre observe.

"SE ALGUM CÓDIGO SE REPETE MUITO, TEM COMO FAZER MELHOR"

Novamente, PARABÉNS, E LEVE ESSA ANALISE COM BONS OLHOS PARA TU MELHORAR.

##-----------------------------------------------------------------------------------------------------------##