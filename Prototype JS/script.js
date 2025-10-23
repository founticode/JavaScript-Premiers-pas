let checkbox = document.querySelectorAll(".task");
let counter = document.getElementById("counter");


checkbox.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        
        let checkedCount = document.querySelectorAll('.task:checked').length;
        counter.innerHTML = ` <p> Checked chapters : ${checkedCount}</p> `;
    });
});
