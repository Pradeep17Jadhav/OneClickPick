class Main extends Component
{
    constructor(parent)
    {
        super();
        this.parent = parent; 
        this.parent.appendChild(this.element);
    }
}