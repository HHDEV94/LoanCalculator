import { useState, useEffect } from 'react'
import { moneyFormater, calculateTotalPaymet } from './helpers'
import Button from './components/Button'
import Header from './components/Header'

function App() {
  const [amount, setAmount] = useState(10000)
  const [months, setMonths] = useState(6) //Initial Value of the select
  const [total, setTotal] = useState(0)
  const [payment, setPayment] = useState(0)

  useEffect(() => {
    setTotal(calculateTotalPaymet(amount, months))
  }, [amount, months])

  useEffect(() => {
    setPayment(total / months)
  }, [total])

  const MIN = 0
  const MAX = 20000
  const STEP = 100

  const handleChange = e => {
    setAmount(+e.target.value)
  }

  const handleLessAmount = () => {
    const value = amount - STEP

    if (value <= MIN) return
    setAmount(value)
  }

  const handleMoreAmount = () => {
    const value = amount + STEP

    if (value >= MAX) return
    setAmount(value)
  }

  return (
    <div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
      <Header />

      <div className='flex justify-between my-6'>
        <Button handleButton={handleLessAmount} text={'-'} />
        <Button handleButton={handleMoreAmount} text={'+'} />
      </div>

      <input
        type='range'
        className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={amount}
      />

      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>
        {moneyFormater(amount)}
      </p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Choose a <span className='text-indigo-600'>payment</span> date.
      </h2>
      <select
        className={classes.selectClass}
        onChange={e => setMonths(+e.target.value)} //Sign "+" convert to number
        value={months}
      >
        <option value='6'>6 months</option>
        <option value='12'>12 months</option>
        <option value='24'>24 months</option>
      </select>

      <div className='my-5 space-y-3 bg-gray-50 p-5'>
        <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
          <span className='text-indigo-600'>Payment</span> summary.
        </h2>

        <p className='text-xl text-gray-500 text-center font-bold'>{months} Months</p>
        <p className='text-xl text-gray-500 text-center font-bold'>
          {moneyFormater(total)} Total Payment
        </p>
        <p className='text-xl text-gray-500 text-center font-bold'>
          {moneyFormater(payment)} Monthly
        </p>
      </div>
    </div>
  )
}

export default App

const classes = {
  selectClass:
    'mt-5 p-2 w-full bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'
}
