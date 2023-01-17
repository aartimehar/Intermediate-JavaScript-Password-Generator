const CHARACTERS = {
  special: [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ],
  numeric: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  lowercase: [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ],
  uppercase: [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ]
}

// Function to prompt user for password options
function getPasswordOptions () {
  let passLengthInput = prompt(
    'How many characters should the password have? (At least 10 and less than 64)'
  )
  return passLengthInput
}

// Function for getting a random element from an array
function getRandom (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword (passLengthInput, allowedCharacterTypes) {
  let password = ''

  // Add characters to password while its less than minimum length
  while (password.length < passLengthInput) {
    // Append random character from allowedCharacterTypes to password
    for (const type of allowedCharacterTypes) {
      // Get array of characters of this type
      let possibleCharacters = CHARACTERS[type]
      // Get random element from selected character types array
      let randomCharacter = getRandom(possibleCharacters)
      // Add new random character to end of password
      password += randomCharacter
      if (password.length >= passLengthInput) break
    }
  }

  return password
}

const TYPES = ['lowercase', 'uppercase', 'numeric', 'special']

// Get references to the #generate element
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword () {
  // Get the selected character types
  var characterTypes = document.querySelector('#characterTypes')

  let allowedCharacterTypes = []

  for (let i = 0; i < characterTypes.children.length; i++) {
    let child = characterTypes.children[i]
    if (child.firstElementChild.checked) {
      allowedCharacterTypes.push(TYPES[i])
    }
  }

  if (allowedCharacterTypes.length === 0) {
    alert('Please select the option of characters')
    return
  }

  let passLengthInput = getPasswordOptions()

  if (passLengthInput < 10 || passLengthInput > 64) {
    alert(`Invalid password length: ${passLengthInput}`)
    return
  }

  var password = generatePassword(passLengthInput, allowedCharacterTypes)
  var passwordText = document.querySelector('#password')

  passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
