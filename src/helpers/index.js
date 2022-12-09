const moneyFormater = amount => {
  const formater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return formater.format(amount)
}

const calculateTotalPaymet = (quantity, time) => {
  let total

  if (quantity > 15000) {
    total = quantity * 1.2
  } else if (quantity >= 10000) {
    total = quantity * 1.3
  } else if (quantity >= 5000) {
    total = quantity * 1.4
  } else {
    total = quantity * 1.5
  }

  if (time === 6) {
    total *= 1.1
  } else if (time === 12) {
    total *= 1.2
  } else {
    total *= 1.3
  }

  return total
}

export { moneyFormater, calculateTotalPaymet }
