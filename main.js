const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..',
  ' ': '/'
}

const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H",
  '/': ' '
}

const textContent = document.querySelector("#text-content");
const textTransl = document.querySelector("#text");
const btnText = document.querySelector("#btn-text");
const morseContent = document.querySelector("#morse-content");
const morseTransl = document.querySelector("#morse");
const btnMorse = document.querySelector("#btn-morse");

const getLatinCharacterList = (text) => {
  return text.split("");
};

const getMorseCharacterList = (text) => {  
  return text.split(" ");
};

const translateLatinCharacter = (caracter) => {
  return latinToMorse[caracter] || "Error !";
};

const translateMorseCharacter = (caracter) => {
  return morseToLatin[caracter] || "Error !"
};

const encode = (textEncode) => {
  const upperCaseText = textEncode.toUpperCase();
  const characters = getLatinCharacterList(upperCaseText);
  const morseTranslation = characters.map(translateLatinCharacter);
  const finalMorseTranslation = morseTranslation.join(" ");
  textContent.textContent = finalMorseTranslation
  textContent.classList.add("content")

  textContent.addEventListener("click", () => {
    copyToClipBoard(finalMorseTranslation)
    textContent.textContent = "Text Copié !"

    setTimeout(() => {
      textContent.textContent = finalMorseTranslation
    }, 1000)
  })
};

btnText.addEventListener("click", () => {
  encode(textTransl.value)
})

const decode = (textDecode) => {
  const upperCaseText = textDecode.trim();
  const words = upperCaseText.split(" / ")

  const translateWords = words.map(word => {
    const characters = getMorseCharacterList(word);
    return characters.map(translateMorseCharacter).join("");
  })

  const finalLatinTranslation = translateWords.join(" ").toLowerCase();
  morseContent.textContent = finalLatinTranslation
  morseContent.classList.add("content")

  morseContent.addEventListener("click", () => {
    copyToClipBoard(finalLatinTranslation)

    morseContent.textContent = "Text Copié !"

    setTimeout(() => {
      morseContent.textContent = finalLatinTranslation
    }, 1000)
  })
};

btnMorse.addEventListener("click", () => {
  decode(morseTransl.value);
})

const copyToClipBoard = async (text) => {
  try {
    await navigator.clipboard.writeText(texte);
  } catch (error) {
    console.error("Erreur lors de la copie :", error);
  }
};

// --------- Autres méthodes pour récuperer les éléments -----------

// const translateMorseCharacter = (caracter) => {
//   for (const morse in morseToLatin) {
//     if (morse === caracter) {
//       const translate = morseToLatin[caracter];
//       return translate;
//     }
//   }
// };x