
const tpl = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
    width="100%" height="100%" viewBox="0 0 970 306">
<defs>
  <style>
    .zd-cls-1 {
      font-size: 46px;
      fill: #fff;
      text-anchor: middle;
      font-family: SourceHanSansCN;
      text-transform: uppercase;
    }

    .zd-cls-2 {
      fill: #ffc000;
      fill-rule: evenodd;
      filter: url(#zd-filter);
    }
  </style>
  <filter id="zd-filter" x="884" y="456" width="151" height="128" filterUnits="userSpaceOnUse">
    <feGaussianBlur result="blur" stdDeviation="11.667" in="SourceAlpha"/>
    <feComposite result="composite"/>
    <feComposite result="composite-2"/>
    <feComposite result="composite-3"/>
    <feFlood result="flood" flood-color="#ff5a00" flood-opacity="0.77"/>
    <feComposite result="composite-4" operator="in" in2="composite-3"/>
    <feBlend result="blend" in2="SourceGraphic"/>
    <feBlend result="blend-2" in="SourceGraphic"/>
    <feGaussianBlur result="blur-2" stdDeviation="4.333" in="SourceAlpha"/>
    <feFlood result="flood-2" flood-color="#fff"/>
    <feComposite result="composite-6" operator="out" in2="blur-2"/>
    <feComposite result="composite-5" operator="in" in2="SourceAlpha"/>
    <feBlend result="blend-3" mode="overlay" in2="blend-2"/>
  </filter>

  <clipPath id="zd-clipPath">
    <rect x="110" y="-22" width="755" height="438" />
  </clipPath>
</defs>
</svg>`;


import imgback from '../public/1.png';
import glow from '../public/2.webp';

export default class Tips {
    constructor( id ) {
        this._id = id;
        $( '#' + id).html( tpl );
        this._svg = d3v4.select( '#' + id ).select('svg');

        this._textFrom = this._svg.append('g')
            .append('text')
            .attr('class', 'cls-1')
            .attr('x', '484.85')
            .attr('y', '105.193');

        this._textTo = this._svg.append('g')
            .append('text')
            .attr('class', 'cls-1')
            .attr('x', '484.85')
            .attr('y', '246.193');
        this.init();
    }

    init() {
        const g = this._svg.append('g');

        g.append('image')
            .attr('width', 970)
            .attr('height', 306)
            .attr('xlink:href', imgback);

        const imgG = g.append('g')
            .style('clip-path', 'url(#zd-clipPath)');

        imgG.append('image')
            .attr('width', 400)
            .attr('height', 40)
            .attr('xlink:href', glow)
            .append('animateMotion')
            .attr('path', 'M-105,22H855')
            .attr('begin', 0)
            .attr('dur', '3s')
            .attr('rotate', 'auto')
            .attr('repeatCount', 'indefinite')

        imgG.append('image')
            .attr('width', 400)
            .attr('height', 40)
            .attr('xlink:href', glow)
            .append('animateMotion')
            .attr('path', 'M750,260H-855')
            .attr('begin', 0)
            .attr('dur', '3s')
            .attr('repeatCount', 'indefinite')
    }

    setText(from, to) {
        this._textFrom && this._textFrom.text( from );
        this._textTo && this._textTo.text( from )
    }

    show() {
        $('#' + this._id).show();
    }

    hide() {
        $('#' + this._id).hide();
    }
}