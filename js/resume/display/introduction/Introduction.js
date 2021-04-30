class Introduction extends Component
{
    constructor()
    {
        super();
        this.AddClass("section");
        this.BackgroundImage("resources/images/section1.jpg");
        this.BackgroundAttachment("fixed");

        this.name = new Component("span", true);
        this.name.AddClass("introductionName");
        this.name.GetElement().innerHTML = "Pradeep Jadhav";
        this.AddChild(this.name);

        this.role = new Component("span", true);
        this.role.AddClass("introductionRole");
        this.role.GetElement().innerHTML = "Software Engineer";
        this.AddChild(this.role);
    }

    Resize(width, height)
    {
        super.Resize(width, height);

        this.name.SetWidth(width);
        this.name.Place(0, (height - this.name.GetElement().clientHeight) * 0.4);

        this.role.SetWidth(width);
        this.role.Place(0, (this.name.GetTop() + this.name.GetElement().clientHeight + CssConstants.PADDING6X));
    }
}