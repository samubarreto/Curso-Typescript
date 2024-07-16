interface ISamubank_account {
  login: boolean
}

const samubank_account = {
  login: false
}

export function getAllLocalStorage() {
  return localStorage.getItem('samubank_account')
}

export function createLocalStorage(): void {
  localStorage.setItem('samubank_account', JSON.stringify(samubank_account))
}

export function changeLocalStorage(samubank: ISamubank_account): void {
  localStorage.setItem('samubank_account', JSON.stringify(samubank))
}