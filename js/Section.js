class Section extends Component
{
    constructor()
    {
        super();
        this.section1 = new Component();
        this.section1.AddClass("section");
        this.section1.BackgroundImage("images/section1.jpg");
        this.section1.BackgroundAttachment("fixed");
        this.section1.element.innerHTML = "Pradeep Jadhav";
        this.AddChild(this.section1);

        this.section2 = new Component();
        this.section2.AddClass("section");
        this.section2.BackgroundImage("images/section2.jpg");
        this.AddChild(this.section2);
    }
}