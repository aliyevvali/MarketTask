let btn1 = document.getElementById("btn1");


document.querySelectorAll(".fruit").forEach(fruit => {
    fruit.addEventListener("dragstart", function (ev) {
        ev.dataTransfer.setData("fruitId", this.id);
    })
});
document.querySelectorAll(".products").forEach(procut => {
    procut.addEventListener("drop", function (e) {
        let item3 = e.dataTransfer.getData("fruitId");
        let item4 = document.getElementById(item3);
        this.appendChild(item4)
    })
    procut.addEventListener("dragover", function (ec) {
        ec.preventDefault();
    })
})



//addbasket
btn1.addEventListener("click", function () {

    let basket = document.createElement("div");
    basket.classList.add("newdiv")

    basket.addEventListener("dragover", function (e) {
        e.preventDefault();
    })
    basket.addEventListener("drop", function (e) {
        let item1 = e.dataTransfer.getData("fruitId");
        let item = document.getElementById(item1);
        this.appendChild(item);
    })


    document.getElementById("custom").appendChild(basket);

})

//drag and drop



