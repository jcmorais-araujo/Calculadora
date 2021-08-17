function calcular(tipo, valor) {
    if (tipo === 'acao') {

        if (valor === 'c') {
            // Limpar o visor (id resultado)
            document.getElementById('resultado').value = '';
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('resultado').value += valor;
        }

        if (valor === '=') {
            var valorCampo2 = eval(document.getElementById('resultado').value);
            // Retornar valor para o visor
            document.getElementById('resultado').value = valorCampo2;
        }

    } else if (tipo === 'valor') {
        var valorCampo = document.getElementById('resultado').value;
        document.getElementById('resultado').value = valorCampo + valor;
    }
}