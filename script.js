from docx import Document
from docx.shared import Pt
from docx.enum.text import WD_PARAGRAPH_ALIGNMENT

def adicionar_paragrafo_formatado(documento, texto):
    paragrafo = documento.add_paragraph()
    run = paragrafo.add_run(texto)
    run.font.name = 'Arial'
    run.font.size = Pt(12)
    paragrafo.alignment = WD_PARAGRAPH_ALIGNMENT.JUSTIFY
    paragrafo.paragraph_format.line_spacing = 1.5

# ==== INPUT MANUAL (pode substituir por input() se desejar digitar) ====
ownerName = "João da Silva"
nationality = "Brasileiro"
maritalStatus = "Casado"
occupation = "Engenheiro"
rgNumber = "1.234.567-8"
cpfNumber = "123.456.789-00"
ownerPropertyAddress = "Rua das Palmeiras, 123, Centro, Terra Roxa - PR"
propertyType = "Casa residencial"
propertyAddressFull = "Av. Brasil, 456, Terra Roxa - PR"
commission = "6"
commissionValue = "R$ 30.000,00"
exclusiveCommission = "3"
exclusiveCommissionValue = "R$ 15.000,00"
propertyValue = "500.000,00"
propertyValueText = "quinhentos mil reais"
signatureDate = "22 de abril de 2025"

# ==== CONTRATO ====
document = Document()
adicionar_paragrafo_formatado(document, "CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE CORRETAGEM IMOBILIÁRIA - COM EXCLUSIVIDADE")
document.add_paragraph()  # Espaço

adicionar_paragrafo_formatado(document, f"IDENTIFICAÇÃO DAS PARTES:\nCONTRATANTE e/ou Proprietário do Imóvel: {ownerName}, "
    f"Nacionalidade: {nationality}, Estado Civil: {maritalStatus}, Profissão: {occupation}, Número do RG: {rgNumber}, "
    f"Número do CPF: {cpfNumber}, Endereço Completo do Proprietário: {ownerPropertyAddress}.")

adicionar_paragrafo_formatado(document, "CORRETOR: EDSON VIANA ESMECELATO, brasileiro, casado, Corretor de Imóveis – "
    "CRECI 44.628/PR, CNAI 47.536/DF, RG 1.650.923-0 SSP/PR, CPF 557.095.409-00, residente em Terra Roxa – PR.")

adicionar_paragrafo_formatado(document, "As partes firmam o presente contrato de corretagem com exclusividade, regido pelas cláusulas seguintes:")

adicionar_paragrafo_formatado(document, f"CLÁUSULA 1. Objeto: Constitui objeto deste contrato a prestação de serviços de intermediação para "
    f"venda do imóvel descrito na Cláusula 2, por parte do CORRETOR, com exclusividade.")

adicionar_paragrafo_formatado(document, f"CLÁUSULA 2. Imóvel: {propertyType}, localizado no endereço: {propertyAddressFull}.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 3. Regularização: O imóvel será entregue livre e desembaraçado de quaisquer ônus, "
    "com toda a documentação necessária fornecida pelo CONTRATANTE.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 4. Documentos: Integrarão este contrato todos os documentos e certidões exigidos para a venda.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 5. Exclusividade: O CONTRATANTE se compromete a não negociar o imóvel por conta própria ou por terceiros. "
    "Em caso de descumprimento, pagará 1% (um por cento) do valor da venda ao CORRETOR, conforme CLÁUSULA 9.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 6. Transferência: Responsabilidade do CONTRATANTE. O CORRETOR atua apenas na mediação.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 7. Atuação do Corretor: O CORRETOR se compromete a divulgar o imóvel e atender interessados com ética e empenho.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 8. Custos de Divulgação: Correrão por conta do CORRETOR, sem reembolso.")

adicionar_paragrafo_formatado(document, f"CLÁUSULA 9. Comissão: Será de {commission}% ({commissionValue}) sobre o valor da venda. "
    f"Se a venda for realizada sem a intermediação do CORRETOR, durante a vigência deste contrato, este fará jus a {exclusiveCommission}% "
    f"({exclusiveCommissionValue}) em razão da exclusividade.")

adicionar_paragrafo_formatado(document, f"CLÁUSULA 10. Preço: O valor inicial de venda será de R$ {propertyValue}, ({propertyValueText}), "
    "definido pelo CONTRATANTE. Qualquer alteração exigirá autorização expressa.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 11. Venda por valor superior: A comissão será calculada sobre o valor final da venda.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 12. Prazo: Vigência de 365 dias a partir da assinatura, com renovação automática por igual período, salvo manifestação prévia por escrito.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 13. Negociações em andamento: Se a venda ocorrer até 90 dias após o término do contrato, com comprador captado pelo CORRETOR, a comissão será devida.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 14. Intermediários: Vedado o uso de terceiros sem autorização. Havendo, a comissão poderá ser dividida.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 15. Encerramento: O CORRETOR deverá devolver ao final do contrato os documentos e chaves que lhes foram entregues.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 16. Despesas após vigência: Não serão reembolsadas.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 17. Uso de Imagem: O CONTRATANTE autoriza, de forma gratuita e por prazo indeterminado, a utilização de imagens e vídeos do imóvel para fins de divulgação comercial, vedado o uso de dados pessoais.")

adicionar_paragrafo_formatado(document, "CLÁUSULA 18. Foro: Fica eleito o foro de Terra Roxa – PR para dirimir eventuais questões.")

document.add_paragraph()
adicionar_paragrafo_formatado(document, f"Terra Roxa – PR, {signatureDate}.")

document.add_paragraph()
adicionar_paragrafo_formatado(document, f"CONTRATANTE:\nNome: {ownerName}")
adicionar_paragrafo_formatado(document, "CORRETOR:\nEDSON VIANA ESMECELATO – CRECI 44.628 PR")

document.add_paragraph()
adicionar_paragrafo_formatado(document, "Testemunhas:\n_______________________________________ – CPF: ___________________")
adicionar_paragrafo_formatado(document, "_______________________________________ – CPF: ___________________")

# ==== SALVAR ====
nome_arquivo = f"Contrato_{ownerName.replace(' ', '_')}.docx"
document.save(nome_arquivo)
print(f"Contrato salvo como: {nome_arquivo}")
