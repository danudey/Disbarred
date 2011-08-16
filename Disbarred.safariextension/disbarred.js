var stuffs = {
        'visibli.com': de_visibli,
        'stumbleupon.com': de_stumbl,
        'reddit.com': de_reddit,
        'summify.com': de_summify,
};

function de_reddit()
{
    if (document.location.href.indexOf('reddit.com/toolbar/inner') > 0)
    {
        top.location.href = document.getElementsByTagName('frame')[1].src;
    }
}

function de_summify()
{
    if (document.location.href.indexOf('summify.com/story/') > 0)
    {
        document.location.href = document.getElementById('summiFrame').src;
    }
}

function de_visibli()
{
    // Example URL: http://todmaffin.visibli.com/share/nYx865
    document.location.href = document.getElementById('iframe').src;
}

function de_stumbl()
{
    // Example URL: http://su.pr/29zRZe
    document.location.href = document.getElementById('stumbleFrame').src;
}

function disbar()
{
    for (name in stuffs)
    {
        if (document.location.href.indexOf(name) > 0)
        {
            stuffs[name]();
        }
    }
}
disbar();