// From https://github.com/solana-labs/solana-program-library/blob/master/token/program/src/error.rs
export const TOKEN_PROGRAM_ERRORS = {
  "0x0": "Lamport balance below rent-exempt threshold",
  "0x1": "Insufficient funds. Make sure you have enough SOL in wallet.",
  "0x2": "Invalid Mint",
  "0x3": "Account not associated with this Mint",
  "0x4": "Owner does not match",
  "0x5": "This token's supply is fixed and new tokens cannot be minted",
  "0x6": "The account cannot be initialized because it is already being used",
  "0x7": "Invalid number of provided signers",
  "0x8": "Invalid number of required signers",
  "0x9": "State is uninitialized",
  "0xA": "Instruction does not support native tokens",
  "0xB": "Non-native account can only be closed if its balance is zero",
  "0xC": "Invalid instruction",
  "0xD": "State is invalid for requested operation",
  "0xE": "Operation overflowed",
  "0xF": "Account does not support specified authority type",
  "0x10": "This token mint cannot freeze accounts",
  "0x11": "Account is frozen; all account operations will fail",
  "0x12": "Mint decimals mismatch between the client and mint",
  "0x13": "Instruction does not support non-native tokens",
};