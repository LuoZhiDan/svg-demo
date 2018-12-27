function() {
    return {
      //组件初始化
      "init" : function(options) {
          this._super.apply(this,arguments);
       },
      //容器内所有组件加载完成
      "allChildrenLoaded": function(){
            var widgt = this.context;
            var dom = widgt._element;
            dom.hide();
            widgt.show();
            require(['svgTips'], function( Tips ){
                widgt.tips = new Tips.default( dom.attr('id') );
            });
       }
    };
 }