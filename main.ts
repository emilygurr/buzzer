music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(262, music.beat(BeatFraction.Breve))
    } else if (input.buttonIsPressed(Button.B)) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
})
