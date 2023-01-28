let cislo = 0
let dlenec = 0
input.onButtonPressed(Button.A, function () {
    cislo = randint(10, 99)
    basic.showNumber(cislo)
})
input.onButtonPressed(Button.B, function () {
    while (dlenec <= cislo) {
        if (cislo % dlenec == 0) {
            basic.clearScreen()
            basic.showNumber(dlenec)
        }
        dlenec += 1
        basic.pause(100)
    }
    basic.showString("HTV")
    dlenec = 0
})
