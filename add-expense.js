// Mobile Sidebar Toggle

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.querySelector(".sidebar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("show");
    });
}


// Set today's date automatically

const dateInput = document.getElementById("date");

if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.value = today;
}


// Form Submit

const form = document.getElementById("expenseForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const category = document.getElementById("category").value;
    const description = document.getElementById("description").value;
    const amount = document.getElementById("amount").value;

    if(category === "" || description === "" || amount === ""){

        alert("Please fill in all fields.");

        return;

    }

    alert("Expense Saved Successfully!");

    form.reset();

    dateInput.value = new Date().toISOString().split("T")[0];

});