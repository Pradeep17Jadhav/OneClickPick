class Resume extends Main
{
    constructor(parent, docElement)
    {
        super(parent);
        this.parentEl = parent; 
        this.docElement = docElement;
        this.RemoveClass("box");
        this.header = new Header();
        this.AddChild(this.header);

        this.display = new Display();
        this.AddChild(this.display);

        this.footer = new Footer();
        this.AddChild(this.footer);

        this.Resize(parent.clientWidth, parent.clientHeight);
    }

    Resize(width, height)
    {
        super.Resize(width, height)
        this.header.Resize(width, 70);

        let y = 70;
        this.display.Resize(width, height)
        this.display.Place(0, y);
        y += this.display.GetHeight();

        this.footer.Resize(width, 70);
        this.footer.Place(0, y);
    }

    MoveTo(target)
    {
        let top = 0;
        switch(target)
        {
            case "About Me":
                top = this.display.aboutMeSection.GetTop();
                break;
            case "Career":
                top = this.display.aboutMeSection.GetTop();
                break;
            case "Skills":
                top = this.display.skillsSection.GetTop();
                break;
            case "Projects":
                top = this.display.projectsSection.GetTop();
                break;
            case "Contact":
                top = this.display.contactSection.GetTop();
                break;
            default:
                top = 0;
                
        }

        this.docElement.scrollTo({
            top: top,
            behavior: "smooth"
        });
    }
}