document.addEventListener('DOMContentLoaded', function () {
    const contractGeneratorForm = document.getElementById('contractGenerator');
    const generatedContract = document.getElementById('generatedContract');

    contractGeneratorForm.addEventListener('submit', function (e) {
        e.preventDefault();
        generateContract();
    });

    function generateContract() {
        const ownerName = document.getElementById('ownerName').value;
        const nationality = document.getElementById('nationality').value;
        const maritalStatus = document.getElementById('maritalStatus').value;
        const occupation = document.getElementById('occupation').value;
        const rgNumber = document.getElementById('rgNumber').value;
        const cpfNumber = document.getElementById('cpfNumber').value;
        const ownerPropertyAddress = document.getElementById('propertyAddressFull').value;
        const propertyType = document.getElementById('propertyType').value;
        const propertyAddressFull = document.getElementById('propertyAddressFullImovel').value;
        const commission = document.getElementById('commission').value;
        const commissionValue = document.getElementById('commissionValue').value;
        const exclusiveCommission = document.getElementById('exclusiveCommission').value;
        const exclusiveCommissionValue = document.getElementById('exclusiveCommissionValue').value;
        const propertyValue = document.getElementById('propertyValue').value;
        const propertyValueText = document.getElementById('propertyValueText').value;
        const signatureDate = document.getElementById('signatureDate').value;

        // Crie o contrato com base nos dados inseridos
         const contractText = `     
               CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE CORRETAGEM IMOBILIÁRIA
IDENTIFICAÇÃO DAS PARTES CONTRATANTES:
                Proprietário do Imóvel: ${ownerName}
                Nacionalidade: ${nationality}
                Estado Civil: ${maritalStatus}
                Profissão: ${occupation}
                Número do RG: ${rgNumber}
                Número do CPF: ${cpfNumber}
                Endereço Completo do Proprietário: ${ownerPropertyAddress}

                CORRETOR: EDSON VIANA ESMECELATO, Brasileiro, Casado, Corretor de Imóveis Creci 44628, Carteira de Identidade nº 1.650.923-0 SSPPR, CPF Nº 557.095.409-00, capaz, residente e domiciliado na Rua Francisco Rodrigues de Souza, 148, Centro, CEP 85.990-000, Cidade de Terra Roxa, PR;

As partes acima identificadas têm entre si justo e acertado o presente Contrato de Prestação de Serviços de Corretagem Imobiliária, que se regerá pelas cláusulas seguintes e pelas condições descritas no presente.
DO OBJETO DO CONTRATO:
Cláusula 1ª. O presente contrato tem como OBJETO a prestação de serviços de corretagem, especificamente para a oferta e negociação da venda do imóvel.
DO IMÓVEL:
Cláusula 2ª. O CONTRATANTE é possuidor do imóvel ${propertyType}, localizado no seguinte endereço: ${propertyAddressFull}.
Cláusula 3ª. O imóvel objeto de venda será entregue livre e desembaraçado, ou seja, sem quaisquer ônus que possam impedir ou restringir transações. Para tanto, seguem anexas todas as certidões referentes à pessoa do CONTRATANTE e ao imóvel.
Cláusula 4ª. Faz parte do presente também, os Documentos Necessários para Transferência ao(s) Comprador(es).
DEVER DO CONTRATANTE:
Cláusula 5ª. O CONTRATANTE se compromete a não negociar e/ou vender o imóvel no período em que estiver sob a responsabilidade de venda e negociação por parte do CORRETOR. Caso ocorra tal intervenção, o CONTRATANTE ficará obrigado a realizar o pagamento da comissão ora contratada.
Cláusula 6ª. Todo trâmite concernente à transferência do imóvel para o novo comprador será de exclusiva responsabilidade do CONTRATANTE.
DA PRESTAÇÃO DE SERVIÇO:
Cláusula 7ª. O CORRETOR se compromete a realizar o trabalho de corretagem de forma criteriosa e com máxima honestidade, com o objetivo de promover a venda do imóvel supra descrito.
DO COMPROMISSO:
Cláusula 8ª. O CORRETOR, durante o tempo fixado, compromete-se a utilizar todos os meios necessários para concretizar a venda ou as negociações, respondendo por todos os gastos relacionados à oferta do imóvel. O CORRETOR não utilizará intermediários em quaisquer destas hipóteses. Em caso de intervenção de terceiros, o CORRETOR compromete-se a pagar a comissão acordada àquele que o mesmo autorizou a intermediar, seja de forma verbal ou expressa.
DA COMISSÃO:
Cláusula 9ª. Fica convencionada a comissão de ${commission}% (${commissionValue}), a ser calculada sobre o valor da venda mencionado neste contrato, se o intermediador ou apresentador do comprador for o CONTRATADO.
Parágrafo Único. Se o comprador não for intermediado ou apresentado pelo CONTRATADO, fica convencionado o pagamento de ${exclusiveCommission}% (${exclusiveCommissionValue}), referente aos serviços de publicidade e divulgação do imóvel para venda e/ou intermediação do imóvel, independentemente de quem seja o negociador, caracterizando como comissão de Exclusividade.
Cláusula 10ª. O pagamento da comissão será efetivado em dinheiro, no ato do recebimento do sinal, ou, caso não haja sinal, no ato do pagamento à vista ou da primeira parcela.
DO VALOR:
Cláusula 11ª. O CONTRATANTE oferece o imóvel pelo valor total de R$ ${propertyValue} (${propertyValueText}).
Sendo que o CORRETOR poderá ofertá-lo pelo mesmo valor, o qual será pago à vista.
Cláusula 12ª. Resta facultado ao CORRETOR negociar em condições diversas, desde que autorizado expressamente pelo CONTRATANTE. No entanto, é vedado ao CORRETOR oferecer o imóvel por valor menor.
Cláusula 13ª. Caso o imóvel seja vendido ou negociado por preço superior ao citado, o CORRETOR receberá a mesma comissão de ${commission}% (${commissionValue}), calculada sobre o preço da venda.
PRAZO:
Cláusula 14ª. O CORRETOR terá o prazo de 365 (trezentos e sessenta e cinco) dias, contados a partir da data da assinatura deste contrato.
Parágrafo Único. A renovação do contrato será automática se não houver manifestação das partes.
Cláusula 15ª. Ultrapassando essa data, caso o CORRETOR não tenha o imóvel em seu cadastro para venda, ele terá direito a receber a comissão acordada, desde que a venda ocorra dentro de 90 (noventa) dias após a data final estipulada e que as negociações ainda estejam pendentes.
Cláusula 16ª. O prazo para corretagem, acordado desde já, será automaticamente ampliado por mais 90 (noventa) dias, mesmo após a renovação, caso o CORRETOR inicie negociações concretas. O CORRETOR deverá comunicar previamente o início dessas negociações ao CONTRATANTE, que poderá unilateralmente impedir ações protelatórias do CORRETOR por meio de notificação por carta com aviso de recebimento.
Cláusula 17ª. Fica vedada a venda ou abertura de negociações por parte do CORRETOR após o prazo acordado, exceto o exposto na cláusula anterior.
Parágrafo primeiro. Após o prazo, obriga-se a devolver todos os documentos que estão em seu poder, juntamente com as chaves se tiver.
Parágrafo Segundo. O CORRETOR não terá direito a qualquer indenização ou restituição de despesas se anunciar ou investir recursos financeiros após o prazo estabelecido, incluindo-se a ressalva da cláusula anterior.
Parágrafo Terceiro. Entende-se por negociações todas as manifestações verbais ou expressas por parte do interessado.
CONDIÇÕES GERAIS:
Cláusula 18ª. O CORRETOR intermediará somente até a fase inicial da venda, sendo todos os outros trâmites de responsabilidade exclusiva e risco do CONTRATANTE.
Cláusula 19ª. O presente contrato passará a vigorar entre as partes a partir da assinatura do mesmo.
Cláusula 20ª. Todos os documentos mencionados acima fazem parte integrante deste contrato.
DO FORO:
Cláusula 21ª. Para dirimir quaisquer controvérsias oriundas do presente contrato, as partes elegem o foro da comarca de Terra Roxa, PR.
Por estarem assim justos e contratados, firmam o presente instrumento em duas vias de igual teor, juntamente com 2 (duas) testemunhas.
Terra Roxa, PR, ${signatureDate}


________________________________________
Contratante: ${ownerName}             Corretor:  EDSON VIANA ESMECELATO

_______________________________________
Testemunha 1                                                             Testemunha 2

        `;
//////////////////
// Defina os estilos inline para o contrato, incluindo margens superior e inferior
const contractWithStyles = `
    <div style="font-family: Arial, sans-serif; font-size: 14px; text-align: justify; margin-left: 5cm; margin-right: 1cm; margin-top: 2cm; margin-bottom: 2cm;">
        ${contractText}
    </div>
`;

// Exiba o contrato gerado
document.getElementById('generatedContract').innerHTML = contractWithStyles;
//////////////////
//        // Exiba o contrato gerado
//       generatedContract.textContent = contractText;
   }
    });

 
