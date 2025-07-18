const items = [
    { name: "Tomato", category: "vegetables", price: "Rs.20/kg", img: "images/tomato.jpg" },
    { name: "Potato", category: "vegetables", price: "Rs.15/kg", img: "images/potato.jpg" },
    { name: "Onion", category: "vegetables", price: "Rs.20/kg", img: "images/onion.jpg" },
    { name: "Cabbage", category: "vegetables", price: "Rs.25/kg", img: "images/cabbage.jpg" },
    { name: "Carrot", category: "vegetables", price: "Rs.30/kg", img: "images/carrot.jpg" },
    { name: "Cauliflower", category: "vegetables", price: "Rs.25/kg", img: "images/cauliflower.jpg" },
    { name: "Cucumber", category: "vegetables", price: "Rs.25/kg", img: "images/cucumber.jpg" },
    { name: "Peas", category: "vegetables", price: "Rs.20/kg", img: "images/peas.jpg" },
    { name: "Radishes", category: "vegetables", price: "Rs.25/kg", img: "images/radishes.jpg" },
    { name: "Chilli", category: "vegetables", price: "Rs.20/kg", img: "images/chilli.jpg" },
    { name: "Chicken", category: "non-vegetables", price: "Rs.200/kg", img: "images/chicken.jpg" },
    { name: "Fish", category: "non-vegetables", price: "Rs.120/kg", img: "images/fish.jpg" },
    { name: "Eggs", category: "non-vegetables", price: "Rs.120/kg", img: "images/eggs.jpg" },
    { name: "Mutton", category: "non-vegetables", price: "Rs.120/kg", img: "images/mutton.jpg" },
    { name: "Prawn", category: "non-vegetables", price: "Rs.120/kg", img: "images/prawn.jpg" },
    { name: "Shrimp", category: "non-vegetables", price: "Rs.120/kg", img: "images/shrimp.jpg" },
    { name: "Crab", category: "non-vegetables", price: "Rs.120/kg", img: "images/crab.jpg" },
    { name: "Tuna", category: "non-vegetables", price: "Rs.120/kg", img: "images/tuna.jpg" },
    { name: "Beef", category: "non-vegetables", price: "Rs.120/kg", img: "images/beef.jpg" },
    { name: "Smoked Fish", category: "non-vegetables", price: "Rs.120/kg", img: "images/fish.jpg" },
    { name: "Almonds", category: "dry-fruits", price: "Rs.150/kg", img: "images/almonds.jpg" },
    { name: "Walnuts", category: "dry-fruits", price: "Rs.230/kg", img: "images/walnuts.jpg" },
    { name: "Cashews", category: "dry-fruits", price: "Rs.130/kg", img: "images/Cashews.jpg" },
    { name: "Pistachios", category: "dry-fruits", price: "Rs.140/kg", img: "images/Pistachios.jpg" },
    { name: "Dates", category: "dry-fruits", price: "Rs.130/kg", img: "images/Dates.jpg" },
    { name: "Figs", category: "dry-fruits", price: "Rs.160/kg", img: "images/Figs.jpg" },
    { name: "Apricots", category: "dry-fruits", price: "Rs.170/kg", img: "images/Apricots.jpg" },
    { name: "Raisins", category: "dry-fruits", price: "Rs.110/kg", img: "images/Raisins.jpg" },
    { name: "Prunes", category: "dry-fruits", price: "Rs.120/kg", img: "images/Prunes.jpg" },
    { name: "Makhana", category: "dry-fruits", price: "Rs.140/kg", img: "images/Makhana.jpg" },
    { name: "Orange Juice", category: "beverages", price: "Rs.50/bottle", img: "images/juice.jpg" },
    { name: "Coffee", category: "beverages", price: "Rs.30/pack", img: "images/coffee.jpg" },
    { name: "Tea", category: "beverages", price: "Rs.30/pack", img: "images/tea.jpg" },
    { name: "Milk", category: "beverages", price: "Rs.30/pack", img: "images/milk.jpg" },
    { name: "Lassi", category: "beverages", price: "Rs.30/glass", img: "images/lassi.jpg" },
    { name: "Lemon Water", category: "beverages", price: "Rs.30/glass", img: "images/lemon_water.jpg" },
    { name: "Limca", category: "beverages", price: "Rs.30/bottle", img: "images/limca.jpg" },
    { name: "Sprite", category: "beverages", price: "Rs.30/bottle", img: "images/sprite.jpg" },
    { name: "Fanta", category: "beverages", price: "Rs.30/bottle", img: "images/fanta.jpg" },
    { name: "Cola", category: "beverages", price: "Rs.30/bottle", img: "images/cola.jpg" }
];

document.getElementById("search-bar").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = "";

    if (query) {
        const filteredItems = items.filter(item => item.name.toLowerCase().includes(query));
        filteredItems.forEach(item => {
            const resultItem = document.createElement("div");
            resultItem.classList.add("search-result");
            resultItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <p>${item.name} - ${item.price}</p>
            `;
            resultItem.addEventListener("click", () => {
                window.location.href = `items.html?category=${item.category}`;
            });
            resultsContainer.appendChild(resultItem);
        });
    }
});
