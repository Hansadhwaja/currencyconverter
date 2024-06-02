import { useEffect, useState } from 'react'
import { InputBox } from './components'



function App() {
  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)
  const imgUrl = 'https://img.freepik.com/free-vector/indian-rupee-coins-background-with-text-space_1017-17452.jpg?w=740&t=st=1717302727~exp=1717303327~hmac=6170324360bc3bbf35af8308b014e797db7c72fb7b88757ceadf24c738e2fa4d'
  const [data, setData] = useState({});
  const [currency, setCurrency] = useState('usd');
  const [calculatedCurrency, setCalculatedCurrency] = useState('inr');
  useEffect(() => {
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
      .then(res => res.json())
      .then(res => setData(res[currency]))
  }, [currency]);

  const options = Object.keys(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(from);
   
    console.log(data[calculatedCurrency]);
    const value = from * (data[calculatedCurrency])
    console.log(value);
    setTo(value)
  }

  const swap = () =>{
  setCurrency(calculatedCurrency)
  setCalculatedCurrency(currency)
  setTo(0)

  }
  return (
    <div className='flex justify-center items-center h-screen  bg-currency bg-no-repeat bg-cover lg:bg-none'>
      <div className='flex w-full m-3'>
        <div className=' w-1/2 h-full hidden lg:flex'>
          <img src={imgUrl} alt='' className='object-cover rounded-xl' />
        </div>
        <div className='flex flex-col w-full lg:w-1/2 rotate-0'>
        <h1 className='bg-clip-text from-cyan-500 to-blue-500  text-transparent bg-gradient-to-r lg:from-cyan-500 lg:via-purple-500 lg:to-pink-500 mt-16 text-center font-extrabold text-5xl p-3'> Currency Converter</h1>
          <form className='w-3/4 flex m-auto flex-col border-2 shadow-xl rounded-xl p-5' onSubmit={handleSubmit}>
            <div>
              <InputBox
                label='From'
                amount={from}
                setAmount={setFrom}
                options={options}
                currency={currency}
                setCurrency={setCurrency}
              />
            </div>
            <div className='flex items-center justify-center -my-2 md:-my-3 z-10'>
              <button className='p-2 border-2 bg-blue-500 rounded-md text-white text-md md:text-xl font-semibold' onClick={swap}>Swap</button>
            </div>
            <div>
              <InputBox
                label='To'
                amount={to}
                disabled={true}
                setAmount={setTo}
                options={options}
                currency={calculatedCurrency}
                setCurrency={setCalculatedCurrency}
              />
            </div>
            <div className='mt-2 md:mt-5'>
              <button type='submit' className='bg-blue-500 text-white font-semibold p-3 rounded-lg w-full text-md md:text-xl'>{`Convert`}</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default App


//https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json