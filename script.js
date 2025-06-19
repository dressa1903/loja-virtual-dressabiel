let isLogin = true;
let cartItems = [];
let total = 0;

function toggleMode() {
  isLogin = !isLogin;
  document.getElementById('formTitle').textContent = isLogin ? 'Entrar na Loja' : 'Criar Conta';
  document.querySelector('#authBox button').textContent = isLogin ? 'Entrar' : 'Cadastrar';
  document.querySelector('.toggle').textContent = isLogin ? 'Criar uma conta' : 'Já tem conta? Entrar';
  document.getElementById('usernameGroup').style.display = isLogin ? 'none' : 'block';
  document.getElementById('messageBox').textContent = '';
}

function handleAuth() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const username = document.getElementById('username').value.trim();
  const message = document.getElementById('messageBox');

  if (!email || !password || (!isLogin && !username)) {
    message.textContent = "⚠️ Preencha todos os campos.";
    message.style.color = "orange";
    return;
  }

  if (isLogin) {
    message.textContent = "✅ Login simulado com sucesso!";
    message.style.color = "lightgreen";
  } else {
    message.textContent = "🎉 Cadastro simulado com sucesso!";
    message.style.color = "#00f5c4";
  }

  setTimeout(() => {
    document.getElementById('authBox').classList.add('hidden');
    document.getElementById('loja').classList.remove('hidden');
  })
}
