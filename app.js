/* WHEWWWWWWWWW WE MADE IT THROUGH A DIFFICULT SECTION. PAT YOURSELF ON THE BACK
YOU HAVE BEEN DOING AN EXCELLENT JOB. */

/*Now this is where things get a little trickier(probably didnt spell that right)
today, we will be learning all about DOM manipulation, what is it, and how we use it
in web development. But first, lets get a defintion for what dom manipulation is */

/* DOM stands for Document Object Model, when a webpage is loaded, the browser 
creates a document object model of the page. With this object model, JavaScript
gets all the power to do the following things
1: JavaScript can change all the HTML elements in the page
2: JavaScript can change all the HTML attributes in the page
3: JavaScript can change all the CSS styles in the page
4: JavaScript can remove existing HTML elements and attributes
5: JavaScript can add new HTML elements and attributes
6: JavaScript can react to all existing HTML events
7: JavaScript can create new HTML events in the page

When we were going through the JavaScript portion of this course, did you ever
just think why? Why are we doing this? Well, the main reason why we do most
of these things is to make the page interactable. And the Document Object Modal
is a major way of doing this

*/

/* Did you ever think about why we use the script src tag in our index.html
file? Well, if you did, then heres the time to learn.

the script tag in HTML serves for embedding service side scripts, whether
containing scripting or linking to an external JavaScript file. Basically,
the script tag in HTML is used to embed executable code.

/*
Now we will start really diving deep into JavaScript. As you know, every HTML
element can be selected. But the real question is, how do we even select HTML
elements in JavaScript

Well, there are many ways to do this. But we will start with the first one.


GETELEMENTBYID
getElementById is one of the ways we can select HTML elements. The getElementById 
selector is one way to select ID classes in JavaScript. The syntax for this is 
as follows
in the index.html file, you will notice that we have a h1 with an id of hello,
lets select this real quick by going
let h1 = document.getElementById("hello");
And thats it! Its that simple.
One thing that distinguishes(spelt wrong lol) getElementById by the rest we will
be talking about is that getElementById is faster then querySelector.
the reason why its faster is because querySelector looks through multiple elements
which will take a little longer to get the ID. but since this is an introductory
course, i will give you the option to choose whatever you feel comfortable with

*/

/*PRACTICE
to practice using getElementById, i want you to create a new h3 tag with the
id of dog in your index.html. Create it right under the h2 tag.

After you do this, i want you to select it using getElementById. If you need
help, or have any questions, please ask me.

Please write this under this paragraph

*/
//Code under here
let h3 = document.getElementById("Doggy");
/*
NEXT, WE HAVE querySelector and querySelectorAll
querySelector is a method that can be used when trying to select from a CSS
selector. You can choose any type of tag, including id, class, and the tag name
An important note to this is that if you are trying to select a id using query
Selector, you have to use a hashtag before the id name. This is because query
Selector does not know what element it is looking for. So you have to specify
it

When selecting an id using querySelector, it typically looks like this
lets use our h1 id as an example
let h1 = document.querySelector("#hello");

When you are selecting a class, it typically looks like this
you will notice that under the p tag, there is a class tagged to it.
we will be selecting that tag.
to select it we would go
let p = document.querySelector(".cool")

it is that easy
*/


/*
querySelector vs querySelectorAll

I remember you asking me the difference between the two, so i wanted to talk
about what the difference was.
Basically, querySelector is used to select one HTML element, while
querySelectorAll is used to select multiple HTML elements. But remember, in order
for querySelectorAll to work, all the elements must have the same class or ID

*/

// PRACTICE //
/*
 to practice using querySelector and querySelectorAll, i want you to create
 two new HTML elements. The first HTML element will be an h4, set it as an
 ID with the ID name of cat. Next, i want you to create another paragraph tag.
 I want you to create a class for the paragraph tag named donkey. Both of these
 will be created in the index.html file. After you do, i want you to select 
 the newly created h4 tag ID and paragraph tag class using querySelector.
 Please write the code in the comments below
 Also note that since its an ID, you will have to select it in a different way.
*/
let h4 = document.querySelector("#cat");
let p = document.querySelector(".Wow");
/* Next, i want you to go to the index.html file. Once you open it i want you
to look for the 3 buttons inside the HTML file. The 3 buttons should be under
the p class wow.

Once you have done that, i want you to select the 3 buttons using one 
querySelectorAll. Please write the code under this paragraph.
*/

let button = document.querySelectorAll(".Button");

/*Whewwww, now that we have learned how to select elements in HTML. It is now
time to learn about different ways to manipulate HTML elements in JavaScript.

The first way we will be looking at is .innerHTML. .innerHTML is a way to 
change text dynamically to whatever text you would like. This can be espically
useful in larger projects, where we want to change text depending on the time.
to do this, lets use the p class cool in order the text inside it 
since we have already selected it, we can just select the variable we used
 so the code would be
 p.innerHTML = "WOWOWOWOWOWOWOWOWO";
 this will change the text to the above.
 .innerHTML is considered risky in the web development world. The main reason for
 this is because when using .innerHTML, you can add content that includes actual
 bits of HTML code rather than simple strings, which can pose a security threat.

 Another thing to note about .innerHTML is that .innerHTML is considered slow
 when loading data. Espically when you are loading data via an API. I know that
 right now, this seems a bit dumb. But remember that speed is incredibly
 important when thinking about websites.

 I have not talked about this before. But website speed is incredibly important.
 And these small changes could potentially mean that your website has less traffic
 and retention. Interestingly enough, digital.com did a survey on this.
 According to them, 53% of online shoppers will abandon a website if it takes
 more than 2 seconds to load.

 this is also why Youtube shorts need videos when you watch them, cause
 people have attention spans of rodents.

 Since this is a introduction class, this is something that i want you to be
 aware of.

 Also note, that there is an alterative that does the exact same thing. Which is
 called .textContent. You can use whichever one you feel comfortable using.


 /* PRACTICE

 to practice .innerHTML, first i want you to first select the p class wow using query
 selector. Type the code below this paragraph
 

*/
let p1 = document.querySelector(".wow");
/*
after you do this, i want you to change the text using innerHTML. You can change
the text to whatever you want. Please do this below this paragraph.
*/
p1.innerHTML = "Yay";

/*
 getElementByClassName
 Theres another way to select HTML elements using JavaScript. This is by
 using getElementByClassName. Essentially, this is the same as querySelector,
 you essentially just select a div class. But it differs from querySelector in 
 that you do not need to use a dot before it. I cannot answer the why for you,
 as tbh it doesn't really explain why. 

 As an example, lets select the p class wow in the index.html file.

 to select this we would go.

 let paragraph = document.getElementByClassName("wow");

 and thats it!
*/

/*
PRACTICE

to practice this, i want you to create a h5 with the class called yo.
Then i want you to select it using getElementByClassName
do this in the paragraph below.

*/
let h5 = document.getElementsByClassName("yo");

/* 
There are two other essential thing that i want you to learn. In this section,
i will be introducing while loops to you.

while loops are essential in programming and another type of loop in JavaScript.

The definition of a while loop is that its a loop that executes a block of code
as long as the specified condition is true. The syntax for this is as follows

while(condition){
 do somethning awesome here
}

lets take a look at an example real quick and break it down. What if we had
this code.

let i = 0;

while(i < 5){
 i++
 console.log("goodbye");
}

what do you think will happen here? 

Well, basically the condition will run until i is lessthan 5. If it is not
less than 5, the while loop will stop all together.

*/

/*PRACTICE 
to practice this, i want you to create a variable l and set it equal to 10.
then, i want you to create a while loop that checks to see if i is less then 5
i want you to console.log("wo"), then i want you to decrement it
remember that you can decrement something or decrease it using --
Please type it under this paragraph.
*/
let one = 10;
while(i < 5){
    one--
    console.log("wo");
}
/*
Arrays

The last thing we will be talking about is arrays.

Arrays are a special variable that allows you to hold more than one value.

to create an array, you can use the following syntax

const array = ["1", "2", "3"];

notice that we use constant instead of let? well, for arrays, it is common
practice to use constant for arrays. So that is what i want you to do.

There is one thing i want you to know. Arrays are weird and computers are weird.
I am saying this because what i am about to say to you is probably gonna sound weird
to you(it is).

Array indexes start at 0, meaning that in our array, the value 1 is index 0, the
value 2 is index 1, and value 3 is index 2.
*/

/*
Practice:
to practice this, i want you to create an array named array2 with whatever
content you want
*/
const array2 = ["red", "orange", "yellow"];