/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/
function encrypt(text, n) {
    let encrypted = text
    if (text == null) return null
    for (let i = 0; i < n; i++) {
      let temp = ''    
      for (let j = 1; j < text.length; j += 2) {
        temp += encrypted[j]
      }
      for (let j = 0; j < text.length; j += 2) {
        temp += encrypted[j]
      }
      encrypted = temp
    }
    return encrypted
  }
  
  function decrypt(encryptedText, n) {
    let decrypted = encryptedText
    for (let i = 0; i < n; i++) {
      let temp = ''
      if (encryptedText !== null) {
        let firstHalf = decrypted.slice(0, Math.floor(decrypted.length/2))
        let lastHalf = decrypted.slice(Math.floor(decrypted.length/2))
          
        //console.log(firstHalf, '|||', lastHalf)
        for (let j = 0; j < lastHalf.length; j++) {
          temp += lastHalf[j]
          if (j < firstHalf.length) {
            temp += firstHalf[j]
          }        
        }
      }
      decrypted = temp
    }
    return decrypted
  }