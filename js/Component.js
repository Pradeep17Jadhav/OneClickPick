class Component
{
    constructor(element, isAbsolute)
    {
        if(element == null)
            element = "div";
        
        this.element = document.createElement(element);

        this.AddClass("box");
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

    RemoveClass(cls)
    {
        this.element.classList.remove(cls);
    }

    Resize(width, height)
    {
        this.SetWidth(width);
        this.SetHeight(height);
    }

    Place(left, top)
    {
        this.SetLeft(left);
        this.SetTop(top);
    }

    SetScroll(value)
    {
        this.element.scrollTop = value;
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

    SetLeft(value)
    {
        this.left = value;
        this.element.style.left = value + "px";
    }

    SetTop(value)
    {
        this.top = value;
        this.element.style.top = value + "px";
    }

    SetFontSize(value)
    {
        this.element.style.fontSize = value;
    }

    BackgroundImage(path)
    {
        this.element.style.backgroundImage = "url(" + path + ")";    
    }
    
    BackgroundColor(color)
    {
        this.element.style.backgroundColor = color;    
    }

    BackgroundAttachment(value)
    {
        this.element.style.backgroundAttachment = value;    
    }
     
    GetElement()
    {
        return this.element;
    }

    GetWidth()
    {
        return this.width;
    }

    GetHeight()
    {
        return this.height;
    }

    GetTop()
    {
        return this.top;
    }
}