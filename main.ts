// Make the Judge Smile — make.fun bounty
// u-gentle-badger-68-make-the-judge-smile-9228676d
//
// The entry: one line, at most 200 characters, about a small good
// thing that happened today — judged on subject first, then warmth,
// then surprise, then one concrete detail, then fresh wording.
const LINE =
  "On the morning train, a toddler pressed half her biscuit into my hand, solemn as a diplomat signing a treaty — and whispered, 'you get the chocolate side.'";

console.log(LINE);

// Output check: the brief allows one line of at most 200 characters.
const chars = [...LINE].length;
if (LINE.includes("\n") || chars > 200) {
  console.error(`INVALID: ${chars} characters, must be one line of at most 200.`);
  process.exit(1);
}
console.log(`OK: one line, ${chars} characters (limit 200).`);
