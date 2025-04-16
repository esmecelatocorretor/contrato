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

        const contractText = `    
CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE CORRETAGEM IMOBILIÁRIA - COM EXCLUSIVIDADE
IDENTIFICAÇÃO DAS PARTES CONTRATANTES
Proprietário do Imóvel: ${ownerName}
Nacionalidade: ${nationality}
Estado Civil: ${maritalStatus}
Profissão: ${occupation}
Número do RG: ${rgNumber}
Número do CPF: ${cpfNumber}
Endereço Completo do Proprietário: ${ownerPropertyAddress}

CORRETOR DE IMÓVEIS (CONTRATADO):
EDSON VIANA ESMECELATO, brasileiro, casado, Corretor de Imóveis, inscrito no CRECI sob o nº 44.628 - 6ª Região/PR, Avaliador de Imóveis inscrito no CNA 47.536 -DF, Perito Judicial Habilitado junto ao TJPR, RG nº 1.650.923-0 SSP/PR, CPF nº 557.095.409-00, residente e domiciliado na Rua Francisco Rodrigues de Souza, 148, Centro, CEP 85.990-000, Terra Roxa – PR.
As partes acima identificadas celebram o presente Contrato de Prestação de Serviços de Corretagem Imobiliária com Exclusividade, que será regido pelas cláusulas e condições seguintes.
CLÁUSULA 1ª – DO OBJETO
O presente contrato tem por objeto a prestação de serviços de corretagem imobiliária pelo CONTRATADO para oferta, promoção e intermediação da venda do imóvel de propriedade do CONTRATANTE.
CLÁUSULA 2ª – DO IMÓVEL
O imóvel ${propertyType}, objeto deste contrato está localizado no endereço: ${propertyAddressFull}.
CLÁUSULA 3ª – DA REGULARIZAÇÃO
O imóvel será entregue livre e desembaraçado de quaisquer ônus ou pendências que possam impedir sua comercialização, com todos os documentos e certidões necessários à efetivação da transferência devidamente apresentados pelo CONTRATANTE.
CLÁUSULA 4ª – DOS DOCUMENTOS
Fazem parte integrante deste contrato todos os documentos e certidões exigíveis para a negociação e transferência do imóvel.
CLÁUSULA 5ª – EXCLUSIVIDADE
Durante a vigência deste contrato, o CONTRATANTE se compromete a não negociar, intermediar ou vender o imóvel diretamente ou por terceiros sem o intermédio do CORRETOR. Caso descumpra esta cláusula, deverá pagar a comissão convencionada de 1,00% (um  por cento) prevista, no Parágrafo Único da CLÁUSULA 9ª.
CLÁUSULA 6ª – TRANSFERÊNCIA
A responsabilidade pela transferência do imóvel ao comprador será exclusiva do CONTRATANTE, cabendo ao CORRETOR apenas a mediação da venda até sua formalização inicial.
CLÁUSULA 7ª – DA INTERMEDIAÇÃO
O CORRETOR compromete-se a atuar com diligência, ética e honestidade, utilizando todos os meios disponíveis para promover a venda do imóvel, inclusive com anúncios em sites, redes sociais, placas, atendimento a interessados e visitas ao imóvel.
CLÁUSULA 8ª – CUSTOS
Todos os custos relativos à divulgação, publicidade, visitas e manutenção de anúncios ficarão por conta do CORRETOR, sem direito a reembolso, exceto conforme previsto na cláusula de exclusividade.
CLÁUSULA 9ª – COMISSÃO POR INTERMEDIAÇÃO
Fica ajustado que, em caso de venda realizada por intermédio do CORRETOR, o mesmo fará jus a uma comissão de ${commission}% (${commissionValue}) sobre o valor total da transação, a ser paga no ato do sinal ou da primeira parcela.
Parágrafo Único – Cláusula de Exclusividade
Caso a venda ocorra diretamente pelo CONTRATANTE ou por terceiros, sem a intermediação do CORRETOR, durante a vigência do contrato ou sua prorrogação, será devida ao CORRETOR uma comissão de ${exclusiveCommission}% (${exclusiveCommissionValue}) sobre o valor da venda, a título de exclusividade, cobrindo os investimentos realizados em site, publicidade, divulgação e manutenção do imóvel em campanha ativa de venda.
CLÁUSULA 10ª – PREÇO DO IMÓVEL
O imóvel será ofertado pelo valor de R$ ${propertyValue}, (${propertyValueText}), salvo autorização expressa e por escrito do CONTRATANTE para negociação em condições diferentes.
CLÁUSULA 11ª – VENDA POR PREÇO SUPERIOR
Caso o imóvel venha a ser vendido por valor superior ao estipulado, a comissão será calculada sobre o valor efetivo da venda.
CLÁUSULA 12ª – PRAZO CONTRATUAL
O presente contrato terá vigência de 365 (trezentos e sessenta e cinco) dias, contados a partir da data de sua assinatura.
Parágrafo Único – Renovação Automática
O contrato será automaticamente prorrogado por igual período, caso não haja manifestação contrária de qualquer das partes, por escrito, com antecedência mínima de 30 (trinta) dias da data de término.
CLÁUSULA 13ª – NEGOCIAÇÕES EM ANDAMENTO
Caso a venda seja concluída até 90 (noventa) dias após o fim do contrato, com comprador que tenha tido contato prévio com o imóvel por ação do CORRETOR, a comissão de 3% será devida normalmente.
CLÁUSULA 14ª – LIMITES DO CORRETOR
O CORRETOR compromete-se a não utilizar intermediários, salvo mediante autorização expressa do CONTRATANTE. Em caso de uso de terceiros autorizados, a comissão poderá ser dividida entre os envolvidos, conforme acordo entre os corretores.
CLÁUSULA 15ª – DO ENCERRAMENTO
Encerrado o prazo contratual sem renovação, o CORRETOR deverá devolver todos os documentos e chaves eventualmente recebidos do CONTRATANTE.
CLÁUSULA 16ª – INDENIZAÇÕES
O CORRETOR não terá direito a reembolso ou indenização por despesas realizadas após o término da vigência contratual.
CLÁUSULA 17ª – AUTORIZAÇÃO PARA USO DE IMAGEM DO IMÓVEL
O CONTRATANTE autoriza expressamente o CORRETOR a fotografar, filmar e divulgar imagens do imóvel objeto deste contrato em sites de anúncios imobiliários, redes sociais, plataformas digitais, materiais publicitários impressos ou eletrônicos, com a finalidade exclusiva de promover a venda do bem. Essa autorização é concedida de forma gratuita, por prazo indeterminado, enquanto durar a campanha de venda, e abrange o uso total ou parcial das imagens, sem identificação pessoal do CONTRATANTE, resguardando sua privacidade.
CLÁUSULA 18ª – DO FORO
Para dirimir quaisquer dúvidas ou controvérsias oriundas do presente contrato, fica eleito o Foro da Comarca de Terra Roxa – PR, com renúncia expressa de qualquer outro, por mais privilegiado que seja.
Terra Roxa – PR, ${signatureDate}.


CONTRATANTE:
________________________________________
Nome: ${ownerName}


CORRETOR:
________________________________________
EDSON VIANA ESMECELATO – CRECI 44.628 PR
TESTEMUNHAS:
1. Nome: _______________________ – CPF: ___________________

2. Nome: _______________________ – CPF: ___________________
`;

        const contractWithStyles = `
        <div style="font-family: Arial, sans-serif; font-size: 14px; text-align: justify; margin-left: 5cm; margin-right: 1cm; margin-top: 2cm; margin-bottom: 2cm;">
            ${contractText.replace(/\n/g, '<br>')}
        </div>
        `;

        generatedContract.innerHTML = contractWithStyles;
    }
});
