import { AcGameObject } from '/static/js/ac_game_object/base.js';
import { Controller } from '/static/js/controller/base.js';


export class GameMap extends AcGameObject {
    constructor(root) {//传root参数是为了使用父元素
        super();
        this.root = root;
        this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>');//创建了一个canvas数组，实际上这里只有一个canvas
        this.ctx = this.$canvas[0].getContext('2d');//getcontext()函数的使用
        this.root.$kof.append(this.$canvas);//把创建出来的地图加入到父元素里面去
        this.$canvas.focus();//聚焦，用于接收键盘和鼠标事件

        this.controller = new Controller(this.$canvas);//需要控制
        //在父元素里面增加血条和计时器，同时还有拖影块
        this.root.$kof.append($(`<div class="kof-head">
        <div class="kof-head-hp-0"><div><div></div></div></div>
        <div class="kof-head-timer">60</div>
        <div class="kof-head-hp-1"><div><div></div></div></div>
    </div>`));

        this.time_left = 60000;  // 单位：毫秒
        this.$timer = this.root.$kof.find(".kof-head-timer");
    }

    start() {

    }

    update() {
        this.time_left -= this.timedelta;
        if (this.time_left < 0) {
            this.time_left = 0;

            let [a, b] = this.root.players;
            if (a.status !== 6 && b.status !== 6) {
                a.status = b.status = 6;
                a.frame_current_cnt = b.frame_current_cnt = 0;
                a.vx = b.vx = 0;
            }
        }

        this.$timer.text(parseInt(this.time_left / 1000));

        this.render();
    }
    //清除上一帧的渲染效果
    render() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}