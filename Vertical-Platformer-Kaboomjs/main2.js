
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

// loadSprite for player

loadSprite('idle-sprite', 'assets/Idle.png', {
    sliceX: 8, sliceY: 1,
    anims: { 'idle-anim': { from: 0, to: 7, loop: true } }
})

loadSprite('run-sprite', 'assets/Run.png', {
    sliceX: 8, sliceY: 1,
    anims: { 'run-anim': { from: 0, to: 7, loop: true } }
})

loadSprite('jump-sprite', 'assets/Jump.png', {
    sliceX: 8, sliceY: 1,
    anims: { 'jump-anim': { from: 0, to: 7, loop: true } }
})

loadSprite('fall-sprite', 'assets/Fall.png', {
    sliceX: 8, sliceY: 1,
    anims: { 'fall-anim': { from: 0, to: 7, loop: true } }
})

setGravity(1000);

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

// add trees

const tree = add([
    sprite('smaller-tree'),
    scale(4),
    pos(20, 190)

])

const biggerTree = add([
    sprite('bigger-tree'),
    scale(4),
    pos(900, 105)
])




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

//  scale map variable
map.use(scale(4))

// add player

const player = add([
    sprite('idle-sprite'),
    scale(2),
    area({ shape: new Rect(vec2(0), 32, 32), offset: vec2(0, 32) }),
    anchor('center'),
    body(),
    pos(900, 10),
    {
        speed: 500,
        previousHeight: null,
        heightDelta: 0,
        direction: 'right'
    }
])

player.play('idle-anim')

onkeydown('right', () => {
    player.move(-SPEED, 0)
})
//movement player Down and