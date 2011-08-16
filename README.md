## Disbarred

Disbarred is a Safari extension to remove the annoying frames that some websites
(such as StumbleUpon, Summify, and Visibli) add to links.

### Download

You can download the extension here: <insert a link>

### Why?

Disbarred is meant to work around a few problems that exist when sites frame other sites:

1. Sometimes, the outer frames don't load. If these sites go down or have capacity issues,
then suddenly the links you've shared don't work.
2. Some browsers (especially mobile browsers or older non-WebKit browsers) have problems
loading frames; this can prevent people from seeing (or at least, easily seeing) the content
you're trying to re-share with them.
3. Some frames are used to track traffic; if you're sharing someone else's link, they may be
getting analytics data about the links that you send around, including via IM, via secured sites,
or via e-mail.
4. It's hard to determine at a glance whether a 'hidden' link is something you want to look at
right now or not. For example, you may not want to watch a YouTube link on your phone, or
Sports Illustrated at work. If you're sharing someone else's framed links, then people who see
it have to take a gamble on whether it's something they want to click on or not.

### How does it work?

When a page with one of these bars is loaded, the extension injects Javascript into the page. This
Javascript waits until the page has finished loading, and then redirects you to the page the site is
framing.

#### Benefits

The main benefit to this approach is that you relatively quickly are redirected, meaning that you
don't have to see the frame for very long, if at all; usually the framed page has barely started
loading by the time the redirect happens, and you're instantly taken to the real page.

Some of these bars are also used for analytics; they can tell who shared a link, through which medium,
and how many people clicked on it. These bars will still be able to get their analytics data, so
content providers can continue to understand their audience and how the links they share are viewed,
but they won't get data about the links *you* share, especially over other mediums like IM, Facebook,
and e-mail.

#### Drawbacks

Unfortunately, there's no easy way to bypass links entirely; the first time you load a page, it will
always attempt to load the frame. This means that if the sharing site is down completely, you won't
be able to load the page (but you wouldn't be able to load it anyway, so no loss).

Also, if a particular element in a frame is incredibly slow to load (for example, analytics Javascript),
then the redirect won't occur until it has, which may mean you've started to read the page by the time
the redirect happens. The design should prevent this from being an issue though.

### Aren't these bars useful? Don't they provide analytics data?

Sure they do, and that's fine. This is why the extension is designed to run AFTER the page
is loaded. This should give these bars enough time to collect whatever analytics they want,
so that the people sharing these links know who's clicking them and why.

Most of the bars I see are meant to draw you back to the site or get you to use their sharing features;
for example, they encourage you to re-share the link to Twitter or Facebook, which often requires
creating an account on their site and associating it with your social media site of choice. These days,
a lot of people just copy the link from their browser and paste it into a client such as TweetDeck or
Hootsuite.

### I've installed your extension and Site X still has an ugly frame around it!

Great! Send me the link and I'll add some code to take care of it. I'm glad to add any other
sites that anyone else can come up with, but finding working links for all of them is tricky
and time-consuming.

You can suggest a new site to disbar by creating a [new GitHub issue](http://github.com/danudey/Disbarred/issues/new) for it.