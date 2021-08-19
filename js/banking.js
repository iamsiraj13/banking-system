document.getElementById("diposit-button").addEventListener('click',function(){

    const dipositInput = document.getElementById('diposit-input');

    const newDipositAmount = parseFloat(dipositInput.value); 

    const dipositTotal= document.getElementById('diposit-total');

    let peviousDipositAmount = parseFloat( dipositTotal.innerText);
    peviousDipositAmount = peviousDipositAmount + newDipositAmount;
    dipositTotal.innerText = peviousDipositAmount;

    // update total balance
    
    const totalBalance = document.getElementById('total-balance');

    const prevTotalBalance = parseFloat(totalBalance.innerText);

    const newTotalBalance = prevTotalBalance + newDipositAmount;
    
    totalBalance.innerText = newTotalBalance;
    // clear diposit input value
    dipositInput.value='';
 
});


document.getElementById("withdraw-button").addEventListener('click',function(){

    const withdrawInput = document.getElementById('withdraw-input');

    const newWithdrawAmount = parseFloat(withdrawInput.value); 

    const withdrawTotal= document.getElementById('withdraw-total');

    let peviousWithdrawAmount = parseFloat( withdrawTotal.innerText);
    peviousWithdrawAmount = peviousWithdrawAmount + newWithdrawAmount;
    withdrawTotal.innerText = peviousWithdrawAmount;

    
    // update total balance

    const totalBalance = document.getElementById('total-balance');
    const prevTotalBalance = parseFloat(totalBalance.innerText);
    const newTotalBalance = prevTotalBalance - newWithdrawAmount;

    console.log(newTotalBalance);

    totalBalance.innerText = newTotalBalance;


    // clear withdraw input value
    withdrawInput.value='';
  
 
});

