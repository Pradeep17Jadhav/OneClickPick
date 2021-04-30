class Footer extends Component
{
    constructor()
    {
        super();
        this.AddClass("footer");
        this.RemoveClass("box");

        this.madeby = new Component();
        this.madeby.AddClass("footerMadeBy");
        this.madeby.GetElement().innerHTML = `Made With <i class="fas fa-heart"></i> by Pradeep Jadhav`;
        this.AddChild(this.madeby);
    }

    Resize(width, height)
    {
        super.Resize(width, 80);

        this.madeby.Resize(width, 20);
        this.madeby.Place((width - this.madeby.GetWidth()) / 2, (80 - this.madeby.GetHeight()) / 2);
    }
}