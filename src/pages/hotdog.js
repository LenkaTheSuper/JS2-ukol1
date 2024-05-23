export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];

export const renderToppings = () => {
    const tpng = document.querySelector("#tpng")
    toppings.forEach((item) => {
        tpng.innerHTML += `
            <div class="topping--selected">
                <h3>${item.name}</h3>
                <p>${item.price} EUR</p>
            </div>
        `
    })
    const vyber = document.querySelectorAll(".topping--selected")
    vyber.forEach((item) => {
        item.classList.remove("topping--selected")
        item.addEventListener("click", function() {
            //item.preventDefault()
            toggleTopping(item)
        })
    }) 
}

export const toggleTopping = (index) => {
        index.classList.toggle("topping--selected")
}