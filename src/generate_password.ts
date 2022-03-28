import { customAlphabet } from "nanoid";
import { showHUD, Clipboard } from "@raycast/api";

export default async function main() {
  const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!$%&?-_", 16);
  let password = nanoid();

  while (!/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password) || !/[0-9]/.test(password)) {
    password = nanoid();
  }

  await Clipboard.copy(password);

  await showHUD("🔐 Copied password to clipboard");
}
