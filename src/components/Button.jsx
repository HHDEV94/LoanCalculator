const Button = ({ handleButton, text }) => {
  return (
    <button className={classes.btnClass} onClick={handleButton}>
      {text}
    </button>
  )
}

export default Button

const classes = {
  btnClass:
    'h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
}
