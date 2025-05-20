document.getElementById('quizForm').addEventListener('submit', function(event) {
  event.preventDefault();

  
  const erro = document.getElementById('mensagemErro');
  const resultado = document.getElementById('resultado');
  erro.innerText = '';
  resultado.innerText = '';

  
  const capital = document.getElementById('capital').value.trim();
  const mamifero = document.querySelector('input[name="mamifero"]:checked');
  const checkboxes = document.querySelectorAll('input[name="linguagens"]:checked');

  
  if (!capital || !mamifero || checkboxes.length === 0) {
    erro.innerText = 'Por favor, responda todas as perguntas.';
    return;
  }


  let pontos = 0;

  
  if (capital.toLowerCase() === 'brasília' || capital.toLowerCase() === 'brasilia') {
    pontos++;
  }

 
  if (mamifero.value === 'baleia') {
    pontos++;
  }

  
  const linguagensCorretas = ['Python', 'C++'];
  const respostas = Array.from(checkboxes).map(cb => cb.value);
  if (linguagensCorretas.every(lang => respostas.includes(lang)) && respostas.length === 2) {
    pontos++;
  }

  
  resultado.innerText = `Você acertou ${pontos} de 3 perguntas.`;
});
