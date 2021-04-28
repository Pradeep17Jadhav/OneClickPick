class Footer extends Component
{
    constructor()
    {
        super();
        this.links = new Component(null, false);
        this.AddChild(this.links);
    }
}