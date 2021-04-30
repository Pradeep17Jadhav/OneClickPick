class CertificateSection extends Component
{
    constructor()
    {
        super();

        this.listCertificateBox = [];
        for(let i = 0; i < 9; i++)
        {
            let certificateBox = new CertificateBox(i);
            this.AddChild(certificateBox);
            this.listCertificateBox.push(certificateBox);
        }
    }

    Resize(width, height)
    {
        super.Resize(width, height);
        let y = 20;
        let thumbnailWidth, thumbnailHeight;
        for(let i = 0; i < this.listCertificateBox.length; i++)
        {
            if(width < 720)
            {
                thumbnailWidth = width / 2;
                thumbnailHeight = thumbnailWidth / 1.4243;
                this.listCertificateBox[i].Resize(thumbnailWidth, thumbnailHeight);

                if(i % 2 == 0)
                    this.listCertificateBox[i].Place(0, y);
                else
                {
                    this.listCertificateBox[i].Place(width / 2, y);
                    y += this.listCertificateBox[i].GetHeight() + 10;
                }
            }
            else if(width < 1080)
            {
                thumbnailWidth = width / 4;
                thumbnailHeight = thumbnailWidth / 1.4243;

                this.listCertificateBox[i].Resize(thumbnailWidth, thumbnailHeight);
                if(i % 4 == 0)
                    this.listCertificateBox[i].Place(0, y);
                else if(i % 4 == 3)
                {
                    this.listCertificateBox[i].Place((width / 4) * (i % 4), y);
                    y += this.listCertificateBox[i].GetHeight() + 10;
                }
                else
                {
                    this.listCertificateBox[i].Place((width / 4) * (i % 4), y);
                }
            }
            else
            {
                thumbnailWidth = width / 6;
                thumbnailHeight = thumbnailWidth / 1.4243;

                this.listCertificateBox[i].Resize(thumbnailWidth, thumbnailHeight);
                if(i % 6 == 0)
                    this.listCertificateBox[i].Place(0, y);
                else if(i % 6 == 5)
                {
                    this.listCertificateBox[i].Place((width / 6) * (i % 6), y);
                    y += this.listCertificateBox[i].GetHeight() + 10;
                }
                else 
                {
                    this.listCertificateBox[i].Place((width / 6) * (i % 6), y);
                }
            }
            if(i == this.listCertificateBox.length - 1)
                y += this.listCertificateBox[this.listCertificateBox.length - 1].GetHeight() + 20;
        }
        super.Resize(width, y);
    }
}

class CertificateBox extends Component
{
    constructor(certIndex)
    {
        super();
        this.AddClass("certificateBox");

        this.certificate = new Certificate();
        this.certificate.SetCourseName("Introduction to TensorFlow");
        this.certificate.SetPlatform("Coursera");
        this.certificate.SetBackgroundImage("resources/certificates/thumbnail_" + (certIndex + 1) + ".jpg");
        this.AddChild(this.certificate);
    }

    Resize(width, height)
    {
        super.Resize(width, height);
        this.certificate.Resize(width, height);
    }
}