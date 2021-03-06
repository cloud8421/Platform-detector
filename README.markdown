###Platform detector 0.1
 
By Claudio Ortolina (claudio@jumpzero.com)

This simple script tries to solve a potential issue when some people fake their User Agent when browsing a specific site.

Some of them may do it for legitimate reasons: pretending to use Mobile Safari even on the desktop lets you sometimes avoid Flash video and use HTML5. There are however issues when you use user agent detection to serve different files or change Javascript logic.

This script is not at all a replacemente for tools like Modernizr. It simply aims to tell you what kind of platform you're dealing with. There are no version numbers or more granular parameters.

Please take into account that this script doesn't tell you what kind of support you have for a specific feature on a specific browser. Once again, Modernizr is a good tool for that.

Usage is simple. Just link it in your header

    <script type="text/javascript" src="platform_detector.js"></script>

Then you can access it by running the main function and assigning it to a variable:

    <script>
      var platform = platform_detector();
    </script>

The platform object you have now is made like this:

    platform = {
      pretend : 'what the browser is telling you it is',
      real: 'what the browser is under the hood'
    }

What's missing:

- More bulletproof regexp detection (for Safari and Chrome)
- Additional parameters for other browsers on other platforms (that requires some testing)
