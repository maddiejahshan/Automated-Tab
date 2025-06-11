var doc = app.activeDocument;

// Loop through all stories (the text content of the document)
for (var i = 0; i < doc.stories.length; i++) {
    var story = doc.stories[i];

    // Split the text into lines (each line is a paragraph or line break)
    var lines = story.contents.split('\n'); 

    // Loop through each line
    for (var j = 0; j < lines.length; j++) {
        // Regular expression to match course codes like SPAN102, MATH201, etc.
        var courseCodePattern = /^[A-Za-z]{3,4}\d{3,4}/;

        // If the line matches the pattern (course code at the start of the line)
        if (courseCodePattern.test(lines[j])) {
            // Replace tabs with double tabs and ensure spaces are handled too
            lines[j] = lines[j].replace(/\t/g, "\t\t").replace(/ {1,}/g, '\t\t');
        }
    }

    // Rejoin the lines back into the story content
    story.contents = lines.join('\n');
}

alert("Tabs doubled in lines starting with a course code.");



