//M119.437,116.794s1.235,16.6,40.494,16.6c36.466,0,40.5-16.6,40.5-16.6V253.308H119.436V116.794Z

import $ from 'jquery';

function switchPath( pathStr ) {
    var ps = pathStr.split(/(M|s|c|V|,|H|Z)/);
    console.log(ps)
    var len = ps.length;
    var i = 0;
    var result = '';
    var lastX = null;
    var lastY = null;
    var flag = 0;
    var key = null;
    var item = [];

    while(i < len){
        var a = ps[i];
        i++;
        if(a == '' || a == ','){
            continue;
        }
        if(isNaN(new Number(a))){
            if( key ){
                result += (key + item.join(','));
                item = [];
            }
            key = a.toUpperCase();
        } else {
            if(lastX == null){
                lastX = +a;
                item.push( (+lastX).toFixed(1) );
                console.log(lastX, +a, a,  flag, 'key1')
            } else if(lastY == null){
                lastY = +a;
                item.push( (+lastY).toFixed(1)  );
                console.log(lastY, +a, a,  flag, 'key2')
            } else if(flag == 0){
                lastX += +a;
                item.push( (+lastX).toFixed(1)  );
                flag = 1;
                console.log(lastX, +a, a, flag, 'key3')
            } else if(flag == 1){
                
                lastY += +a;
                item.push( (+lastY).toFixed(1) );
                flag = 0;
                console.log(lastY, +a, a, flag, 'key4')
            }
        }
    }
    return result;
}


var path = 'M119.437,116.794s1.235,16.6,40.494,16.6c36.466,0,40.5,-16.6,40.5,-16.6V253.308H119.436V116.794Z';
console.log(switchPath( path ))

$('.zd-cls-3').attr('d', switchPath( path ) + 'Z');

