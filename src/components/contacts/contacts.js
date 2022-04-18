import React from 'react';


function Contact() {
    return (
        <div className="media-object footer">
        <div className="media-object-section">
          <h4 id="contact">Contact Me</h4>
          <table>
            <tr>
                <td>Phone Number: (570) 243-9929</td>
                <td>Email: <a className="contact-text" href="mailto: adolfog5545@gmail.com">adolfog5545@gmail.com</a></td>
            </tr>
            <tr>
                <td>LinkedIn: <a className="contact-text" href="https://www.linkedin.com/in/adolfo-gonzalez-566859222/">https://www.linkedin.com/in/adolfo-gonzalez-566859222/</a></td>
                <td>Github: <a className="contact-text" href="https://github.com/Adolfo-G">https://github.com/Adolfo-G</a></td>    
            </tr>
          </table>
        </div>
      </div> 
    );
}

export default Contact;