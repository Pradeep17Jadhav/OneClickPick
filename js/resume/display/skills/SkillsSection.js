class SkillsSection extends Component
{
    constructor()
    {
        super();
        this.AddClass("section");
        this.AddClass("skillsSection");
        
        this.title = new Component();
        this.title.AddClass(CssClassConstants.SECTION_TITLE);
        this.title.SetFontSize(FontSizeConstants.SECTION_TITLE);
        this.title.GetElement().innerHTML = "Skills";
        this.AddChild(this.title);

        this.description = new Component();
        this.description.AddClass(CssClassConstants.SECTION_DESCRIPTION);
        this.description.GetElement().innerHTML = `My knowledge in various languages and softwares`;
        this.AddChild(this.description);

        this.skillsChart = new SkillsChart();
        this.AddChild(this.skillsChart);

    }

    Resize(width, height)
    {
        super.Resize(width, height);

        let y = 50;
        this.title.SetWidth(width);
        this.title.Place((width - this.title.GetWidth()) / 2, y);
        y += this.title.GetElement().clientHeight + CssConstants.PADDING3X;
        
        this.description.SetWidth(width);
        this.description.Place((width - this.description.GetWidth()) / 2, y);
        y += this.description.GetElement().clientHeight + CssConstants.PADDING5X;

        this.skillsChart.Resize(width / 2, 300);
        this.skillsChart.Place((width - this.skillsChart.GetWidth()) / 2, y);
    }
}