project-journal.txt

Genevieve LaLonde
Introduction to Web Development
Caterina Paun
site: https://coding-gen.github.io/webdev-portfolio/index.html
repo: https://github.com/coding-gen/webdev-portfolio

Project Journal

This is a journal to describe my progress over time in the final project for Introduction to Web Development.

Week 1:
I have read over the final project assignment, and started in on the videos for the week. Additionally I have started preparing the content for the project. I collected all the most recent versions of the assignments, whose format is expected in the project. For example: 

* navbar => navbar
* hello => about
* cards => previous work
* cards => projects
* form => contact

I'll need to modify the cards for work experience and class projects so the pages are similar in style but unique. I have updated all the links to external css and js files and the links in the navbar as well so everything loads and you can follow the navbar links. At this point my next steps will be to change the navbar so it exists on each page, and update the page content from the class homeworks to the project content. I am also trying to think of some API that I would like to include in my site to get more practice implementing that since I liked it. Additionally I'll modify the card layout with flexbox/grid to get more practice in that area because I feel like I could use more practice. I'm also looking for pictures to include in my site so it looks more lively.

5/27
I've started experimenting with styling the elements differently on my site. While I think the course homework assignments are a great start for structure, I'd like to make sure my site has its own unique feel. Since I've mentioned how I like gardening and spending time with my dogs, I've started going through my favorite 300 pictures of my girls on my camera roll, and capturing shots of the plants around my yard. Hopefully they'll liven up the site. 

I've also started looking into using GitHub pages to serve my content. This is a big relief that it can be served so easily, because I've only set up one simple django web server before and didn't feel up to deploying a whole nother one in time for the project. I was trying to point GH Pages directly to my project directory in my course homework directory, but having a lot of difficulty with this. I tried setting up a subdirectory tree as described in some blog posts online. Eventually though I simply gave in and created a new repository for the site, as shown in the demo. I also could not find the example index.html in the examples mentioned in the video; the directory was missing. I did find something in the sass/examples/01-hello directory though, and copied that over for my initial test case. 

5/29
Over the weekend I fixed all my homeworks HW1-HW4. There is no feedback on HW5 yet and I felt like I'd completed it, so I don't work on that one. I was able to apply the feedback from HW4 even though there wasn't a solutions video yet to compare against. I felt this was an important part of the project, since I'm basing a lot of my pages on the homework content, so I wanted to get it right first. 

After fixing the homeworks, I recopied the most recent versions of those into my project, and readapted them to be served together. I'm really glad I had fixed those issues, because it is making these pages smoother. I'm particularly glad I fixed the performance issues on HW4, I hadn't realized I was calling the DOM so much! Storing it locally as an object after calling it once makes much more sense. 

6/1
I've finished taking pictures around the yard and selecting, categorizing, and editing the ones I'll use in my site. I've started applying them as background images. I noticed Anamika's site really popped with that nice background picture and may try something along those lines. I've had some difficulty setting the picture though. I noticed the pictures were getting tiled in a disconcerting way, even though the resolution is good. I remember Catalina saying working with pictures is tricky and she was avoiding it for that reason and I think I see why now. I ended up setting the pictures in the body, and setting the body width very wide so the picture is displayed very wide and doesn't tile as much. It still scrolls allright, so this seems to work for now. I do notice though it is still tiling vertically, even when the content is not long enough to require it, like on the Contact page. I may try setting the height as well to avoid that, though I'm concerned about distorting the picture or running out of background content if my page content runs long.

I've also started experimenting with style, and a color schema. Since the plain green pattern-like images seem to make good backgrounds, I found a green color scheme online with some good dark greens as well as some bright yellow-green highlights as in my pictures: https://www.schemecolor.com/shades-of-green.php I will likely add bright and dark cyan for accents or for links. 

I noticed the title and icon needed to be updated on each page too, and figured out how to modify those. It took me a while, before I realized I was confusing my header title in the H1, versus the page title in the header.


6/3
I've finished applying different pictures to each of the backgrounds on all the pages. I've started having issues trying to unify the design on my pages. Home and Contact have been proving difficult, I cannot get them to register the Bootstrap changes I'm making. The pages based on the card design look good but it is hard to modify or manually override them because their design is from Bootstrap. I also did some major work on the nav bar, creating it in JS instead of copy pasting it in the HTML on each page. This took some fighting against bootstrap, which uses the same class names as I'm using (eg list-item and nav-link) and so it was overriding my changes. I was leaning on Bootstrap for its default verdant green color, however in the end I decided it doesn't go with my color scheme. 

I also modified the content of the Contact page to make sense for a page like this. At first I just set it as a standard Contact Me type page. However, since this site is actually live on the site, it feels weird to open things up like that, especially with my name and photo on the site. While there is no personally identifying information on the site, I don't want to give the impression that I'm open to anyone contacting me (even though I'm not recording their answers anywyere). In the end I changed it to a form where you can ask me for gardening advice, as I joked about on my main page.

6/4
I have been fighting Bootstrap more as I try and align the content of the pages. I realized why my stylings were not getting applied to Home and Contact, because I had not referenced bootstrap as a style sheet. I ended up prefering my own stylings on Home and Contact anyway, so I am slowly stripping the Bootstrap style out and manually setting the same things. I also got frustrated at having so many css files so I have combined a few of them. I also was not importing AJAX on some of the pages, which is why the javascript was not applying. Glad I figured out those header imports, that's a silly thing to miss.

I've been experimenting with the nav bar more. I want it to float on the right at the same point as the main page content. I was also going to add more style, add an icon, and change to a hamburger menu if the media size is as small as a cell phone. I have a cute perfect picture of a honeybee on a marionberry flower from my berry patch and was going to use that as the icon in the navbar. However I could not for the life of me get it to line up correctly. I was using flex, and set inline elements, and modified the margins and padding. However I just could not get it to be the same vertical position as the rest of the nav. On my Home and Contact pages (no bootstrap at all) it was too high, and the nav was being pushed lower, about 1/3 of height of the picture downwards. On the Bootstrap/Card pages the icon was a little lower. Even when I set it specifically to the same height (67.2px) as the nav, there was still a tiny line at the top where the background could be seen. I also wanted to set the navbar to stay at the top of the screen as you scroll down the page. I used "fixed" as I found online, but this caused weird vertical alignment issues. So I gave up. For now I have removed the picture and centered teh nav bar. 

I have also started adding the actual content on the card pages. I figured out how to properly structure and access my data as an object so I can create the cards programaticaly. I copied the structure of the drinks, though I know any JSON should work. I think this is good practice to use JQuery and objects, instead of setting it manually in the HTML. At the very least it prevents me from making mistakes from copoying things wrong. On that note, I deleted the Education and Experience pages because their content had diverged Projects and I could not figure out why. I recreated them from Projects, and also saved a template page for the future.

6/5
At this point I am wrapping up my project since it is due tomorrow. I have finished adding content, and added in small touches like icons which link to github or linkedin. I modified the card style to use shadow like on my About Me page because I like it better than the borders as from the card homework. I did not get a chance to try implementing a hamburger menu on smaller page sizes. However I did add the TriMet API as another project, just so I could work with an API on the site. This took quite a while, and I had a problem with dynamically creating the containers for each type of transit. I think it was due to asyncronicity when passing the section class name to the addTransitToDOM method. It always appended all arrivals to the last section. In the end I manually created the sections ahead of time, and this allowed me to pass the section names as a parameter effectively.

6/6
I worked on some final touches, and realized that I had hard coded width as pixels in several locations, which did not scale well on smaller page sizes. I changed this to percentages as the page width gets very small. It could still use some work but I'm out of time. 





