
kaboom({
    width: 1280,
    height: 720
})


// load BACKGROUND

loadSprite('background-0', 'assets/background_0.png')
loadSprite('background-1', 'assets/background_1.png')
loadSprite('background-2', 'assets/background_2.png')

//load SPRITES tileset
loadSpriteAtlas('assets/tileset.png', {
    'platform-left': { x: 81, y: 64, width: 16, height: 8 },
    'platform-middle': { x: 112, y: 64, width: 16, height: 8 },
    'platform-right': { x: 142, y: 64, width: 16, height: 8 },
    'smaller-tree': { x: 0, y: 80, width: 60, height: 65 },
    'bigger-tree': { x: 170, y: 10, width: 115, height: 200 },
    'ground': { x: 80, y: 144, width: 16, height: 16 },
    'ground-deep': { x: 0, y: 144, width: 16, height: 16 }
})

//add BACKGROUND

add([
    sprite('background-0'),
    fixed(),
    scale(4)

])

add([
    sprite('background-0'),
    fixed(),
    pos(1000, 0),
    scale(4),
]).flipX = true


add([
    sprite('background-1'),
    fixed(),
    scale(4)
])


add([
    sprite('background-1'),
    fixed(),
    pos(1000, 0),
    scale(4)
]).flipX = true


add([
    sprite('background-2'),
    fixed(),
    scale(4)
])

add([
    sprite('background-2'),
    fixed(),
    pos(1000, 0),
    scale(4)
]).flipX = true


//add MAPLEVEL 

const map = addLevel([
    '5                                                     5',
    '5                                                     5',
    '5   012                  012                  012     5',
    '5        012                                          5',
    '5                                   012               5',
    '5   012              012                              5',
    '5             012                                     5',
    ' 333333                      012           012        5',
    ' 444444                                               5',
    ' 444444   012                                         5',
    ' 33333333333333333333333333333333333333333333333333333 ',
    ' 44444444444444444444444444444444444444444444444444444 '
], {
    tileWidth: 16,
    tileHeight: 16,
    tiles: {
        0: () => [sprite('platform-left'), area(), body({ isStatic: true })],
        1: () => [sprite('platform-middle'), area(), body({ isStatic: true })],
        2: () => [sprite('platform-right'), area(), body({ isStatic: true })],
        3: () => [sprite('ground'), area(), body({ isStatic: true })],
        4: () => [sprite('ground-deep'), area(), body({ isStatic: true })],
        5: () => [rect(16, 16), opacity(0), area(), body({ isStatic: true })]

    }
})

map.use(scale(4))