Now these are the guards related to

coming to a page,

which are called before and navigation action is confirmed.

There also is a useful guard,

which is triggered when the user wants to leave a page.

Of course, when you leave a page and go to a number of page,

all "the before guards" are triggered,

but maybe you also want to run some code on the component

that is being left right before it's being left.

And you possibly want to be able to deny

"the leave this page actioned here."

But what do I mean by that?

Let's say on the user's list component,

we wanna run code whenever this component is left.

We could do this

with the unmounted lifecycle hook vue knows.

If I locked this here,

this will be executed whenever we leave the user's page.

So if I go to users and I leave to teams,

you see unmounted here.

But the problem is that this runs after the hooks,

so after the navigation has been confirmed,

and this gives us no way of canceling the navigation.

Now why might we want to cancel the navigation

from inside the component which we're leaving?

Well, let's say you had a form in there,

and you wanna make sure that until that form has been saved,

you at least wanna warn the user,

that there are unsaved changes,

which would be lost if the page is left.

And we can simulate this with a number button here,

save changes and a new data property,

so for that I'm adding data to this user's list component,

and there I have to change as saved property

which initially is false.

And that's of course, just some dummy code here.

Then we could have a method saved changes,

and then here I set this changes saved to true,

and save changes should be triggered

when this button here is clicked.

So let's bind it to that.

Again, this is all just some dummy code,

just a small example.

Now we wanna make sure that as long as this is false,

we at least get a warning

that we don't accidentally leave the page,

because we all know that you are on that page,

you're entering something in a form

and accidentally we swipe to the right

and all the input is lost,

or we accidentally hit the back button on our mouse.

So accidentally leaving a page

where you entered something in a form

is definitely something we all know.

And that's exactly where another navigation guard

can help us.

Inside of a component in the component convict object,

you can add "the before route leave guard."

You can add this if you're using the vue router,

and then the router will call this first

before calling all "the before each

and before enter guards."

Now here, you also get to, from and next,

just as on the enter guards,

but this will now be called first.

And here we can of course,

console log, users list component before route leave.

And of course, we can also console log to and from

to see what's inside of these route objects.

But most importantly, we can now use next as you learned it,

to confirm the navigation or to only sometimes confirm it.

For example we can check if this changes saved is true.

If that's the case, I wanna call next,

because if the changes are saved,

the user may just leave the page.

But if that's not the case,

I want to ask the user,

wherever he or she really wants to leave.

For that here an else,

we can call the prompt function,

which is built into the browser,

which shows a built in alert,

where the user has to choose yes or no.

Are you sure?

You got unsaved changes?

Is something we could ask here.

The result of that is a bullion,

which we could store in a user wants to leave constant.

And then we call next and pass user wants to leave to that.

And that's either true or false

based on what the user chose

and this alert will present to him or her.

And if we pass true to next,

that's just like calling next like this,

it will confirm the navigation.

If we pass false to next,

this will cancel the navigation

and the user will stay on the page.

So let me show this to you.

If we saved it and I reload users,

by default changes are not saved,

this is false by default.

Hence, if I don't click save changes and I go to teams,

I'm now prompt that wherever I really wanna go,

and prompt was the wrong function here

I want to use,

confirm, sorry.

So let's use the confirm function and repeat this.

I am on users, I reload,

changes are not saved and I wanna go to teams.

And now I get this prompt, if I'm sure,

and if I click cancel, I stay on users.

The same if I accidentally click the back button,

I stay here.

If I of course, click okay,

the navigation is confirmed and I am allowed to leave,

but at least I get those warning,

and if I accidentally clicked the back button

or anything like that,

I don't throw away all my unsaved changes,

and that can dramatically enhance the user experience.

Of course, if I click save changes,

I can go without getting the warning,

because then changes saved is true.

And that is why "the before route leave guard,"

can be very useful for enhancing the user experience

you provide to your users by making sure,

that they don't accidentally lose their input.

Well, and these are the different navigation guards.

They run at different points of time

and in different places of your code,

you can use the place that best fits your requirements,

if you wanna run a guard for every navigation

or just for certain routes for example,

and with those guards,

you can actually provide quite nice user experiences.

Now as I mentioned before,

we'll see those guards in action

soon in the course project we're building,

and then this might make even more sense,

but hopefully by now,

you already understand why we might wanna use them,

and more importantly how they work.