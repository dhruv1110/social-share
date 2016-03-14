# Library for Social sharing button implementation

This is used for implements social services sharing buttons to your website.

It helps to create buttons with minimum coding effort.

## Supported services
* Facebook
* Google Plus
* Twitter
* Linkedin
* YouTube
* Pinterest
* Instagram
* GitHub

## Installation
- `Unzip` the zip file or `Clone` this project to your work directory
- Add the following line code in your `head` element

```html
<link href="files/style.css" type="text/css" rel="stylesheet" />
<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="files/script.js"></script>
```
  
## Usage
  Create `ul` element with some attributes

 **Attributes**
    
      data-type    : rounded or circle or square
      data-bgcolor : backgroud color of buttons, #0088cc or blue
      data-size    : size in pixels
      data-align   : horizontal or vertical
      
  in `UL` create `LI` elements with attributes for each type of button you want
  
 **Attributes**
    
      data-url     : URL of page
      data-service : Name of service
      
  That's , You are done
  
## Example

```html
<ul class="social-share" data-type="rounded" data-bgcolor="black" data-size="64" data-align="horizontal">
	<li data-url="http://www.facebook.com/dhruv.patel11" data-rel="facebook"></li>
	<li data-url="http://www.twitter.com/DhruvP1110" data-rel="twitter"></li>
</ul>
```

So, Keep enjoy guysss..
If you found any bug or give me a suggestion mail me [dhruv.p1110@gmail.com](mailto:dhruv.p1110@gmail.com)
My website [WebBudds](http://www.webbudds.com)
