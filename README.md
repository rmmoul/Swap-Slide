# Swap-Slide
Swap link text and slideToggle a specified class.

# Demo

http://jsfiddle.net/rmmoul/ma0z60ut/

# Usage
    
Include the jquery.swap-slide.js file in your project, along with the latest version of jQuery.
    
Create a link with a class of "swap_slide", and include the following attributes:
    
- data-toggle-class: This is the class you want to toggle, and should have a css property "display:none;".
- data-swap-text: The text that will be shown after you click the link.

````
<div class="hidden_div">
    <p>When you've clicked the link, this will be shown.</p>
    <p>Click the link again to hide.</p>
</div>
    
<a href="#" class="swap_slide" data-toggle-class="hidden_div" data-swap-text="Hide Div">Click to show div</a>
````


