const { createAccount, deleteAccount, login, updateAccount, getAccounts } = require('../src/accounts'); // Verifica esta ruta

describe('Account Management', () => {
  test('should create a new account', () => {
    const result = createAccount('usuario1', 'contraseña123');
    expect(result).toBe('Account created successfully');
    const accounts = getAccounts();
    expect(accounts).toContainEqual({ usuario: 'usuario1', contraseña: 'contraseña123' });
  });

  test('should delete an account', () => {
    createAccount('usuario1', 'contraseña123');
    const result = deleteAccount('usuario1');
    expect(result).toBe('Account deleted successfully');
    const accounts = getAccounts();
    expect(accounts).not.toContainEqual({ usuario: 'usuario1', contraseña: 'contraseña123' });
  });

  test('should log in with an existing account', () => {
    createAccount('usuario1', 'contraseña123');
    const result = login('usuario1', 'contraseña123');
    expect(result).toBe(true);
  });

  test('should update account information', () => {
    createAccount('usuario1', 'contraseña123');
    const result = updateAccount('usuario1', 'nuevaContraseña123');
    expect(result).toBe('Account updated successfully');
    const accounts = getAccounts();
    expect(accounts).toContainEqual({ usuario: 'usuario1', contraseña: 'nuevaContraseña123' });
  });
});
