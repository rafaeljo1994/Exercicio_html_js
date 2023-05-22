const form = document.getElementById('form-comparar');
const numero_a = document.getElementById('numero-a');
const numero_b = document.getElementById('numero-b');
let form_e_valido = true;

function valida_numero(numeroA, numeroB) {
  if (numeroA < numeroB) {
    return true;
  } else {
    return false;
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const mensagem_sucesso = `SUCESSO: O segundo número: <b>${numero_b.value}</b> é <b>MAIOR</b> que o primeiro número: <b>${numero_a.value}</b>`;
  const mensagem_erro = `ERRO: O segundo número: <b>${numero_b.value}</b> é <b>MENOR</b> que o primeiro número: <b>${numero_a.value}</b>`;

  form_e_valido = valida_numero(
    parseInt(numero_a.value),
    parseInt(numero_b.value)
  );
  if (form_e_valido) {
    const container_mensagem_sucesso = document.querySelector('.message');
    container_mensagem_sucesso.innerHTML = mensagem_sucesso;
    container_mensagem_sucesso.style.display = 'block';
    container_mensagem_sucesso.style.backgroundColor = 'green';

    numero_a.value = '';
    numero_b.value = '';
  } else {
    const container_mensagem_erro = document.querySelector('.message');
    container_mensagem_erro.innerHTML = mensagem_erro;
    container_mensagem_erro.style.display = 'block';
    container_mensagem_erro.style.backgroundColor = 'red';

    numero_a.value = '';
    numero_b.value = '';
  }
});

numero_a.addEventListener('keyup', function (e) {
  console.log(e.target.value);
  form_e_valido = valida_numero(e.target.value);
});
