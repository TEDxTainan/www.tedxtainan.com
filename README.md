

![Customizr - Free Wordpress Theme](/screenshot.png)  

# Copyright
**Customizr** is a free WordPress theme designed by Nicolas Guillaume in Nice, France. ([website : Themes and Co](http://www.themesandco.com>))  
Feel free to use, modify and redistribute this theme as you like.
You may remove any copyright references (unless required by third party components) and crediting is not necessary, but very appreciated... ;-D.  
Customizr is distributed under the terms of the GNU GPL. 

# Installation
1. Upload the `customizr` folder to the `/wp-content/themes/` directory
Activation and Use
1. Activate the Theme through the 'Themes' menu in WordPress
2. See Appearance -> Customiz'it to change theme options

# User Guide and Main Features
## WP Version
Since this theme uses the WordPress customizer feature for most options, it requires at least version 3.4 to work properly.
Please make sure your WP version is at least 3.4.

## Choosing a skin 
The theme comes with seven skins. The default skin is the blue one. Open the customizer screen to select your prefered skin.

## Uploading a logo and a favicon 
Go to the customizer screen in the logo and favicon section and upload your images.
For best results, try uploading a logo with the following maximum dimensions => max-height :100px, max-width ; 250px

## Home page settings 
All settings for home page are available in the customizer screen. You can :
* Select a static page/ your lasts posts (the number of posts per page can be changed in the page and post layout section),
* Choose a layout for your sidebars : full-width, left, right, two sidebars,
* Select a slider among the ones you have created (see below for slider creation) and choose the slider options : full-width or boxed, delay between slides. To remove the demo slider : select "No slider" in the dropdown list.
* Set your home featured pages and text (you can also disable this feature). To remove the featured pages area : select "Hide" in the dropdown list.

## Selecting a menu 
Customizr comes with one menu location in the header. Select a menu in the customizr screen => menu section

## Pages and posts layout 
With Customizr, you can define your page and post layout at two levels :
1. In the main option screen (Customizer screen) : you can define the global default layout for all your website, for all your posts and for all your pages. Four choices are available for the sidebars location : full-width (no sidebars), left, right, two sidebars.  
2. In each post or page editing screen, you can define a particular layout in a dedicated box: full-width (no sidebars), left, right, two sidebars.

## Social links 
You can set up to nine social network profile in the customizer option screen. Write the url of your social profile in the fields.
The social icons can be displayed in four predefined location of your website : header, footer, top of right sidebar, top of left sidebar.

## Slider management
### Creation
1. Go to the edit screen of any image
2. Find the Slider options box
3. Check "Add to a slider"
4. Set the optional call to action fields : title, description, text of the button and link to page/post
5. Write a name and click on the "Add a slider" button : this will automatically add the current media to your slider (no need to refresh)

### Adding images to a slider 
1. Go to the edit screen of any image
2. Find the Slider options box
3. Check "Add to a slider"
4. Set the optional call to action fields : title, description, text of the button and link to page/post
5. Select a slider in the list

### Reordering the slides
The slides can be manually reorder with a drag and drop feature.

### Adding a slider to a post/page 
1. Go to the edit screen of any page/post
2. Find the slider options box
3. Check "Add a slider"
4. Select a slider
5. Change the delay and layout field if needed
6. Update the page

### Deleting a slider 
In the Slider options box, at the top of the slides table, click on "Delete this slider".
This action will delete the slider but not the images.

### Post Formats
You can choose up to 10 post formats for your posts.  
Posts with the aside, status, quote and link post formats are displayed with no title.  
Posts with the link post format will link out to the first a tag in the post.


# Notes for developers
## Code logic
The theme is built on a classes framework. The classes are identified by their group and name like this : class-[group]-[name].php.

The function tc__( $group, $classname):
1) scans the theme folder to find the appropriate group / class 
2) and then instanciates the class(es) only once through a singleton factory.

A class typically includes a constructor which is mainly used to add the methods to WP actions and filters. 
Actions are used to render HTML or execute some code in predefined WP action, while filters are used to get values.

For simplification purposes, the theme uses few WP templates : index.php, header.php, footer.php, comments.php. 
Those templates only includes some structural HTML markup, the rest is rendered with the actions defined in the classes of the parts/ folder.

Customizr uses one single loop for all kind of content. It is located in index.php.


## Translation
The themes is ready for translation and already translated in french. Translation files are in /lang.



# License
Unless otherwise specified, all the theme files, scripts and images
are licensed under GNU General Public License version 2, see file license.txt.
The exceptions to this license are as follows:
* Bootstrap by Twitter and the Glyphicon set are licensed under the GPL-compatible [http://www.apache.org/licenses/LICENSE-2.0 Apache License v2.0]
* The script bootstrap-carousel.js v2.3.0 is licensed under the Apache License
* The script holder.js v1.9 is licensed under the Apache License
* The script modernizr.js is dual licensed under the BSD and MIT licenses
* The script jquery.iphonecheck.js is copyrighted by Thomas Reynolds, licensed GPL & MIT
* The script jquery.fancybox-1.3.4.js is dual licensed under the MIT and GPL licenses
* Icon Set:	Entypo is licensed under SIL Open-Font License
* The image phare.jpg is a free public picture from Wikimedia, copyright 2013 Alf van Beem (http://commons.wikimedia.org/wiki/File:Ca_1941_DAF_%27Rijdende_regenjas%27_pic7.JPG) , and distributed under the terms of the Creative Commons CC0 1.0 Universal Public Domain Dedication (http://creativecommons.org/publicdomain/zero/1.0/deed.en)
* The image chevrolet.jpg is a free public picture from Wikimedia, copyright 2013 Alf van Beem (http://commons.wikimedia.org/wiki/File:%2755_Chevrolet_ornament.JPG) , and distributed under the terms of the Creative Commons CC0 1.0 Universal Public Domain Dedication (http://creativecommons.org/publicdomain/zero/1.0/deed.en)
* The image ampoules.jpg is a free public picture from Wikimedia, copyright 2010 Medvedev (http://commons.wikimedia.org/wiki/File:E24_E14_E10.jpg) , and distributed under the terms of the Creative Commons CC0 1.0 Universal Public Domain Dedication (http://creativecommons.org/publicdomain/zero/1.0/deed.en)

