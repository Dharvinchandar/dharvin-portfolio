function change(){
    document.getElementById("change").innerHTML="Order placed"
     document.getElementById("change").style.color="yellow"
     alert("Please wait... Your order has been placed successfully! ☕🍔")
}
function place(item,button) {
    alert("Please wait...\n\nYour " + item + " order has been placed successfully! ☕");
    button.innerHTML = "Order Placed - Please Wait 20 Minutes";
    button.style.backgroundColor = "green";
    button.style.color = "white";
    button.disabled = true;
}
