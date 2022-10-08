function validar_busca()
{
	if(txtBusca.value.length == ""){
		alert("Busca vazia! Digite algo para buscar.");
		txtBusca.focus();
		return false;
	}
}

function validar_esqueci()
{
	if(email.value.length == ""){
		alert("Campo de e-mail vazio! Digite o seu e-mail para redefinir a senha.");
		email.focus();
		return false;
	}
}

function validar_login()
{
	if(emaillogin.value.length == "" || senhalogin.value.length == ""){
		alert("Credenciais vazias! Preencha os campos corretamente para fazer login.");
		return false;
	}
}

function validar_cadastro()
{
	if(nomecadastro.value.length <= 3){
		alert("O nome deve ter três ou mais caracteres.");
		nomecadastro.focus();
		return false;
	}
	if(emailcadastro.value.length < 6 ||
		emailcadastro.value.indexOf("@") <= 0 ||
		emailcadastro.value.indexOf(".") <= 0 
	)
	{
		alert("Informe um e-mail válido.");
		emailcadastro.focus();
		return false;
	}
	if(cpfcadastro.value.length < 9){
		alert("Informe um CPF válido.");
		cpfcadastro.focus();
		return false;
	}
	if (senhacadastro.value.length < 6){
		alert("Crie uma senha mais forte.");
		assunto.focus();
		return false;
	}
	if (confirmasenhacadastro.value != senhacadastro.value){
		alert("As senhas não conferem.");
		confirmasenhacadastro.focus();
		return false;
	}
	if (lieconcordo.checked == false){
		alert("É necessário concordar com as políticas de privacidade para prosseguir.");
		lieconcordo.focus();
		return false;
	}
	alert("Usuário cadastrado (preenchimento válido)!");
}