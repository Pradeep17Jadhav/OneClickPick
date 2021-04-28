class Display extends Component
{
    constructor()
    {
        super();
        this.section1 = new Component(null, false);
        this.section1.AddClass("section");
        this.section1.BackgroundImage("images/section1.jpg");
        this.section1.BackgroundAttachment("fixed");

        this.name = new Component(null, true);
        this.name.AddClass("sectionName");
        this.name.GetElement().innerHTML = "Pradeep Jadhav";
        this.section1.AddChild(this.name);
        this.AddChild(this.section1);

        this.section2 = new Component(null, false);
        this.section2.AddClass("section");
        this.section2.BackgroundImage("images/section2.jpg");
        this.AddChild(this.section2);
    }

    Resize(width, height)
    {
        let y = 0
        this.section1.Resize(width, SizeConstants.SECTION_HEIGHT);
        y += this.section1.GetWidth();

        this.section2.Resize(width, SizeConstants.SECTION_HEIGHT);
        y += this.section2.GetWidth();
        
        this.name.Resize(360, 200);
        this.name.Place((this.section1.GetElement().clientHeight - 360) /2, (this.section1.GetElement().clientWidth - 200) /2);

        super.Resize(width, y);
    }
}