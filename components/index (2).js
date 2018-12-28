
import SvgBar from './svgbar';


var y = { 
    startY: 253.308, 
    endY: 14.8
};
var h = y.endY - y.startY;

var data = [{
    name: '传染病',
    value: 3,
    unit: '起'
},{
    name: '食品安全',
    value: 3,
    unit: '起'
}];

var total = 0;
data.map(function(item){
    item.showText = item.name + item.value + item.unit;
    total += item.value;
});

total /= 0.7; //做个展示百分70%处理

var result = {
    bar: [],
    text: []
}

var startY = 0;

data.map(function( item, i ){
    var step = h * (item.value/ total);
    result.bar.push({
        y: startY,
        h: step,
        cls: 'zd-data-cls-' + i
    });

    result.text.push({
        text: item.showText,
        y: startY + step /2,
        index: i,
        cls: 'zd-text-cls-' + i
    });
    startY += step;
});

export default function( dom ){
    var svgbar = new SvgBar({
        dom: dom
    });
    svgbar.loadData( result );
}