let temperatura = 0
input.onButtonPressed(Button.A, function () {
    temperatura = input.temperature()
    basic.showString("" + temperatura + "c")
})
