class CertificateSection extends Component
{
    constructor()
    {
        super();

        this.certificates = new Component();
        this.listCertificates = [];
        for(let i = 0; i < 9; i++)
        {
            let certificate = new Certificate();
            certificate.SetCourseName("Introduction to TensorFlow");
            certificate.SetPlatform("Coursera");
            certificate.SetBackgroundImage("resources//certificates//cert7.jpg");
            this.listCertificates.push(certificate);
            this.AddChild(certificate);
        }
    }

    Resize(width, height)
    {
        super.Resize(width, height);
        let y = 0;
        for(let i = 0; i < this.listCertificates.length; i++)
        {
            
            if(width < 360)
            {
                this.listCertificates[i].Resize(width, 240);
                this.listCertificates[i].Place((width - this.listCertificates[i].GetWidth()) / 2, y);
                y += this.listCertificates[i].GetHeight() + 10;
            }
            else if(width < 1080)
            {
                this.listCertificates[i].Resize(width / 2, 240);
                if(i % 2 == 0)
                    this.listCertificates[i].Place(0, y);
                else
                {
                    this.listCertificates[i].Place(width / 2, y);
                    y += this.listCertificates[i].GetHeight() + 10;
                }
            }
            else
            {
                this.listCertificates[i].Resize(width / 3, 240);
                if(i % 3 == 0)
                    this.listCertificates[i].Place(0, y);
                else if(i % 3 == 1)
                {
                    this.listCertificates[i].Place(width / 3, y);
                }
                else
                {
                    this.listCertificates[i].Place((width / 3) * 2, y);
                    y += this.listCertificates[i].GetHeight() + 10;
                }
            }
        }
        super.Resize(width, y);
    }
}