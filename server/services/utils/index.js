function makeRef() {
    
    let text = "";
    const possiblePart1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const possiblePart2 = "0123456789";

    for (var i = 0; i < 4; i++) {
        text += possiblePart1.charAt(Math.floor(Math.random() * possiblePart1.length));
    }

    for (var i = 0; i < 4; i++) {
        text += possiblePart2.charAt(Math.floor(Math.random() * possiblePart2.length));
    }

    return text;
}

module.exports = makeRef;