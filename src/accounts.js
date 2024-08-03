let accounts = [];

function createAccount(usuario, contraseña) {
  if (accounts.some(account => account.usuario === usuario)) {
    return 'Account already exists';
  }
  accounts.push({ usuario, contraseña });
  return 'Account created successfully';
}

function deleteAccount(usuario) {
  const initialLength = accounts.length;
  accounts = accounts.filter(account => account.usuario !== usuario);
  return accounts.length < initialLength ? 'Account deleted successfully' : 'Account not found';
}

function login(usuario, contraseña) {
  return accounts.some(account => account.usuario === usuario && account.contraseña === contraseña);
}

function updateAccount(usuario, nuevaContraseña) {
  const account = accounts.find(account => account.usuario === usuario);
  if (account) {
    account.contraseña = nuevaContraseña;
    return 'Account updated successfully';
  }
  return 'Account not found';
}

function getAccounts() {
  return accounts;
}

module.exports = { createAccount, deleteAccount, login, updateAccount, getAccounts };
