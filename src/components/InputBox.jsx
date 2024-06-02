

const InputBox = ({ label,amount,disabled=false,setAmount,options,currency,setCurrency }) => {
   
    return (
        <div className='flex border-2 shadow-xl gap-3 justify-between p-3 bg-white rounded-xl'>
            <div className='flex flex-col gap-3 w-1/2'>
                <label className='text-md md:text-xl text-orange-900 font-semibold'>{label}</label>
                <input type='number' value={amount} onChange={(e) => setAmount(Number(e.target.value))} className='border-2 border-slate-200 rounded-lg p-3 text-md md:text-xl font-semibold' disabled={disabled} />
            </div>
            <div className='flex flex-col gap-3 w-1/2'>
                <p className='text-md md:text-xl text-orange-900 font-semibold text-right'>Currency Type</p>
                <div className='flex justify-end'>
                    <select value={currency} onChange={(e)=> setCurrency(e.target.value)} className='rounded-lg border-2 p-2 border-slate-200 w-fit'>
                    {options.map(opt =>(
                        <option key={opt}>{opt}</option>
                    ))}
                        
                    </select>
                </div>

            </div>
        </div>
    )
}

export default InputBox