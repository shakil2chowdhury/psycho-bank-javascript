//login event handler
document.getElementById("login").addEventListener("click", function () {
    if (document.getElementById("pswd").value) {
        const loginArea = document.getElementById("loginArea");
        loginArea.style.display = "none";
        const dashBoard = document.getElementById("dashBoard");
        dashBoard.style.display = "block";
    } else {
        alert("Please Enter Password")
    }
})

//deposit event
const depositAmountBtn = document.getElementById("depositAmountBtn").addEventListener("click", function () {

    const depositNumber = getAmount('depositAmount');

    updateAmount("addDeposit", depositNumber);
    updateAmount("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

//withdraw event
const withdrawButton = document.getElementById("withDraw").addEventListener('click', function () {

    const withdrawNumber = getAmount('withdrawAmount');

    updateAmount('currentWithdraw', withdrawNumber);
    reduceAmount('currentBalance', withdrawNumber);

    document.getElementById("withdrawAmount").value = "";
})

//function for getting amount
function getAmount(id) {
    const amount = parseFloat(document.getElementById(id).value);
    return amount;
}

//function for updating amount
function updateAmount(id, deposit) {
    const currentBalanceAmount = parseFloat(document.getElementById(id).innerText);
    const totalBalance = deposit + currentBalanceAmount;
    document.getElementById(id).innerText = totalBalance;
}
//function for reducing amount
function reduceAmount(id, withdraw) {
    const currentBalanceNumber = parseFloat(document.getElementById(id).innerText);
    const totalBalance = currentBalanceNumber - withdraw;
    document.getElementById(id).innerText = totalBalance;
}