class Main extends Component
{
    constructor(parent)
    {
        super();
        this.parent = parent; 
        this.parent.appendChild(this.element);

        this.resizeTimer = setInterval(() => {
            if(this.GetWidth() != this.parent.clientWidth || this.GetHeight() != this.parent.clientHeight)
            {
                this.Resize(this.parent.clientWidth, this.parent.clientHeight)
            }
        }, 100)
    }

}