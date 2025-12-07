input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Asleep)
})
basic.showIcon(IconNames.Asleep)
