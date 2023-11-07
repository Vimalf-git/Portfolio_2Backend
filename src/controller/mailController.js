import mail from 'nodemailer'

const mailSend=async(req,res)=>{
    const {email,subject,content}=req.body;
    try {
        const transporter = mail.createTransport({
            service: 'gmail',
            port: 465,
            auth: {
                user: process.env.email,
                pass: process.env.pass
            }
        });
        const dummy = {
            from:email,
            to: 'lancervimal@gmail.com',
            subject:subject,
            html:content
        }
      await transporter.sendMail(dummy);
        res.status(200).send({message:'mail sent successfully'})    
    } catch (error) {   
        res.status(200).send({message:'fail to sent',error:error.message})    
    }
}

export default mailSend;