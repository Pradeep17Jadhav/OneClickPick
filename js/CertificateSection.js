class CertificateSection extends Component
{
    constructor()
    {
        super();

        this.listCertificateBox = [];
        for(let i = 0; i < 9; i++)
        {
            let certificateBox = new CertificateBox();
            this.AddChild(certificateBox);
            this.listCertificateBox.push(certificateBox);
        }
    }

    Resize(width, height)
    {
        super.Resize(width, height);
        let y = 0;
        for(let i = 0; i < this.listCertificateBox.length; i++)
        {
            if(width < 720)
            {
                this.listCertificateBox[i].Resize(width, 240);
                this.listCertificateBox[i].Place((width - this.listCertificateBox[i].GetWidth()) / 2, y);
                y += this.listCertificateBox[i].GetHeight() + 10;
            }
            else if(width < 1080)
            {
                this.listCertificateBox[i].Resize(width / 2, 240);
                if(i % 2 == 0)
                    this.listCertificateBox[i].Place(0, y);
                else
                {
                    this.listCertificateBox[i].Place(width / 2, y);
                    y += this.listCertificateBox[i].GetHeight() + 10;
                }
            }
            else
            {
                this.listCertificateBox[i].Resize(width / 3, 240);
                if(i % 3 == 0)
                    this.listCertificateBox[i].Place(0, y);
                else if(i % 3 == 1)
                {
                    this.listCertificateBox[i].Place(width / 3, y);
                }
                else
                {
                    this.listCertificateBox[i].Place((width / 3) * 2, y);
                    y += this.listCertificateBox[i].GetHeight() + 10;
                }
            }
        }
        super.Resize(width, y);
    }
}

class CertificateBox extends Component
{
    constructor()
    {
        super();
        this.AddClass("certificateBox");

        this.certificate = new Certificate();
        this.certificate.SetCourseName("Introduction to TensorFlow");
        this.certificate.SetPlatform("Coursera");
        this.certificate.SetBackgroundImage("resources//certificates//cert7.jpg");
        this.AddChild(this.certificate);
    }

    Resize(width, height)
    {
        super.Resize(width, height);
        this.certificate.Resize(width, height);
    }
}