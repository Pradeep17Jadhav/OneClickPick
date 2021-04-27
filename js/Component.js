class Component
{
    constructor(element)
    {
        if(element == null)
            element = "div";
        
        this.element = document.createElement(element);
        this.visible = true;
        this.childs = [];
        this.left = 0;
        this.top = 0;
        this.width = 0;
        this.height = 0;
        this.parent = null;
    }

    AddChild(child)
    {
        this.element.appendChild(child.element);
        this.childs.push(child);
        child.parent = this;
    }

    AddClass(cls)
    {
        this.element.classList.add(cls);
    }

    Resize(width, height)
    {
        this.SetWidth(width);
        this.SetHeight(height);
    }

    SetWidth(width)
    {
        this.width = width;
        this.element.style.width = width + "px";
    }

    SetHeight(height)
    {
        this.height = height;
        this.element.style.height = height + "px";
    }

    BackgroundImage(path)
    {
        this.element.style.backgroundImage = "url(" + path + ")";    
    }

    BackgroundAttachment(value)
    {
        this.element.style.backgroundAttachment = value;    
    }
}