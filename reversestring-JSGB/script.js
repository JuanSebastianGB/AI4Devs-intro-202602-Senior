// Grab references to the DOM elements we need
const inputEl = document.getElementById("inputText");
const outputEl = document.getElementById("outputText");
const btn = document.getElementById("reverseBtn");

/**
 * reverseString
 * Splits the string into individual characters, reverses the array,
 * then joins them back into a single string.
 * e.g. "AI4Devs" → ["A","I","4","D","e","v","s"] → ["s","v","e","D","4","I","A"] → "sveD4IA"
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * handleReverse
 * Reads the input value, reverses it, then injects the result into the output element.
 * Also handles the empty-state styling and triggers the pop animation.
 */
function handleReverse() {
  const raw = inputEl.value; // read raw input
  const trimmed = raw.trim(); // strip leading/trailing whitespace

  if (trimmed === "") {
    // Nothing to reverse — restore placeholder state
    outputEl.textContent = "Result will appear here…";
    outputEl.className = "empty";
    return;
  }

  const reversed = reverseString(raw); // preserve inner spaces/casing

  // Remove the pop class briefly so re-triggering the animation works
  outputEl.classList.remove("pop");

  // A tiny timeout lets the browser register the class removal before re-adding
  requestAnimationFrame(() => {
    outputEl.textContent = reversed;
    outputEl.className = "pop"; // triggers the scale-in animation
  });
}

// Trigger on button click
btn.addEventListener("click", handleReverse);

// Also trigger when the user presses Enter inside the input field
inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleReverse();
});
