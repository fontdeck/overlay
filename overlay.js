function setOverlay(selector) {
    // Create a div for testing browser support
    var t = document.createElement('div');
    // If the browser supports the 'content' CSS property
    if ('content' in t.style) {
        // Create general style for laying out the overlay elements
        var s = document.createElement('style');
        var c = ".overlay { position: relative; } .overlay:after { position: absolute; top: 0; left: 0; z-index: 10; content: attr(data-content); }";
        if (s.styleSheet) {
            s.styleSheet.cssText = c;
        } else {
            s.appendChild(document.createTextNode(c));
        }
        // Add the style to the head
        document.getElementsByTagName("head")[0].appendChild(s);
        // Add the class has-overlay to the body
        document.body.className += ' has-overlay';
        // Get a list of elements matching the selector
        var e = document.querySelectorAll(selector);
        // For each element
        for (var i = 0; i < e.length; i++) {
            e[i].className += ' overlay';
            // Put the element's contents in our testing div
            t.innerHTML = e[i].innerHTML;
            // so that we can extract the plain text version from the div
            var p = t.textContent || t.innerText;
            // Set the data-content to the plain text version of the content
            e[i].setAttribute('data-content', p);
        }
    }
}