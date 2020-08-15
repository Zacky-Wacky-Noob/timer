let time = 0
input.onButtonPressed(Button.A, function () {
    time = 60
})
input.onButtonPressed(Button.AB, function () {
    while (time >= 0) {
        basic.showNumber(time)
        basic.pause(1000)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        time += -1
    }
    music.playMelody("C5 B C5 B C5 B C5 B ", 500)
    music.playMelody("C5 B C5 B C5 B C5 B ", 500)
    music.playMelody("C5 B C5 B C5 B C5 B ", 500)
    music.playMelody("C5 B C5 B C5 B C5 B ", 500)
})
input.onButtonPressed(Button.B, function () {
    time = 120
})
