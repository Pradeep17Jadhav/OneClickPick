class SkillsSection extends Component
{
    constructor()
    {
        super();
        this.AddClass("section");
        this.AddClass("skills");
        this.BackgroundImage("resources/images/desk.jpg");
        this.BackgroundAttachment("fixed");
        
        this.title = new Component("span");
        this.title.AddClass(CssClassConstants.ABOUT_ME_TITLE);
        this.title.SetFontSize(FontSizeConstants.ABOUT_ME_TITLE);
        this.title.GetElement().innerHTML = "Skills";
        this.AddChild(this.title);

        this.description = new Component("span");
        this.description.AddClass(CssClassConstants.ABOUT_ME_DESCRIPTION);
        this.description.GetElement().innerHTML = `Skills to be added soon.`;
        this.AddChild(this.description);

        this.btn = new Component("button");
        this.btn.GetElement().innerHTML = "See Resume";
        this.btn.GetElement().onpointerup = (e) => {
            window.open(URLConstants.RESUME);
        }
        this.AddChild(this.btn);
    }

    Resize(width, height)
    {
        super.Resize(width, height);

        let y = 50;
        this.title.Resize(600, 50);
        this.title.Place((this.GetWidth() - this.title.GetWidth()) / 2, y);
        y += this.title.GetHeight() + CssConstants.PADDING3X;
        
        this.description.Resize(600, 180);
        this.description.Place((this.GetWidth() - this.description.GetWidth()) / 2, y);
        y += this.description.GetHeight() + CssConstants.PADDING5X;

        this.btn.Resize(150, 60);
        this.btn.Place((this.GetWidth() - this.btn.GetWidth()) / 2, y);
    }
}