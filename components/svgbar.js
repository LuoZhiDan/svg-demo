


export default class SvgBar {
    constructor(opts){
        this.setOption( opts );
        this.init();
    }

    init(){
        var dom = this._options.dom;
        dom && dom.html( html );
    }

    getY(){
        return { 
            startY: 253.308, 
            endY: 14.8
        } 
    }
    
    /**
     * 设置柱子
     * @param {*} y 柱子y起点 
     * @param {*} h 柱子高
     * @param {*} cls 柱子样式
     */
    setBar( opt ){
        d3v4.select('#zd-data')
            .append('path')
            .attr('class', opt.cls)
            .attr('d', function(){
                return `M118.437,${255.308 + opt.y}
                s1.235,16.6,40.494,16.6c36.466,0,40.5,-16.6,40.5,-16.6v
                ${ opt.h }s-1.235,16.6,-40.494,16.6c-36.466,0,-40.5,-16.6,-40.5,-16.6Z`
            });
        // <ellipse class="zd-cls-6" cx="159.016" cy="88" rx="40.5" ry="16.6" />
        d3v4.select('#zd-data')
            .append('ellipse')
            .attr('class', 'zd-cls-6')
            .attr('cx', '159.016')
            .attr('cy', 256.308 + opt.y + opt.h)
            .attr('rx', '40.5')
            .attr('ry', '16.6')
    }

    /**
     * 设置文字
     * @param {*} text //显示文字
     * @param {*} cls // 文字样式
     * @param {*} x // 
     * @param {*} y 
     */
    setText( opt ){
        var g = d3v4.select('#zd-text')
            .append('g')
            .html(function(){
                return `<text>
                    <tspan class="zd-text-cls-${ opt.index }">${ opt.text }</tspan>
                </text>
                <path class="zd-line-cls-${ opt.index }" 
                    d="M${ 118.437 + (opt.index % 2 == 0 ? 81 : 0) },${ 256.308 + opt.y }
                    h${(opt.index%2 == 0 ? 25 : -25)}"/>`;
            });

        var width = g.select('text').node().getBBox().width;
        g.select('text').attr('transform', function(){
            return `translate(${ opt.index%2 == 0 ? 90 + 2*25 + 81 + 7 : 90 - width } ${ 256.308 + opt.y + 6 })`;
        });
            

    }

    setOption( opts ){
        this._options = Object.assign({
            dom: null
        }, opts );
    }

    loadData( data ){
        var dom = this._options.dom;
        var me = this;
        dom.find('#zd-data').empty(); // 先清空
        dom.find('#zd-text').empty();

        var bar = data.bar;
        bar.map(function( item ){
            me.setBar( item );
        });

        var text = data.text;
        text.map(function( item ){
            me.setText( item );
        });
    }
}


var html = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%"
viewBox="0 0 288 299.938">
    <defs>
        <style>
            .zd-data-cls-0{
                fill: url(#zd-linear-gradient-2);
            }

            .zd-data-cls-1{
                fill: #00ffd2;
                fill-opacity: 0.17;
            }

            .zd-text-cls-0{
                fill: #45e3ff;
            }

            .zd-text-cls-1{
                fill: #00f988;
            }

            .zd-line-cls-0{
                stroke-width: 1px;
                stroke: #45e3ff;
            }

            .zd-line-cls-1{
                stroke-width: 1px;
                stroke: #00f988;
            }

            .zd-cls-1,
            .zd-cls-14,
            .zd-cls-4,
            .zd-cls-8 {
                fill: none;
            }

            .zd-cls-1,
            .zd-cls-2,
            .zd-cls-7 {
                stroke: #045263;
            }

            .zd-cls-1,
            .zd-cls-14,
            .zd-cls-2,
            .zd-cls-7,
            .zd-cls-8 {
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 1px;
                fill-rule: evenodd;
            }

            .zd-cls-2 {
                fill: url(#zd-linear-gradient);
            }

            .zd-cls-4 {
                stroke: red;
                stroke-width: 0.5px;
                stroke-dasharray: 2 1;
                filter: url(#zd-filter);
            }

            .zd-cls-5,
            .zd-cls-6 {
                fill: #00ffd2;
            }

            .zd-cls-5 {
                fill-opacity: 0.3;
            }

            .zd-cls-6 {
                fill-opacity: 0.17;
            }

            .zd-cls-7 {
                fill: #085664;
                fill-opacity: 0.23;
            }

            .zd-cls-8 {
                stroke: #17bfdc;
            }

            .zd-cls-11,
            .zd-cls-13,
            .zd-cls-9 {
                font-size: 8.515px;
            }

            .zd-cls-10,
            .zd-cls-11 {
                fill: #45e3ff;
            }

            .zd-cls-10,
            .zd-cls-11,
            .zd-cls-12,
            .zd-cls-13 {
                font-family: "Microsoft YaHei";
            }

            .zd-cls-11,
            .zd-cls-13 {
                font-weight: 700;
            }

            .zd-cls-12,
            .zd-cls-13 {
                fill: #00f988;
            }

            .zd-cls-14 {
                stroke: #00f988;
            }
            
        </style>
        <linearGradient id="zd-linear-gradient" x1="119.438" y1="139.578" x2="200.438" y2="139.578" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#0b3d6c" />
            <stop offset="0.475" stop-color="#040a29" />
            <stop offset="1" stop-color="#0e3f6d" />
        </linearGradient>
        <linearGradient id="zd-linear-gradient-2" x1="119.438" y1="190.578" x2="200.438" y2="190.578" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#1069a4" />
            <stop offset="0.291" stop-color="#17bfdc" />
            <stop offset="0.643" stop-color="#1069a4" />
            <stop offset="1" stop-color="#17bfdc" />
        </linearGradient>
        <filter id="zd-filter" x="114" y="54" width="93" height="39" filterUnits="userSpaceOnUse">
            <feGaussianBlur result="blur" stdDeviation="2" in="SourceAlpha" />
            <feComposite result="composite" />
            <feComposite result="composite-2" />
            <feComposite result="composite-3" />
            <feFlood result="flood" flood-color="#ff0202" />
            <feComposite result="composite-4" operator="in" in2="composite-3" />
            <feBlend result="blend" mode="screen" in2="SourceGraphic" />
            <feBlend result="blend-2" in="SourceGraphic" />
        </filter>
    </defs>
    <g transform="scale(0.95, 0.95)">
        <g data-name="bottom" transform="translate(0 3)">
            <path class="zd-cls-1" d="M159.937,227.625c33.552,0,60.75,11.564,60.75,25.828s-27.2,25.828-60.75,25.828-60.75-11.563-60.75-25.828S126.386,225.625,159.937,225.625Z" />
            <path class="zd-cls-1" d="M158.016,212.875c63.538,0,115.046,19.825,115.046,44.281s-51.508,44.281-115.046,44.281S43.969,279.612,43.969,255.156,95.477,210.875,159.016,210.875Z" />
        </g>
        <g data-name="background" transform="translate(0 4)">
            <path class="zd-cls-2" d="M118.436,14.8s-0.842,13.492,40.494,13.448c41.782-.045,40.5-13.448,40.5-13.448V253.308s-0.842,13.492,-40.494,13.448c-41.782-.045,-40.5-13.448,-40.5-13.448V14.8Z" />
            <path class="zd-cls-7" d="M158.937,0.562c22.368,0,40.5,6.2,40.5,13.844s-18.132,13.844-40.5,13.844-40.5-6.2-40.5-13.844S137.57,0.562,159.937.562Z" />
        </g>
        <g id="zd-data" data-name="data">
            <path class="zd-data-cls-0" d="M118.437,253.308
            s1.235,16.6,40.494,16.6c36.466,0,40.5,-16.6,40.5,-16.6v
            -83.4778s-1.235,16.6,-40.494,16.6c-36.466,0,-40.5,-16.6,-40.5,-16.6Z"></path>
        </g>
        <g id="zd-text" data-name="text"></g>
    </g>
</svg>`;