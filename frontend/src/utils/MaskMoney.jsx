function MaskToReal(value) {
  if (isNaN(value)) return 0;

  return Number(value).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
}

function MaskToRealWithPrefix(value) {
  if (isNaN(value)) return 0;

  return Number(value).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

export default { MaskToReal, MaskToRealWithPrefix };
