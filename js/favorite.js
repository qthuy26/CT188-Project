const cartTable = document.querySelector('.cart-table')
const cartTableBody = document.querySelector('.cart-table tbody')
function showFavorite() {
    let arrKey = []

    Object.keys(localStorage).forEach((element) => {
        if(window.localStorage.getItem(element) === "favorite") {
            arrKey.push(element)
        }
    })
    arrKey.forEach((arrKeyElement, index) => {
        let key = arrKeyElement.split(",")     // Chia mang thanh 2 phan tu bang dau "," ==> [key[0]. key[1]] = [id sp, size]
        let item = itemList[key[0]]     // Phan tu dau la ten san pham, phan tu thu hai la size
        let name = item.name
        let price = item.price
        let photo = item.photo

        // Tao cac o hien thi thong tin san pham
        // Tao o du lieu chua hinh san pham
        const imgBox = document.createElement("td")
        imgBox.innerHTML = `<img src='${photo}' class='round-figure product-cart-img'>`

        // Ten san pham
        const nameCell = document.createElement("td")
        nameCell.textContent = name

        // Gia tien san pham
        const priceCell = document.createElement("td")
        priceCell.setAttribute("colspan", 2)
        priceCell.innerHTML = price + "$"
        

        // Tao nut xoa
        const delBtn = document.createElement("a")
        delBtn.style.padding = "5px"
        delBtn.style.backgroundColor = "#dd3333"
        delBtn.style.color = "#fff"
        delBtn.style.cursor = "pointer"
        delBtn.setAttribute("data-code", key[0])
        delBtn.innerHTML = '<i class="fa fa-trash"></i>'
        delBtn.onclick = function () {
            removeFavorite(this.dataset.code)
        }

        const delCell = document.createElement("td")
        delCell.appendChild(delBtn)

        // Tao select size
        const sizeCell = document.createElement("td")
        sizeCell.innerHTML =    `<div class="select">
                                    <select name="size" class="size">
                                        <option selected disabled>CHOOSE SIZE </option>
                                        <option value="39">39</option>
                                        <option value="40">40</option>
                                        <option value="41">41</option>
                                        <option value="42">42</option>
                                        <option value="43">43</option>
                                        <option value="44">44</option>
                                    </select>
                                </div>
                                `
        sizeCell.querySelector(".size").style.padding = "5px 2px"
        sizeCell.querySelector(".size").style.borderRadius = "5px"
        sizeCell.querySelector(".size").style.border = "2px solid #000"

        // Tao nut dat hang
        const addCartBtn = document.createElement("button")
        addCartBtn.classList.add("btn")
        addCartBtn.classList.add("btn-primary")
        addCartBtn.classList.add("multilang")
        addCartBtn.setAttribute("id", "FAVORITE_ADD_TO_CART")
        addCartBtn.innerHTML = `Thêm vào giỏ hàng <i class="fa fa-cart-plus"></i>`
        addCartBtn.style.padding = "0.8rem"
        addCartBtn.style.marginTop = "0"
        addCartBtn.onclick = () => {
            addCart(key[0], sizeCell)
        }

        const addCartCell = document.createElement("td")
        addCartCell.appendChild(addCartBtn)

        // Them tat ca cac cell vao 1 hang
        const newRow = document.createElement("tr")
        newRow.appendChild(imgBox)
        newRow.appendChild(nameCell)
        newRow.appendChild(priceCell)
        newRow.appendChild(sizeCell)
        newRow.appendChild(addCartCell)
        newRow.appendChild(delCell)

        // Them hang moi vao bang
        cartTableBody.appendChild(newRow)
    })
}


function removeFavorite(code) {
    if(typeof window.localStorage[code] !== "undefined") {
        // Xoa san pham khoi localStorage
        window.localStorage.removeItem(code);
        // Xoa noi dung cua phan than cua bang (<tbody>)
        cartTable.getElementsByTagName('tbody')[0].innerHTML=""
        // Hien thi lai noi dung chi tiet cua don hang
        showFavorite();
    }
}


window.onload = showFavorite()
window.onstorage = () => {
    showFavorite();
}