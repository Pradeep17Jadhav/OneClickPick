class AboutMeSection extends Component
{
    constructor()
    {
        super(null, false);

        this.AddClass("section");
        this.AddClass("aboutMeSection");
        
        this.title = new Component();
        this.title.AddClass(CssClassConstants.SECTION_TITLE);
        this.title.SetFontSize(FontSizeConstants.SECTION_TITLE);
        this.title.GetElement().innerHTML = "ABOUT ME!";
        this.AddChild(this.title);

        this.description = new Component();
        this.description.AddClass(CssClassConstants.SECTION_DESCRIPTION);
        this.description.GetElement().innerHTML = `Software Engineer with hands-on experience in design, development and maintenance. 
            A result-oriented professional with the ability to work effectively & efficiently a fast-paced company. 
            Eager to learn new technologies and methodologies. Adept at motivating self and others.`;
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
        this.title.SetWidth(600);
        this.title.Place((width - this.title.GetElement().clientWidth) / 2, y);        
        y += this.title.GetElement().clientHeight + CssConstants.PADDING3X;
        
        this.description.SetWidth(600);
        this.description.Place((width - this.description.GetElement().clientWidth) / 2, y);
        y += this.description.GetElement().clientHeight + CssConstants.PADDING5X;

        this.btn.Resize(150, 60);
        this.btn.Place((this.GetWidth() - this.btn.GetWidth()) / 2, y);
    }
}