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
IDENTIFICAÇÃO DAS PARTES:
CONTRATANTE e Ou Proprietário do Imóvel: ${ownerName}, Nacionalidade: ${nationality}, Estado Civil: ${maritalStatus}, Profissão: ${occupation}, Número do RG: ${rgNumber}, Número do CPF: ${cpfNumber}, Endereço Completo do Proprietário: ${ownerPropertyAddress}.

CORRETOR: EDSON VIANA ESMECELATO, brasileiro, casado, Corretor de Imóveis – CRECI 44.628/PR, CNAI 47.536/DF, RG 1.650.923-0 SSP/PR, CPF 557.095.409-00, residente em Terra Roxa – PR.

As partes firmam o presente contrato de corretagem com exclusividade, regido pelas cláusulas seguintes:

CLÁUSULA 1. Objeto: Intermediação da venda do imóvel descrito na Cláusula 2, por parte do CORRETOR.

CLÁUSULA 2. Imóvel: ${propertyType}, objeto deste contrato está localizado no endereço: ${propertyAddressFull}.

CLÁUSULA 3. Regularização: O imóvel será entregue livre de ônus, com toda documentação necessária fornecida pelo CONTRATANTE.

CLÁUSULA 4. Documentos: Integrarão este contrato todos os documentos e certidões exigidos para a venda.

CLÁUSULA 5. Exclusividade: O CONTRATANTE se compromete a não negociar o imóvel por conta própria ou por terceiros. Em caso de descumprimento, pagará 1% (um por cento) do valor da venda ao CORRETOR, constante na CLÁUSULA 9.

CLÁUSULA 6. Transferência: Responsabilidade do CONTRATANTE. O CORRETOR atua apenas na mediação.

CLÁUSULA 7. Atuação do Corretor: O CORRETOR se compromete a divulgar o imóvel e atender interessados com ética e empenho.

CLÁUSULA 8. Custos de Divulgação: Correrão por conta do CORRETOR, sem reembolso.

CLÁUSULA 9. Comissão: Será de ${commission}% (${commissionValue})sobre o valor da venda. Se a venda for feita sem o CORRETOR, durante a vigência do contrato, este terá direito a ${exclusiveCommission}% (${exclusiveCommissionValue}) pela exclusividade.

CLÁUSULA 10. Preço: O valor inicial de venda será de R$ ${propertyValue}, (${propertyValueText}), definido pelo CONTRATANTE. Qualquer alteração exigirá autorização expressa.

CLÁUSULA 11. Venda por valor superior: A comissão será calculada sobre o valor final da venda.

CLÁUSULA 12. Prazo: Vigência de 365 dias a partir da assinatura, com renovação automática por igual período, salvo manifestação prévia por escrito.

CLÁUSULA 13. Negociações em andamento: Se a venda ocorrer até 90 dias após o término do contrato, com comprador captado pelo CORRETOR, a comissão será devida.

CLÁUSULA 14. Intermediários: Vedado o uso de terceiros sem autorização. Havendo, a comissão poderá ser dividida.

CLÁUSULA 15. Encerramento: O CORRETOR deverá devolver final do contrato os documentos e chaves que lhes foram entregues.

CLÁUSULA 16. Despesas após vigência: Não serão reembolsadas.

CLÁUSULA 17. Uso de Imagem: O CONTRATANTE autoriza o uso de imagens do imóvel para divulgação, sem identificação pessoal.

CLÁUSULA 18. Foro: Fica eleito o foro de Terra Roxa – PR para dirimir eventuais questões.

Terra Roxa – PR, ${signatureDate}.

CONTRATANTE:


Nome: ${ownerName}

CORRETOR:


EDSON VIANA ESMECELATO – CRECI 44.628 PR

Testemunhas:

_______________________________________ – CPF: ___________________

_______________________________________ – CPF: ___________________
`;

        const contractWithStyles = `
        <div style="font-family: Arial, sans-serif; font-size: 14px; text-align: justify; margin-left: 5cm; margin-right: 1cm; margin-top: 2cm; margin-bottom: 2cm;">
            ${contractText.replace(/\n/g, '<br>')}
        </div>
        `;

        generatedContract.innerHTML = contractWithStyles;
    }
});
