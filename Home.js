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
            //currPathItem.innerText = pathArr[i];
            currPathItemLink = document.createElement('a');
            uplevelPath = pathArr.slice(0, i+1).join('/') + "/index.html";
            let newUrl = new URL(window.location);
            newUrl.pathname = uplevelPath;
            currPathItemLink.href = newUrl;
            currPathItemLink.innerText = pathArr[i];
            currPathItem.appendChild(currPathItemLink);
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