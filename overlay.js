/**
 * overlay.js
 * For each element matching the selector passed into setOverlay()
 * the attribute 'data-content' is set to the content of the element
 * and the class 'overlay' is added to the element.
 *
 * Example usage: setOverlay('h1.myClass, .anotherClass');
**/
function setOverlay(selector) {
    // Create a div for testing browser support
    var t = document.createElement('div');
    // If the browser supports the 'content' CSS property
    if ('content' in t.style) {
        // Create a <style> element
        var s = document.createElement('style');
        // General CSS for laying out the overlay elements
        var c = ".overlay { position: relative; } .overlay:after { position: absolute; top: 0; left: 0; z-index: 10; content: attr(data-content); }";
        // Add this CSS to the <style> element
        if (s.styleSheet) {
            s.styleSheet.cssText = c;
        } else {
            s.appendChild(document.createTextNode(c));
        }
        // Append the <style> element to the <head>
        document.getElementsByTagName("head")[0].appendChild(s);
        // Get a list of elements matching the selector
        var e = document.querySelectorAll(selector);
        // For each element
        for (var i = 0; i < e.length; i++) {
            // Add the class 'overlay' to the element
            e[i].className += ' overlay';
            // Put the element's contents in our testing div
            t.innerHTML = e[i].innerHTML;
            // so that we can extract the plain text version from the div
            var p = t.textContent || t.innerText;
            // Set the data-content to the contents of the element
            e[i].setAttribute('data-content', p);
        }
    }
}