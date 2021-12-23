function addToFavorite(code) {
    // Kiem tra su ton tai cua ma san pham trong localStorage
    if(typeof localStorage[code] == "undefined") {
        window.localStorage.setItem(code, "favorite")  // [ten san pham, size giay]
        toastr.success('Sản phẩm đã được thêm vào yêu thích!', 'Thành Công')
    }
    else {
        toastr.error('Bạn đã thêm sản phẩm này vào yêu thích!', 'Lỗi')
    }
}