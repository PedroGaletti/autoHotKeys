export const cellphone = (v) => {
  const maskedString = v
    .slice(0, 15)
    .replace(/\D/g, '')
    .replace(/^(\d\d)(\d)/g, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
  const string = maskedString.replace(/\D+/g, '')
  return { string, maskedString }
}

export const cpf = (v) => {
  const maskedString = v
    .slice(0, 14)
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  const string = maskedString.replace(/\D+/g, '')
  return { string, maskedString }
}

export const cep = (v) => {
  const maskedString = v
    .slice(0, 9)
    .replace(/\D+/g, '')
    .replace(/^(\d{5})(\d)/, '$1-$2')
  const string = maskedString.replace(/\D+/g, '')
  return { string, maskedString }
}

export const cnpj = (v) => {
  const maskedString = v
    .slice(0, 18)
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d{1,2})$/, '$1-$2')
  const string = maskedString.replace(/\D+/g, '')
  return { string, maskedString }
}

export const date = (v) => {
  const maskedString = v
    .slice(0, 10)
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d{2})$/, '$1$2')
  const string = maskedString.replace(/\D+/g, '')
  return { string, maskedString }
}

export const money = (v) => {
  const toNumber = Number(v.replace('.', '').replace(/\D/g, '')) / 100
  const maskedString = toNumber.toLocaleString('pt-br', {
    minimumFractionDigits: 2,
  })
  return {
    string: v.replace('.', '').replace(',', '').replace('.', ''),
    maskedString: String(maskedString),
  }
}

export const time = (v) => {
  const maskedString = v
    .slice(0, 5)
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1:$2')
    .replace(/(\d{2})(\d)/, '$1')
  const string = maskedString.replace(/\D+/g, '')
  return { string, maskedString }
}

export const percent = (v) => {
  const maskedString = v.slice(0, 3).replace(/\D+/g, '')
  const string = maskedString.replace(/\D+/g, '')
  return { string, maskedString }
}

export const number = (v) => {
  const maskedString = v.replace(/\D+/g, '')
  return { string: maskedString, maskedString }
}
