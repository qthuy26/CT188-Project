jQuery(function ($) {
    // Hien thi input search tren mobile
    $(".icon-search-mobile").click(function() {
		$(".input-search").fadeToggle(300);
    })
    
    // Gui du lieu khi bam vao icon search
    $(".icon-search").click(function(){
        sendData($(".input-search").val());
    })

    // Gui du lieu khi bam nut enter
    $(".input-search").keypress(function (e) {
        if (e.code == "Enter") {
            e.preventDefault(); // Bo qua submit mac dinh cua input ==> su dung ham sendData() ben duoi
            sendData($(this).val());
            return false;
        }
    });
});



// Ham gui du lieu
function sendData(data) {
    if (data.length != 0) {
      $(".form-search").submit();
    }
}