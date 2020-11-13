const formCadastroCliente = document.querySelector('[data-form]')
//console.log(formCadastroCliente)


formCadastroCliente.addEventListener("submit", event => {
  event.preventDefault()

  const nome = event.target.querySelector('[data-nome]').value
  const cpf = event.target.querySelector('[data-cpf]').value

  if(validaCPF(cpf)) {
    cadastrarClientes(nome, cpf);
  }else {
    alert(`O cpf de ${nome} não é válido.`)
  }
   
  reset.formCadastroCliente()
})
