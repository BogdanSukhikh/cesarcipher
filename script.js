// Caesar Cipher Logic
function caesarCipher(text, shift, encode = true) {
  const alphabetEng = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const alphabetRus = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";
  const alphabetUkr = "АБВГҐДЕЄЖЗИІЇЙКЛМНОПРСТУФХЦЧШЩЬЮЯабвгґдеєжзиіїйклмнопрстуфхцчшщьюя";

  const allAlphabets = [alphabetEng, alphabetRus, alphabetUkr];
  const shiftedAlphabet = encode ? shift : -shift;

  return text
    .split("")
    .map((char) => {
      for (let alphabet of allAlphabets) {
        const index = alphabet.indexOf(char);
        if (index !== -1) {
          const newIndex = (index + shiftedAlphabet + alphabet.length) % alphabet.length;
          return alphabet[newIndex];
        }
      }
      return char; // Non-alphabetic character
    })
    .join("");
}

// Event Listeners
document.getElementById("encode").addEventListener("click", () => {
  const text = document.getElementById("text").value;
  const key = parseInt(document.getElementById("key").value, 10);
  if (!text || isNaN(key)) {
    alert("Please enter valid text and key!");
    return;
  }
  const result = caesarCipher(text, key, true);
  document.getElementById("output").value = result;
});

document.getElementById("decode").addEventListener("click", () => {
  const text = document.getElementById("text").value;
  const key = parseInt(document.getElementById("key").value, 10);
  if (!text || isNaN(key)) {
    alert("Please enter valid text and key!");
    return;
  }
  const result = caesarCipher(text, key, false);
  document.getElementById("output").value = result;
});
