// Variáveis para armazenar o display e os valores
let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

// Função para atualizar o display
function updateDisplay(value) {
  display.value = value;
}

// Função para lidar com os números e operadores
function handleButtonClick(value) {
  if (['+', '-', '*', '/'].includes(value)) {
    // Quando o operador é pressionado, salvar o número anterior e o operador
    if (currentInput !== '') {
      previousInput = currentInput;
      currentInput = '';
    }
    operator = value;
    updateDisplay(previousInput + ' ' + operator);
  } else if (value === '=') {
    // Quando o botão de igual é pressionado, calcular o resultado
    if (previousInput !== '' && currentInput !== '') {
      let result;
      switch (operator) {
        case '+':
          result = parseFloat(previousInput) + parseFloat(currentInput);
          break;
        case '-':
          result = parseFloat(previousInput) - parseFloat(currentInput);
          break;
        case '*':
          result = parseFloat(previousInput) * parseFloat(currentInput);
          break;
        case '/':
          if (currentInput !== '0') {
            result = parseFloat(previousInput) / parseFloat(currentInput);
          } else {
            result = 'Erro';
          }
          break;
        default:
          result = '';
      }
      updateDisplay(result);
      currentInput = result.toString();
      previousInput = '';
      operator = '';
    }
  } else if (value === 'C') {
    // Limpar a entrada
    currentInput = '';
    previousInput = '';
    operator = '';
    updateDisplay('');
  } else {
    // Atualizar o número que está sendo digitado
    currentInput += value;
    updateDisplay(previousInput + ' ' + operator + ' ' + currentInput);
  }
}

// Adicionando os eventos aos botões
document.querySelectorAll('.botao').forEach(button => {
  button.addEventListener('click', () => handleButtonClick(button.innerText));
});
