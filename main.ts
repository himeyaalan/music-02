basic.showIcon(IconNames.Heart)
OLED.init(128, 64)
OLED.writeStringNewLine("Hi, I m Microbit Music.")
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1)) {
        music.playTone(175, music.beat(BeatFraction.Whole))
        basic.showString("F")
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1)) {
        music.playTone(196, music.beat(BeatFraction.Whole))
        basic.showString("G")
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P1)) {
        music.playTone(220, music.beat(BeatFraction.Whole))
        basic.showString("A")
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P1)) {
        music.playTone(247, music.beat(BeatFraction.Whole))
        basic.showString("B")
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P1)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("C")
    }
    if (input.buttonIsPressed(Button.A)) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B)) {
        music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.OnceInBackground)
        basic.showIcon(IconNames.StickFigure)
    }
})
