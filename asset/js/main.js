document.querySelector(".order-form").addEventListener("submit", function(e){
    e.preventDefault();
    let type = document.querySelector("select[name='type']").value;
    let kg = parseFloat(document.querySelector("input[name='number']").value);
    let price = type === "type1" ? 20000 : 15000;
    let total = kg * price;
    document.querySelector(".total").innerHTML = "Total: " + total + " VND";
    document.querySelector(".order-form").reset();
});