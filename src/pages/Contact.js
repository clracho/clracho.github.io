
import { useState} from 'react';

function ContactPage () {
    const [typedemail, setEmail] = useState('');
    const [typedmessage, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const sendEmail = (event) => {
        event.preventDefault();
        // create a new FormData object to send to the PHP file
        const formData = new FormData();
        formData.append('typedemail', typedemail);
        formData.append('typedmessage', typedmessage);
    
        // send the form data to the PHP file using fetch
        fetch('/processmessage.php', {
          method: 'POST',
          body: formData
        })
          .then(response => response.text())
          .then(result => {
            setStatus(result);
            if (result === 'Message sent successfully') {
                setEmail('');
                setMessage('');
            }
          })
          .catch(error => {
            setStatus('Error sending message');
          });
      };

    return (
    <body className="d-flex flex-column">
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-6 mt-5">
                    <div className="h1 display-5">[ email me ]</div>
                    <div className="h2 mt-4 text-center">cfeh25@gmail.com</div>
                    <div className="h3 mt-4 text-center">-or-</div>
                    <div className="h2 mt-4 text-center">cfehrer1@binghamton.edu</div>
                </div>
                <div className="col-lg-6 mt-5 border-start border-dark">
                    <form name="sendmessage">
                        <div className="h1 display-5">[ send message ]</div>
                        <div className="mb-3 mt-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address:</label>
                            <input type="email" className="form-control" value = {typedemail} name="typedemail" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Leave a message:</label>
                            <textarea className="form-control" value = {typedmessage}  name="typedmessage" rows="3" placeholder="write your message here" onChange={e =>setMessage(e.target.value)}></textarea>
                        </div>
                        <button type="submit" name="submit" className="btn btn-primary" onClick={sendEmail}>Send</button>
                        <h3>{status}</h3>
                    </form>
                </div>
            </div>
        </div>
  </body>
    );
}

export default ContactPage;