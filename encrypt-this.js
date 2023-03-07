/*
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

    Your message is a string containing space separated words.
    You need to encrypt each word in the message using the following rules:
        The first letter must be converted to its ASCII code.
        The second letter must be switched with the last letter
    Keepin' it simple: There are no special characters in the input.

Examples:

encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/
var encryptThis = function(text) {
    let textArr = text.split(' ').map(ele => {
      let encrypt = ele.charCodeAt(0)
      if (ele.length === 2) {
        return encrypt + ele[1]
      } else if (ele.length >= 3){
        encrypt += ele[ele.length - 1]
        let secondChar = ele[1]
        for (let i = 2; i < ele.length - 1; i++) {
          encrypt += ele[i]
        }
        encrypt += secondChar
      }
      return encrypt
    })
    return textArr.join(' ')
}