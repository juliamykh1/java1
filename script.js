document.getElementById('calculate').addEventListener('click', function() {
    const price = parseFloat(document.getElementById('price').value);
    const count = parseInt(document.getElementById('count').value);
    const subject = document.getElementById('subject').value;
    const isTax = document.getElementById('tax').checked;

    const total = price * count;
    let taxAmount = 0;
    
    if (isTax) { taxAmount = total * 0.05; }

    document.getElementById('res-subject').innerText = subject;
    document.getElementById('res-total').innerText = total.toFixed(2) + " грн";
    document.getElementById('res-tax').innerText = "-" + taxAmount.toFixed(2) + " грн";
    document.getElementById('res-final').innerText = (total - taxAmount).toFixed(2) + " грн";
    
    document.getElementById('result').style.display = 'block';
});
