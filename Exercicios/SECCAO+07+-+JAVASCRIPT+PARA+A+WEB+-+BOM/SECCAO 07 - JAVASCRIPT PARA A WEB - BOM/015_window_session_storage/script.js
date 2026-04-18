/* 
O window.sessionStorage é uma interface que permite armazenar dados no
navegador do usuário de forma temporária. É semelhante ao localStorage,
mas com algumas diferenças importantes:
1. Persistência: Os dados armazenados no sessionStorage são
   temporários e são removidos assim que a aba ou janela do navegador
   é fechada. Isso significa que os dados não persistem entre sessões
   de navegação.
2. Escopo: O sessionStorage é específico para cada aba ou janela do
   navegador. Isso significa que os dados armazenados em uma aba não
   são acessíveis a partir de outra aba ou janela, mesmo que estejam
   no mesmo domínio.
3. Limite de armazenamento: O sessionStorage tem um limite de
    armazenamento semelhante ao localStorage, geralmente em torno de
    5MB por domínio, dependendo do navegador.
4. Uso: O sessionStorage é útil para armazenar dados temporários que
   são relevantes apenas para a sessão atual do usuário, como
   informações de formulário, dados de autenticação ou dados que
   não precisam ser persistentes.
5. API: A API do sessionStorage é semelhante à do localStorage, com
    métodos como setItem, getItem, removeItem e clear para gerenciar
    os dados armazenados.
6. Acesso: O sessionStorage é acessível apenas a partir do mesmo
   domínio, protocolo e porta. Isso significa que os dados
   armazenados em uma aba não podem ser acessados a partir de outra
   aba ou janela, mesmo que estejam no mesmo domínio.
7. Segurança: O sessionStorage é mais seguro para armazenar dados
    temporários, pois os dados não são persistentes e não podem ser
    acessados a partir de outras abas ou janelas.
8. Limitações: O sessionStorage tem as mesmas limitações de
    armazenamento que o localStorage, como o limite de 5MB por
    domínio e a necessidade de armazenar dados como strings.
9. Compatibilidade: O sessionStorage é suportado pela maioria dos
    navegadores modernos, mas pode não ser suportado em navegadores
    mais antigos.
10. Desempenho: O sessionStorage pode ser mais rápido do que o
    localStorage, pois os dados são armazenados em memória e não
    precisam ser gravados em disco.
11. Eventos: O sessionStorage não dispara eventos de armazenamento
    como o localStorage, o que significa que não há notificações
    quando os dados são alterados.
12. Limpeza: O sessionStorage é limpo automaticamente quando a aba
    ou janela do navegador é fechada, enquanto o localStorage
    persiste os dados até que sejam removidos manualmente.
*/

// vamos ver onde o sessionStorage está na nossa página
// Application > Session Storage > http://xxxx.

// adicionar um valor no sessionStorage
sessionStorage.setItem('minha_chave', 'Esta informação vai ser guardada no sessionStorage');

// buscar o valor no sessionStorage
let chave1 = 'minha_chave';
let valor1 = sessionStorage.getItem(chave1);

// se a chave não existir, o valor será null

// remover uma chave do sessionStorage
sessionStorage.removeItem('minha_chave_que_nao_existe');
// ou remover todas as chaves do sessionStorage
sessionStorage.clear();
// Não é necessário limpar o sessionStorage, pois ele é limpo automaticamente quando a aba ou janela do navegador é fechada.

// MUITO IMPORTANTE: Nunca deve armazenar informações sensíveis no localStorage ou sessionStorage,