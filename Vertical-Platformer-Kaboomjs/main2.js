
kaboom({
    width: 1280,
    height: 720
})




loadSprite('background-0', 'assets/background_0.png')
loadSprite('background-1', 'assets/background_1.png')
loadSprite('background-2', 'assets/background_2.png')

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