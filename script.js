<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Gerador de Contrato</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/docx/8.0.2/docx.umd.min.js"></script>
</head>
<body>
    <h2>Formulário do Contrato</h2>
    <form id="contractGenerator">
        <label>Nome do Proprietário: <input type="text" id="ownerName" required></label><br>
        <label>Nacionalidade: <input type="text" id="nationality" required></label><br>
        <label>Estado Civil: <input type="text" id="maritalStatus" required></label><br>
        <label>Profissão: <input type="text" id="occupation" required></label><br>
        <label>RG: <input type="text" id="rgNumber" required></label><br>
        <label>CPF: <input type="text" id="cpfNumber" required></label><br>
        <label>Endereço Proprietário: <input type="text" id="propertyAddressFull" required></label><br>
        <label>Tipo de Imóvel: <input type="text" id="propertyType" required></label><br>
        <label>Endereço do Imóvel: <input type="text" id="propertyAddressFullImovel" required></label><br>
        <label>Comissão (%): <input type="text" id="commission" required></label><br>
        <label>Valor da Comissão: <input type="text" id="commissionValue" required></label><br>
        <label>Comissão Exclusiva (%): <input type="text" id="exclusiveCommission" required></label><br>
        <label>Valor da Comissão Exclusiva: <input type="text" id="exclusiveCommissionValue" required></label><br>
        <label>Valor do Imóvel: <input type="text" id="propertyValue" required></label><br>
        <label>Valor do Imóvel por extenso: <input type="text" id="propertyValueText" required></label><br>
        <label>Data da Assinatura: <input type="text" id="signatureDate" required></label><br>
        <button type="submit">Gerar Contrato</button>
    </form>

    <hr>
    <h2>Contrato Gerado</h2>
    <div id="generatedContract" style="white-space: pre-wrap; border: 1px solid #ccc; padding: 15px;"></div>

    <button id="generateDocx">Baixar Contrato Word (ABNT)</button>

    <script>
        document.addEventListener('DOMContentLoaded', function () {
            const form = document.getElementById('contractGenerator');
            const generatedContract = document.getElementById('generatedContract');

            form.addEventListener('submit', function (e) {
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

CLÁUSULA 1. Objeto: Constitui objeto deste contrato a prestação de serviços de intermediação para venda do imóvel descrito na Cláusula 2, por parte do CORRETOR, com exclusividade.

CLÁUSULA 2. Imóvel: ${propertyType}, objeto deste contrato está localizado no endereço: ${propertyAddressFull}.

CLÁUSULA 3. Regularização: O imóvel será entregue livre e desembaraçado de quaisquer ônus, com toda a documentação necessária fornecida pelo CONTRATANTE.

CLÁUSULA 4. Documentos: Integrarão este contrato todos os documentos e certidões exigidos para a venda.

CLÁUSULA 5. Exclusividade: O CONTRATANTE se compromete a não negociar o imóvel por conta própria ou por terceiros. Em caso de descumprimento, pagará 1% (um por cento) do valor da venda ao CORRETOR, constante na CLÁUSULA 9.

CLÁUSULA 6. Transferência: Responsabilidade do CONTRATANTE. O CORRETOR atua apenas na mediação.

CLÁUSULA 7. Atuação do Corretor: O CORRETOR se compromete a divulgar o imóvel e atender interessados com ética e empenho.

CLÁUSULA 8. Custos de Divulgação: Correrão por conta do CORRETOR, sem reembolso.

CLÁUSULA 9. Comissão: Será de ${commission}% (${commissionValue}) sobre o valor da venda. Se a venda for realizada sem a intermediação do CORRETOR, durante a vigência deste contrato, este fará jus a ${exclusiveCommission}% (${exclusiveCommissionValue}) em razão da exclusividade.

CLÁUSULA 10. Preço: O valor inicial de venda será de R$ ${propertyValue}, (${propertyValueText}), definido pelo CONTRATANTE. Qualquer alteração exigirá autorização expressa.

CLÁUSULA 11. Venda por valor superior: A comissão será calculada sobre o valor final da venda.

CLÁUSULA 12. Prazo: Vigência de 365 dias a partir da assinatura, com renovação automática por igual período, salvo manifestação prévia por escrito.

CLÁUSULA 13. Negociações em andamento: Se a venda ocorrer até 90 dias após o término do contrato, com comprador captado pelo CORRETOR, a comissão será devida.

CLÁUSULA 14. Intermediários: Vedado o uso de terceiros sem autorização. Havendo, a comissão poderá ser dividida.

CLÁUSULA 15. Encerramento: O CORRETOR deverá devolver final do contrato os documentos e chaves que lhes foram entregues.

CLÁUSULA 16. Despesas após vigência: Não serão reembolsadas.

CLÁUSULA 17. Uso de Imagem: O CONTRATANTE autoriza, de forma gratuita e por prazo indeterminado, a utilização de imagens e vídeos do imóvel para fins de divulgação comercial, vedado o uso de dados pessoais.

CLÁUSULA 18. Foro: Fica eleito o foro de Terra Roxa – PR para dirimir eventuais questões.

Terra Roxa – PR, ${signatureDate}.

CONTRATANTE:
Nome: ${ownerName}

CORRETOR:
EDSON VIANA ESMECELATO – CRECI 44.628 PR

Testemunhas:
_______________________________________ – CPF: ___________________
_______________________________________ – CPF: ___________________`;

                generatedContract.innerText = contractText;
            }

            document.getElementById("generateDocx").addEventListener("click", async function () {
                const { Document, Packer, Paragraph, TextRun, AlignmentType, PageOrientation } = window.docx;

                const contractText = document.getElementById('generatedContract').innerText.split('\n');

                const paragraphs = contractText.map(line =>
                    new Paragraph({
                        children: [new TextRun({ text: line.trim(), font: "Arial", size: 24 })],
                        alignment: AlignmentType.JUSTIFIED,
                        spacing: { line: 360 }
                    })
                );

                const doc = new Document({
                    sections: [{
                        properties: {
                            page: {
                                margin: {
                                    top: 1700,
                                    right: 1134,
                                    bottom: 1134,
                                    left: 1700,
                                },
                                size: {
                                    orientation: PageOrientation.PORTRAIT,
                                },
                            },
                        },
                        children: paragraphs
                    }]
                });

                const blob = await Packer.toBlob(doc);
                const url = URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;
                link.download = "Contrato_Corretagem_ABNT.docx";
                link.click();
            });
        });
    </script>
</body>
</html>
