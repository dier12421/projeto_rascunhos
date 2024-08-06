<script>
    // Exemplo básico de manipulação de tabela com JavaScript
    document.getElementById('meuFormulario').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Pega o valor do campo de entrada
        var dadoDigitado = document.getElementById('inputDado').value;

        // Cria uma nova linha na tabela 1 com o dado digitado
        var tabela1 = document.getElementById('tabela1').getElementsByTagName('tbody')[0];
        var novaLinha = tabela1.insertRow();
        var coluna1 = novaLinha.insertCell(0);
        coluna1.textContent = dadoDigitado;
        var coluna2 = novaLinha.insertCell(1);
        coluna2.textContent = "Novo dado";
        var coluna3 = novaLinha.insertCell(2);
        coluna3.textContent = "Outro dado";

        // Limpa o campo de entrada após adicionar o dado na tabela
        document.getElementById('inputDado').value = "";
    });
</script>

</body>
</html>
