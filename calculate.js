function calculate() {
    let price = parseFloat(document.getElementById('price').value);
    let discount = parseFloat(document.getElementById('discount').value);

    if (isNaN(price) || isNaN(discount)) {
        alert('Please enter valid values for price and discount.');
        return;
    }

    let discountAmount = price * discount / 100;
    let taxable_Value = price - discountAmount;
    let Gst = taxable_Value * 5 / 100;
    let net_Amount = taxable_Value + Gst;

    // Display the result in the result textbox
    document.getElementById('GST').value = Gst.toFixed(2);
    document.getElementById('Taxable Value').value = taxable_Value.toFixed(2);
    document.getElementById('result').value = net_Amount.toFixed(2);
}