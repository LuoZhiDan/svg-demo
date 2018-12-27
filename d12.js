function () {
    return {
        //组件初始化
        "init": function (options) {
            this._super.apply(this, arguments);
        },
        //容器内所有组件加载完成
        "allChildrenLoaded": function () {
            var widgt = this.context;
            var dom = widgt._element;
            dom.css('z-index', 100000000000);
            dom.hide();
            widgt.show();
            
            require(['svgTips'], function (Tips) {
                widgt.tips = new Tips.default(dom.attr('id'));

                //绘制横幅
                function drawtitle() {
                    //var leftnname = $('#cnta_a154563956756622 .selectItem').text();
                    var leftnname = $('#cnta_a154563956756622 li').eq(3).text();
                    var rightname = $('#cnta_a154564250877124 .selectItem').text();
                    var index = rightname.indexOf('银行') + 2;
                    rightname = rightname.substring(0, index);
                    widgt.tips.setText(leftnname, rightname);
                    widgt.tips.show();

                    //8秒后收起横幅重新执行;
                    setTimeout(function () {
                        widgt.tips.hide();

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
            });
        }
    };
}