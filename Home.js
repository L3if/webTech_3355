document.getElementById("nav_container").appendChild(createBreadcrumb());

function createBreadcrumb()
{
    let breadcrumb = document.createElement('nav');
    breadcrumb.setAttribute('aria-label', 'breadcrumb');
    let breadcrumbOl = document.createElement('ol');
    breadcrumbOl.classList.add('breadcrumb');
    pathArr = window.location.pathname.split("/");
    for (let i = 1; i<pathArr.length; i++)
    {
        if (i<pathArr.length-1)
        {
            let currPathItem = document.createElement('li');
            currPathItem.classList.add('breadcrumb-item');
            currPathItem.innerText = pathArr[i];
            breadcrumbOl.appendChild(currPathItem);
        } else
        {
            let currPathItem = document.createElement('li');
            currPathItem.classList.add('breadcrumb-item');
            currPathItem.classList.add('active');
            currPathItem.innerText = pathArr[i];
            breadcrumbOl.appendChild(currPathItem);
        }
    }
    breadcrumb.appendChild(breadcrumbOl);
    return breadcrumb
}