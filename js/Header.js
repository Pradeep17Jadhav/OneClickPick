class Header extends Component
{
    constructor()
    {
        super();
        this.AddClass("header");

        this.title = new Component();
        this.AddChild(this.title);
    }
}