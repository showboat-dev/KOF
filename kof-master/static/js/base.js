import { GameMap } from '/static/js/game_map/base.js';
import { Kyo } from '/static/js/player/kyo.js';
//创建整个游戏，比如地图和players
class KOF {
    constructor(id) {//构造函数
        this.$kof = $('#' + id);//获取该游戏区域的Id

        this.game_map = new GameMap(this);//创建地图
        this.players = [//创建玩家
            new Kyo(this, {
                id: 0,
                x: 200,
                y: 0,
                width: 120,
                height: 200,
                color: 'blue',
            }),
            new Kyo(this, {
                id: 1,
                x: 900,
                y: 0,
                width: 120,
                height: 200,
                color: 'red',
            }),
        ];
    }
}


export {
    KOF
}