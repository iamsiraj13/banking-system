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