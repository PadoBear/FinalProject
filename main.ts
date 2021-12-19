namespace SpriteKind {
    export const res = SpriteKind.create()
}
let list: number[] = []
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -100
    }
})
function level () {
    if (Checkpoint == 0) {
        scene.setBackgroundColor(9)
        // 地圖一
        tiles.setTilemap(tilemap`層級1`)
    } else if (Checkpoint == 1) {
        scene.setBackgroundColor(3)
        // 地圖二
        tiles.setTilemap(tilemap`層級1`)
    } else if (Checkpoint == 2) {
        scene.setBackgroundColor(11)
        // 地圖三
        tiles.setTilemap(tilemap`層級1`)
    } else {
        scene.setBackgroundColor(11)
        // 地圖三
        tiles.setTilemap(tilemap`層級1`)
    }
    mySprite.ay = 200
    scene.cameraFollowSprite(mySprite)
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.placeOnTile(mySprite, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
        // 觸發物
        FLOWER = sprites.create(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, SpriteKind.res)
        tiles.placeOnTile(FLOWER, value)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        false
        )
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of list) {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false)
})
function bullet () {
    if (info.score() < 5) {
        if (mySprite.vx > 0) {
            mySprite.setImage(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f1111111df.......
                ......fd1111111ddf......
                ......fd111111dddf......
                ......fd111ddddddf......
                ......fd1dfbddddbf......
                ......fbddfcdbbbcf......
                .......f11111bbcf.......
                .......f1b1fffff........
                .......fbfc111bf........
                ........ff1b1bff........
                .........fbfbfff.f......
                ..........ffffffff......
                ............fffff.......
                ........................
                ........................
                ........................
                ........................
                `)
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                2 . . . . . . . . . . . . . . . 
                2 2 . . . . . . . . . . . . . . 
                4 2 2 f f f f f f f f f . . . . 
                4 4 2 f f f f f f f f f f f . . 
                4 2 2 f f f f f f f f f 2 f f . 
                2 2 2 f f f f f f f f f f f f . 
                4 2 4 f f f f f f f f f f f f . 
                2 2 2 f f f f f f f f f f f . . 
                4 4 2 f f f f f f f f f . . . . 
                2 2 2 . . . . . . . . . . . . . 
                . 4 2 2 . . . . . . . . . . . . 
                2 2 . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 150, 4)
        } else if (mySprite.vx < 0) {
            mySprite.setImage(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......fd1111111f.......
                ......fdd1111111df......
                ......fddd111111df......
                ......fdddddd111df......
                ......fbddddbfd1df......
                ......fcbbbdcfddbf......
                .......fcbb11111f.......
                ........fffff1b1f.......
                ........fb111cfbf.......
                ........ffb1b1ff........
                ......f.fffbfbf.........
                ......ffffffff..........
                .......fffff............
                ........................
                ........................
                ........................
                ........................
                `)
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 2 
                . . . . . . . . . . . . . . 2 2 
                . . . . f f f f f f f f f 2 2 4 
                . . f f f f f f f f f f f 2 4 4 
                . f f 2 f f f f f f f f f 2 2 4 
                . f f f f f f f f f f f f 2 2 2 
                . f f f f f f f f f f f f 4 2 4 
                . . f f f f f f f f f f f 2 2 2 
                . . . . f f f f f f f f f 2 4 4 
                . . . . . . . . . . . . . 2 2 2 
                . . . . . . . . . . . . 2 2 4 . 
                . . . . . . . . . . . . . . 2 2 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -150, 4)
        }
    } else {
        if (mySprite.vx < 0) {
            mySprite.setImage(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......f1111111df.......
                ......fd1111111ddf......
                ......fd111111dddf......
                ......fd111ddddddf......
                ......fd1dfbddddbf......
                ......fbddfcdbbbcf......
                .......f11111bbcf.......
                .......f1b1fffff........
                .......fbfc111bf........
                ........ff1b1bff........
                .........fbfbfff.f......
                ..........ffffffff......
                ............fffff.......
                ........................
                ........................
                ........................
                ........................
                `)
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . 2 2 2 2 
                . . . . . . f . 2 2 . . . . 2 . 
                . . . . . f 2 f 2 2 2 2 . . 2 . 
                . . . . . f 2 f . 2 . 2 2 2 . . 
                . . . . f 2 2 f f f f . . . 2 2 
                . . . f 2 2 2 2 2 2 f f f . . . 
                . . . f 2 2 2 2 2 2 f f f . 2 2 
                . . . . f 2 2 f f f f . . 2 2 2 
                . . . . . f 2 f . 2 2 2 2 2 2 . 
                . . . . . f 2 f . . 2 . . 2 2 2 
                . . . . . . f . 2 . . 2 2 . 2 2 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -300, 10)
        } else if (mySprite.vx >= 0) {
            mySprite.setImage(img`
                ........................
                ........................
                ........................
                ........................
                ..........ffff..........
                ........ff1111ff........
                .......fb111111bf.......
                .......fd1111111f.......
                ......fdd1111111df......
                ......fddd111111df......
                ......fdddddd111df......
                ......fbddddbfd1df......
                ......fcbbbdcfddbf......
                .......fcbb11111f.......
                ........fffff1b1f.......
                ........fb111cfbf.......
                ........ffb1b1ff........
                ......f.fffbfbf.........
                ......ffffffff..........
                .......fffff............
                ........................
                ........................
                ........................
                ........................
                `)
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                2 2 . 2 2 . . 2 . f . . . . . . 
                2 2 2 . . 2 . . f 2 f . . . . . 
                . 2 2 2 2 2 2 . f 2 f . . . . . 
                2 2 2 . . f f f f 2 2 f . . . . 
                2 2 . f f f 2 2 2 2 2 2 f . . . 
                . . . f f f 2 2 2 2 2 2 f . . . 
                2 2 . . . f f f f 2 2 f . . . . 
                . . 2 2 2 . 2 . f 2 f . . . . . 
                . 2 . . 2 2 2 2 f 2 f . . . . . 
                . 2 . . . . 2 2 . f . . . . . . 
                2 2 2 2 . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 300, 10)
        }
    }
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    status.spriteAttachedTo().destroy()
    info.changeScoreBy(1)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    status.spriteAttachedTo().destroy()
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    bullet()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    Checkpoint += Checkpoint + 1
    level()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.res, function (sprite, otherSprite) {
    // 敵人一
    monster = sprites.create(img`
        . . . . . b b b b b b . . . . . 
        . . . b b 9 9 9 9 9 9 b b . . . 
        . . b b 9 9 9 9 9 9 9 9 b b . . 
        . b b 9 d 9 9 9 9 9 9 9 9 b b . 
        . b 9 d 9 9 9 9 9 1 1 1 9 9 b . 
        b 9 d d 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 d 9 9 9 9 9 9 1 1 1 9 9 9 b 
        b 9 3 9 9 9 9 9 9 9 9 9 1 9 9 b 
        b 5 3 d 9 9 9 9 9 9 9 9 9 9 9 b 
        b 5 3 3 9 9 9 9 9 9 9 9 9 d 9 b 
        b 5 d 3 3 9 9 9 9 9 9 9 d d 9 b 
        . b 5 3 3 3 d 9 9 9 9 d d 5 b . 
        . b d 5 3 3 3 3 3 3 3 d 5 b b . 
        . . b d 5 d 3 3 3 3 5 5 b b . . 
        . . . b b 5 5 5 5 5 5 b b . . . 
        . . . . . b b b b b b . . . . . 
        `, SpriteKind.Enemy)
    monster.setPosition(mySprite.x + 75, FLOWER.y)
    monster.follow(mySprite, 10)
    unfriendly = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
    unfriendly.max = 80
    unfriendly.setColor(7, 2)
    unfriendly.attachToSprite(monster)
    otherSprite.destroy()
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    if (info.score() < 5) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -10
    } else {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -20
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    statusbars.getStatusBarAttachedTo(StatusBarKind.Health, mySprite).value += -20
})
let unfriendly: StatusBarSprite = null
let monster: Sprite = null
let projectile2: Sprite = null
let FLOWER: Sprite = null
let mySprite: Sprite = null
let Checkpoint = 0
Checkpoint = 0
// 腳色一(可男可女)
mySprite = sprites.create(img`
    ........................
    ........ffffffff........
    .......f........f.......
    ......f..........f......
    .....f............f.....
    ....f..............f....
    ....f..............f....
    ...f................f...
    ...f................f...
    ...f................f...
    ....f..............f....
    ....f..............f....
    ....ff....f..f....ff....
    .....ff...f..f...ff.....
    ......fff......fff......
    ........ff....ff........
    ......ff........ff......
    ......f..........f......
    .....f............f.....
    .....f............f.....
    ......fff......fff......
    .......f.ffffff.f.......
    .......f...ff...f.......
    ........fff..fff........
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
level()
let friendly = statusbars.create(20, 4, StatusBarKind.Health)
friendly.max = 100
friendly.setColor(7, 2)
friendly.attachToSprite(mySprite)
// 腳色動作
game.onUpdate(function () {
    mySprite.setImage(img`
        ........................
        ........................
        ........................
        .........fffff..........
        ........ffeeefff........
        .......ffeeeeeeff.......
        ......ffeeeeeeeeff......
        ......feeeeeeeeeef......
        .....ffeeeeeeeeeeff.....
        .....feeeeeeeeeeeef.....
        .....feeeefeeeeeeff.....
        .....ffeef1fe1feff......
        ......fefd6df6dff.......
        .......fddddddddf.......
        ........ffddddff........
        .......f88fddf88f.......
        .....ff8888888888ff.....
        ....f888f888888f888f....
        ....fddf.fcc5cf.fddf....
        .....ff.fccffccf.ff.....
        .......faaf..faaf.......
        .......ffff..ffff.......
        ........................
        ........................
        `)
    if (mySprite.vy < 0) {
        mySprite.setImage(img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            .......ffb1111ff........
            ......fb1111111bf.......
            ......f111111111f.......
            .....ffff1111111df......
            ....fb111c1dd111df......
            ....ffb1b1fdcf11bf......
            .....ffbfbfb11111f......
            ......ffffcfdb1b1f......
            .......fcccfcfbfbf......
            ........ffffffffff......
            .........ffffff.........
            .........ffffff.........
            .....f..fffffff.........
            .....fffffffff..........
            ......fffffff...........
            ........................
            ........................
            ........................
            ........................
            `)
    } else if (mySprite.vy > 0) {
        mySprite.setImage(img`
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            ......fbd1111111f.......
            ......fdd1111111df......
            ......fddd111111df......
            ......fdddddd111df......
            ......fdddddd111df......
            ......fbddddddd1df......
            ......ffbbddbfd1df......
            .......fcbbdcfddbf......
            .......fffbddccffff.....
            .......ffffcfbbb1bcf....
            ......ffffffffcd1b1f....
            ...ffffffffff..fdfdf....
            .....ffffff.....f.f.....
            ........................
            ........................
            ........................
            ........................
            ........................
            `)
    } else if (mySprite.x / 0 == 0) {
        mySprite.setImage(img`
            ........................
            ........................
            ........................
            .........fffff..........
            ........ffeeefff........
            .......ffeeeeeeff.......
            ......ffeeeeeeeeff......
            ......feeeeeeeeeef......
            .....ffeeeeeeeeeeff.....
            .....feeeeeeeeeeeef.....
            .....feeeefeeeeeeff.....
            .....ffeef1fe1feff......
            ......fefd6df6dff.......
            .......fddddddddf.......
            ........ffddddff........
            .......f88fddf88f.......
            .....ff8888888888ff.....
            ....f888f888888f888f....
            ....fddf.fcc5cf.fddf....
            .....ff.fccffccf.ff.....
            .......faaf..faaf.......
            .......ffff..ffff.......
            ........................
            ........................
            `)
    }
    if (mySprite.vx > 0) {
    	
    }
})
