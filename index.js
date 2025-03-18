// Check 1 & 2: body tags (combined since they're related)
const hasBodyOpening = html && html.innerHTML.includes("<body>");
const hasBodyClosing = html && html.innerHTML.includes("</body>");
console.log("Contains <body> tag:", hasBodyOpening);
console.log("Contains </body> tag:", hasBodyClosing);

// Check 3: h1 tag (error: expected '' to include '<h1>')
const hasH1 = body && body.innerHTML.includes("<h1>");
console.log("Contains <h1> tag:", hasH1);

// Check 4: p tag (error: expected '' to include '<p>')
const hasP = body && body.innerHTML.includes("<p>");
console.log("Contains <p> tag:", hasP);

// Check 5: strong tag (error: null innerHTML)
const hasStrong = p && p.innerHTML.includes("<strong>");
console.log("Paragraph contains <strong> tag:", hasStrong);

// Check 6: em tag (error: null innerHTML)
const hasEm = p && p.innerHTML.includes("<em>");
console.log("Paragraph contains <em> tag:", hasEm);

// Check 7: a tag (error: null innerHTML)
const hasCorrectLink = link && link.outerHTML.includes('<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">');
console.log("Paragraph contains specific <a> tag:", hasCorrectLink);

// Check 8: table tag (error: expected '' to include 'table')
const hasTable = body && body.innerHTML.includes("table");
console.log("Contains <table> tag:", hasTable);