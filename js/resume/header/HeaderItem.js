class HeaderItem extends Component
{
    constructor(value)
    {
        super();
        this.AddClass("headerItem");
        this.GetElement().innerHTML = value;
        this.GetElement().onpointerup = () => {
            this.parent.parent.MoveTo(value);
        }
    }
}