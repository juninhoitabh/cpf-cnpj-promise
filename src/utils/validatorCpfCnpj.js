const validatorCpfCnpj = (val) => {
  // Clean CPF/CNPJ
  const claenCpfCnpj = (cpfCnpj) => {
    let characters = cpfCnpj.trim();
    characters = characters.replace(/\D/g, '');
    return characters;
  };

  // Check if is CPF or CNPJ
  // CPF has 11 characters, CNPJ has 14
  const checkCpfCnpj = (cpfCnpj) => {
    if (cpfCnpj.length === 11) {
      return 'CPF';
    }
    if (cpfCnpj.length === 14) {
      return 'CNPJ';
    }
    return false;
  };

  const checkEquality = (cpfCnpj) => {
    const characters = cpfCnpj.split('');

    // Considers that all numbers are equal
    let allEquals = true;

    // get First characters in variable
    let lastVal = characters[0];

    // Check the difference of all characters, if the last number is different we have a different number
    characters.forEach((e) => {
      if (lastVal !== e) {
        allEquals = false;
      }
      // Records the last checked number
      lastVal = e;
    });
    // Return true for all numbers equals or false for differents
    return allEquals;
  };

  const calcDigitsPositions = (digits, positions = 10, sumDigits = 0) => {
    // Sum the digits with the position
    // Ex. For 10 positions:
    //   0    2    5    4    6    2    8    8   4
    // x10   x9   x8   x7   x6   x5   x4   x3  x2
    //   0 + 18 + 40 + 28 + 36 + 10 + 32 + 24 + 8 = 196
    for (let i = 0; i < digits.length; i += 1) {
      // Fill in the sum with the digit times the position
      sumDigits += digits[i] * positions;

      // Subtract 1 from the position
      positions -= 1;

      // Specific part for CNPJ
      // Ex .: 5-4-3-2-9-8-7-6-5-4-3-2
      if (positions < 2) positions = 9;
    }

    // Capture the rest of the division between sumDigits divided by 11
    // Ex .: 196% 11 = 9
    sumDigits %= 11;

    // Checks if sumDigits is less than 2
    if (sumDigits < 2) {
      // sumDigits will now be zero
      sumDigits = 0;
    } else {
      // If greater than 2, the result is 11 minus sumDigits
      // Ex .: 11 - 9 = 2
      // Our searched digit is 2
      sumDigits = 11 - sumDigits;
    }

    // Concatenates one more digit to the first nine digits
    // Ex .: 025462884 + 2 = 0254628842
    const cpfCnpj = `${digits}${sumDigits}`;

    return cpfCnpj;
  };

  const validatesCpf = (cpf) => {
    // Capture the first 9 digits of the CPF
    // Ex .: 02546288423 = 025462884
    const digits = cpf.substring(0, 9);

    // Calculates the first 9 digits of the CPF to obtain the first digit
    let newCpf = calcDigitsPositions(digits);

    // Calculates the 10 digits of the CPF to obtain the last digit
    newCpf = calcDigitsPositions(newCpf, 11);

    // Checks if all numbers are the same
    if (checkEquality(cpf)) return false;

    // Checks whether the new CPF generated is identical to the submitted CPF
    if (newCpf === cpf) {
      // valid CPF
      return true;
    }
    // Invalid CPF
    return false;
  };

  const validatesCnpj = (cnpj) => {
    // Captures the first 12 CNPJ numbers
    const firstNumberCnpj = cnpj.substring(0, 12);

    // Do the first calculation
    const firstCalculation = calcDigitsPositions(firstNumberCnpj, 5);

    // The second calculation is the same as the first, however, it starts at position 6
    const secondCalculation = calcDigitsPositions(firstCalculation, 6);

    // Concatenates the second digit with the CNPJ
    const newCnpj = secondCalculation;

    // Checks if all numbers are the same
    if (checkEquality(cnpj)) return false;

    // Checks whether the generated CNPJ is identical to the one sent
    if (newCnpj === cnpj) {
      // valid CNPJ
      return true;
    }
    // Invalid CNPJ
    return false;
  };

  const checkValidates = checkCpfCnpj(claenCpfCnpj(val));

  // Validates CPF
  if (checkValidates === 'CPF') {
    // Returns true for valid cpf
    return validatesCpf(val);
  }
  if (checkValidates === 'CNPJ') {
    // Returns true for valid cpf
    return validatesCnpj(val);
  }
  return false;
};

export default validatorCpfCnpj;
