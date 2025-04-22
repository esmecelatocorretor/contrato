import tkinter as tk
from tkinter import messagebox
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

def gerar_contrato():
    dados = {chave: entradas[chave].get() for chave in entradas}
    
    document = Document()
    adicionar_paragrafo_formatado(document, "CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE CORRETAGEM IMOBILIÁRIA - COM EXCLUSIVIDADE")
    document.add_paragraph()

    adicionar_paragrafo_formatado(document, f"IDENTIFICAÇÃO DAS PARTES:\nCONTRATANTE e/ou Proprietário do Imóvel: {dados['Nome do Proprietário']}, "
        f"Nacionalidade: {dados['Nacionalidade']}, Estado Civil: {dados['Estado Civil']}, Profissão: {dados['Profissão']}, Número do RG: {dados['RG']}, "
        f"Número do CPF: {dados['CPF']}, Endereço Completo do Proprietário: {dados['Endereço do Proprietário']}.")

    adicionar_paragrafo_formatado(document, "CORRETOR: EDSON VIANA ESMECELATO, brasileiro, casado, Corretor de Imóveis – CRECI 44.628/PR, "
        "CNAI 47.536/DF, RG 1.650.923-0 SSP/PR, CPF 557.095.409-00, residente em Terra Roxa – PR.")

    adicionar_paragrafo_formatado(document, "As partes firmam o presente contrato de corretagem com exclusividade, regido pelas cláusulas seguintes:")

    adicionar_paragrafo_formatado(document, "CLÁUSULA 1. Objeto: Prestação de serviços de intermediação para venda do imóvel descrito na Cláusula 2, com exclusividade.")
    adicionar_paragrafo_formatado(document, f"CLÁUSULA 2. Imóvel: {dados['Tipo de Imóvel']}, localizado em {dados['Endereço do Imóvel']}.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 3. Regularização: O imóvel será entregue livre de quaisquer ônus pelo CONTRATANTE.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 4. Documentos: Todos os documentos necessários serão fornecidos pelo CONTRATANTE.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 5. Exclusividade: O CONTRATANTE se compromete a não negociar por conta própria ou com terceiros.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 6. Transferência: Responsabilidade do CONTRATANTE.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 7. Atuação do Corretor: Divulgação e atendimento com ética e empenho.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 8. Custos de Divulgação: Serão arcados pelo CORRETOR.")
    
    adicionar_paragrafo_formatado(document, f"CLÁUSULA 9. Comissão: {dados['Comissão']}% ({dados['Valor da Comissão']}). "
        f"Se venda ocorrer sem a intermediação do corretor, com exclusividade, comissão será de {dados['Comissão Exclusiva']}% "
        f"({dados['Valor da Comissão Exclusiva']}).")

    adicionar_paragrafo_formatado(document, f"CLÁUSULA 10. Preço: R$ {dados['Valor do Imóvel']} ({dados['Valor do Imóvel por Extenso']}).")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 11. Venda por valor superior: Comissão sobre o valor final.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 12. Vigência: 365 dias, com renovação automática.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 13. Negociação futura: Comissão é devida se comprador for indicado pelo corretor.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 14. Intermediários: Comissão pode ser dividida se houver.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 15. Encerramento: Devolução dos documentos ao final do contrato.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 16. Despesas posteriores: Não serão reembolsadas.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 17. Imagem: Autorização de uso de fotos e vídeos para fins de divulgação.")
    adicionar_paragrafo_formatado(document, "CLÁUSULA 18. Foro: Terra Roxa – PR.")

    adicionar_paragrafo_formatado(document, f"\nTerra Roxa – PR, {dados['Data de Assinatura']}.\n")
    adicionar_paragrafo_formatado(document, f"CONTRATANTE:\nNome: {dados['Nome do Proprietário']}")
    adicionar_paragrafo_formatado(document, "CORRETOR:\nEDSON VIANA ESMECELATO – CRECI 44.628 PR")

    adicionar_paragrafo_formatado(document, "\nTestemunhas:\n_______________________________________ – CPF: ___________________")
    adicionar_paragrafo_formatado(document, "_______________________________________ – CPF: ___________________")

    nome_arquivo = f"Contrato_{dados['Nome do Proprietário'].replace(' ', '_')}.docx"
    document.save(nome_arquivo)
    messagebox.showinfo("Sucesso", f"Contrato salvo como: {nome_arquivo}")

# ===== GUI (tkinter) =====
root = tk.Tk()
root.title("Gerador de Contrato - Edson Esmecelato")
entradas = {}

campos = [
    "Nome do Proprietário", "Nacionalidade", "Estado Civil", "Profissão",
    "RG", "CPF", "Endereço do Proprietário", "Tipo de Imóvel", "Endereço do Imóvel",
    "Comissão", "Valor da Comissão", "Comissão Exclusiva", "Valor da Comissão Exclusiva",
    "Valor do Imóvel", "Valor do Imóvel por Extenso", "Data de Assinatura"
]

for i, campo in enumerate(campos):
    tk.Label(root, text=campo).grid(row=i, column=0, sticky="e")
    entrada = tk.Entry(root, width=50)
    entrada.grid(row=i, column=1)
    entradas[campo] = entrada

tk.Button(root, text="Gerar Contrato", command=gerar_contrato, bg="green", fg="white").grid(row=len(campos), columnspan=2, pady=10)

root.mainloop()
