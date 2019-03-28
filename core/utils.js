const e = sel => document.querySelector(sel)

const log = console.log.bind(console)

function randomOne(_list) {
    if (_list.length == 0) {
        return null
    }

    let index = Math.random() * _list.length
    index = parseInt(index)
    return _list[index]
}

function randomBetween(min, max) {
    let offset = (max - min) * Math.random()
    return min + offset
}

function checkRect(o1, o2) {
    // 计算两矩形中心点的x，y距离
    var midXDis = Math.abs(((o1.x + o1.x +o1.w) - (o2.x + o2.x +o2.w)) / 2)
    var midYDis = Math.abs(((o1.y + o1.y +o1.h) - (o2.y + o2.y +o2.h)) / 2)
    return midXDis <= (o1.w + o2.w) / 2 &&  midYDis <= (o1.h + o2.h) / 2
}
