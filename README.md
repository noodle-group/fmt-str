# fmt-str

`fmt-str` is a TypeScript module for formatting strings according to a predefined pattern. The pattern is defined by a string where special characters represent different types of characters to include in the output.

## Installation

Use the npm package manager to install `fmt-str`:

```bash
npm install fmt-str
```

## Usage

Import the `fmt-str` package and use the `formatString` function:

### Examples

Format a phone number with format `(NNN) NNN-NNNN`:

```typescript
const phoneNumber = "1234567890";
const formattedPhoneNumber = formatString("(NNN) NNN-NNNN", phoneNumber);
console.log(formattedPhoneNumber); // Outputs: "(123) 456-7890"
```

Format an Insurance Policy Number of format `PL01-NNNNNNN-NN`:

```typescript
const insurancePolicyNumber = "123456789";
const formattedInsurancePolicyNumber = formatString("PL01-NNNNNNN-NN", insurancePolicyNumber);
console.log(formattedInsurancePolicyNumber); // Outputs: "PL01-1234567-89"
```

Format a credit card number `NNNN NNNN NNNN NNNN`:

```typescript
const creditCardNumber = "1234567812345678";
const formattedCreditCardNumber = formatString("NNNN NNNN NNNN NNNN", creditCardNumber);
console.log(formattedCreditCardNumber); // Outputs: "1234 5678 1234 5678"
```

In the format string:

- 'N' represents a number
- 'A' represents a letter
- 'X' represents a letter or a number
- '\\N', '\\A', and '\\X' are treated as literal characters 'N', 'A', and 'X' respectively
- All other characters are treated as literals

If the string does not match the format, only the matching portion will be included in the output.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

Please reach out to the package author for any questions, issues, or support needs.