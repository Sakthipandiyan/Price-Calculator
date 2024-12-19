function calculate() {
    let price = parseFloat(document.getElementById('price').value);
    let discount = parseFloat(document.getElementById('discount').value);
    let tax = parseFloat(document.getElementById('tax').value);

    if (isNaN(price) || isNaN(discount)) {
        alert('Please enter valid values for price and discount.');
        return;
    }

    let discountAmount = price * discount / 100;
    let taxable_Value = price - discountAmount;
    let Gst = taxable_Value * tax / 100;
    let net_Amount = taxable_Value + Gst;

    document.getElementById('GST').value = Gst.toFixed(2);
    document.getElementById('Taxable Value').value = taxable_Value.toFixed(2);
    document.getElementById('result').value = net_Amount.toFixed(2);
}

function clearFields() {
    document.getElementById('price').value = '';
    document.getElementById('discount').value = '';
    document.getElementById('tax').value = '';

    document.getElementById('GST').value = '';
    document.getElementById('Taxable Value').value = '';
    document.getElementById('result').value = '';
}