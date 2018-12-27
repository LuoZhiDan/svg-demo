function () {
    return {
        //组件初始化
        "init": function (options) {
            this._super.apply(this, arguments);
        },
        //容器内所有组件加载完成
        "allChildrenLoaded": function () {
            
            //绘制横幅
            function drawtitle() {
                //var leftnname = $('#cnta_a154563956756622 .selectItem').text();
                var leftnname =  $('#cnta_a154563956756622 li').eq(3).text();
                var rightname = $('#cnta_a154564250877124 .selectItem').text();
                var index = rightname.indexOf('银行') + 2;
                rightname = rightname.substring(0, index);
              

                var ctnId = 'cnta_a154565049348731';
                $('#' + ctnId).html('');
                $('#' + ctnId).css({
                    'height': 0,
                    'visibility': 'visible',
                    'overflow': 'hidden'
                });
                var html = '<div class="title" style="width:100%;height:100px;font-size: 40px;line-height:100px;text-align: center;"><span class="leftnname" style="color:#ffffff">' + leftnname + '</span><span style="color:#00eaff"> 获得 </span><span class="rightname" style="color:#ffffff">' + rightname + '</span><span style="color:#00eaff"> 融资 </span></div>';
                $('#' + ctnId).html(html);
                $('#' + ctnId).animate({
                    'height': '100px'
                }, 1000);
                //8秒后收起横幅重新执行;
                setTimeout(function () {
                    $('#' + ctnId).animate({
                        'height': 0
                    }, 1000);

                    //设置文文本框值为0
                    $('#txt_a154564569601930').widget().setCurrentValue(0);
                    //隐藏中间选中框
                    $('#txt_a154565627387533').hide();
                    //取消中间选中样式
                    var item = $($('#cnta_a154564524595127').find('.slide-list .item')[2]);
                    item.removeClass('selectItem');
                    item.css({
                        'color': '#00deac',
                        'font-size': '30px'
                    });
                    //开始监听
                    listen();
                }, 8000);
            }
          
			listen();
            function listen() {
                if ($('#txt_a154564569601930').widget().currentValue == 3) {
                    drawtitle();
                } else {
                    setTimeout(function () {
                        listen();
                    }, 20);
                }

            }
        }
    };
}