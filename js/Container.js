class Container extends Component
{
    constructor()
    {
        super();
        this.item = new Component();
        this.AddChild(this.item);
    }
}