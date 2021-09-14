import React, {useState, useEffect} from 'react'
import './Currency.css'

export default function Currency() {
const[symbols,setSymbols] = useState([]);
//Fixer.io
const API_KEY = '523225f3b6f3a36d254febef3778e1cb';

const [currencyFrom,setCurrencyFrom] = useState('ILS');
const [currencyTo,setCurrencyTo] = useState('EGP');
const [amount,setAmount] = useState(1);
const [finalResult,setFinalResult] = useState(null);

useEffect(()=>{
        fetch(`http://data.fixer.io/api/symbols?access_key=${API_KEY}`)
        .then(res => res.json())
        .then(
          (result) => {
            console.log('Got this result fron api in useEffect:');
            console.log(result);
            let keys = Object.keys(result.symbols);
            setSymbols(keys);
            console.log(symbols);
          })
        .catch((error) => {
            console.log(`There was an error getting the symbols fron api in useEffect: ${error}`)
          })
},[])

useEffect(()=>{
    if(finalResult !== null){
        console.log('final result has changed, now its: '+ finalResult);
        console.log(finalResult);
        document.getElementById('resultdiv').style.visibility = "visible";
    }
},[finalResult])

async function getRate(){
    console.log(`amount: ${amount}, from: ${currencyFrom}, to: ${currencyTo}`);
    let url = `https://free.currconv.com/api/v7/convert?q=${currencyFrom}_${currencyTo}&compact=ultra&apiKey=776a17a7a3ab767ee87f`;

    console.log(url);

    const res = await fetch(url).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((responseJson) => {
            let fixedRate = Object.values(responseJson);
            fixedRate = fixedRate[0];
            console.log('fixed rate someone? ' + fixedRate);
            return fixedRate;            
      })
       .catch((error) => {
        console.log(error);
      });

      return(res);
}


    async function convertClicked() {
        console.log('calling');
        const result = await getRate();
        console.log(result);
        setFinalResult((result*amount).toFixed(3));
      }

    const handleAmountChange=(e)=>{
        setAmount(e.target.value);
        document.getElementById('resultdiv').style.visibility = "hidden";
    }

    const handleFromChange=(e)=>{
        setCurrencyFrom(e.target.value);
        document.getElementById('resultdiv').style.visibility = "hidden";
    }

    const handleTohange=(e)=>{
        setCurrencyTo(e.target.value);
        document.getElementById('resultdiv').style.visibility = "hidden";
    }

    return (
        <div className='currencyComponent'>
            <h1>Currency Converter</h1>

            <div className='container'>
                 {/* amount */}
                 <p>Amount</p>
                <input onChange={(e)=>{handleAmountChange(e)}} type='number' id='amount-one' value={amount}></input>

                <p>From</p>
                <div className='currency'>
                        {/* currency from */}
                        <select onChange={(e)=>{handleFromChange(e)}} value={currencyFrom} id='correncyFrom'>
                            {symbols.map((e,i)=>
                                <option key={e} >{e}</option>
                            )}
                        </select>
                </div>

                <p>To</p>
                <div className='currency'>
                        {/* currency to */}
                        <select onChange={(e)=>{handleTohange(e)}} value={currencyTo} id='correncyTo'>
                            {symbols.map((e,i)=>
                                <option key={e} >{e}</option>
                            )}
                        </select>
                </div>

                
                <button onClick={()=>{convertClicked()}}>Convert</button>
                {/* <button>Save</button> */}

                              
                <div id='resultdiv'>
                    {amount} {currencyFrom} = {finalResult} {currencyTo}
                </div>


            </div>
            

        </div>
    )
}
