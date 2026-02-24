// ── DOM references ────────────────────────────────────────────────────────────
const inputEl = document.getElementById("inputText");
const outputEl = document.getElementById("outputText");
const btn = document.getElementById("reverseBtn");
const charHintEl = document.getElementById("charHint");

// How many characters the user must exceed before the button appears
const BTN_THRESHOLD = 3;

// ── Emoji-safe string reversal ────────────────────────────────────────────────
/**
 * reverseString(str)
 *
 * Uses `Intl.Segmenter` to split the string into user-perceived characters
 * (grapheme clusters). This correctly handles:
 *   • Multi-byte emoji          → 🚀 🎉 🔥
 *   • Emoji with skin tones     → 👋🏽 (base + modifier)
 *   • ZWJ sequences             → 👨‍👩‍👧 (family emoji joined by U+200D)
 *   • Flag emoji                → 🇺🇸 (two regional indicator letters)
 *
 * A naïve .split('') would shatter these into broken surrogate pairs.
 */
function reverseString(str) {
  // Intl.Segmenter is supported in all modern browsers (Chrome 87+, Firefox 125+, Safari 14.1+)
  const segmenter = new Intl.Segmenter(); // default granularity: 'grapheme'
  const segments = [...segmenter.segment(str)]; // iterate segment objects
  const graphemes = segments.map((seg) => seg.segment); // extract the raw string for each cluster
  return graphemes.reverse().join(""); // reverse array → rejoin
}

// ── Core update function (runs on every keystroke) ────────────────────────────
/**
 * update()
 *
 * 1. Reads the current input value.
 * 2. Updates the character-count hint.
 * 3. Shows / hides the button based on grapheme count vs. threshold.
 * 4. Reverses the string in real-time and injects it into the output element.
 */
function update() {
  const raw = inputEl.value;

  // Count user-perceived characters (graphemes), not raw code units,
  // so that an emoji counts as 1 character, not 2 or more.
  const segmenter = new Intl.Segmenter();
  const graphemes = [...segmenter.segment(raw)];
  const charCount = graphemes.length;

  // ── Character count hint ───────────────────────────────────────────────
  if (charCount === 0) {
    charHintEl.textContent = "";
    charHintEl.className = "char-hint";
  } else if (charCount <= BTN_THRESHOLD) {
    const remaining = BTN_THRESHOLD - charCount + 1;
    charHintEl.textContent = `${remaining} more character${remaining !== 1 ? "s" : ""} to reveal the button`;
    charHintEl.className = "char-hint near";
  } else {
    charHintEl.textContent = `${charCount} characters`;
    charHintEl.className = "char-hint";
  }

  // ── Conditional button visibility ──────────────────────────────────────
  // Smooth fade + height animation is handled purely by CSS via the .visible class
  if (charCount > BTN_THRESHOLD) {
    btn.classList.add("visible");
  } else {
    btn.classList.remove("visible");
  }

  // ── Real-time reversal ─────────────────────────────────────────────────
  if (charCount === 0) {
    // Restore placeholder state
    outputEl.textContent = "Start typing to see the magic…";
    outputEl.className = "empty";
    return;
  }

  const reversed = reverseString(raw);

  // Re-trigger the pop animation by briefly removing the class
  outputEl.classList.remove("pop");
  requestAnimationFrame(() => {
    outputEl.textContent = reversed;
    outputEl.className = "pop";
  });
}

// ── Event listeners ───────────────────────────────────────────────────────────

// Real-time: fires on every insertion, deletion, paste, cut, etc.
inputEl.addEventListener("input", update);

// Button click still works as an explicit trigger (e.g. keyboard users)
btn.addEventListener("click", update);

// Enter key inside the input also triggers an update
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") update();
});

// ── Initialise ────────────────────────────────────────────────────────────────
// Run once on page load so the UI state is consistent if the browser
// auto-fills the input field
update();
