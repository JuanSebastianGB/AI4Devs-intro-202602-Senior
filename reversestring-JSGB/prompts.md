Act as an expert Front-End Developer and UI/UX Designer.

I need to create a web page with JavaScript logic that reverses the order of a text string. For example, if I input "AI4Devs", the output must be "sveD4IA".

I have two files: index.html (which has a basic boilerplate) and script.js (which is currently empty).

Here is my current index.html content:

HTML

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>
</head>
<body>
    >     <script src="script.js"></script>
</body>
</html>
Your task:

index.html: Provide the updated HTML code. Add a text input field, a button to trigger the reversal, and an element to display the reversed string. Keep the existing boilerplate intact.

script.js: Provide the complete Vanilla JavaScript code to grab the input value, reverse the string, and inject the result back into the HTML display element when the button is clicked. Include brief comments explaining the logic.

Design & Constraints (Crucial):

Strict File Limits: You must ONLY use the index.html and script.js files. Do not suggest or create a separate CSS file. All styles must be written inside a <style> block within the HTML <head>.

Amazing UI: Design a highly polished, modern, and beautiful interface. Center the content on the screen, use soft box-shadows, rounded corners (border-radius), nice hover effects for the button, and a pleasant, professional color scheme.

Crystal Clear Visibility: Accessibility and legibility are the highest priority. Ensure there is extreme contrast between the text and the background. Use large, easy-to-read modern web fonts, large input fields, and bold, clearly visible output text so the user doesn't have to squint.

Provide the code in clearly labeled code blocks for index.html and script.js so I can easily copy them.

# Second Prompt, advance task:

This is excellent. Now, I want to iterate on this code to reach an advanced level. >
Please update the script.js and the <style> block in index.html to implement the following three new features:

Real-Time Reversal: The reversed string must now generate and display in real-time as the user types, without needing to click the button. Listen for the text input's input event.

Conditional Button Visibility: The reversal button should be hidden by default. It must only appear (smoothly fade in/appear for a great UI) when the input text has strictly more than 3 characters.

Perfect Emoji Support (Crucial): The reversal logic must correctly handle emojis without breaking them. Do not use a simple .split('') because it destroys surrogate pairs and zero-width joiner (ZWJ) sequences. Use a modern, robust approach like Intl.Segmenter to split the string safely before reversing it.

Output:
Please provide the updated HTML (with any new CSS styles for the button transition) and the completely updated script.js file. Continue to maintain the amazing, high-contrast UI we established.
