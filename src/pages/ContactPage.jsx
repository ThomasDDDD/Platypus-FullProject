import "./ContactPage.css";

export const ContactPage = () => {
  return (
    <>
      <header className="contact-header">
        <div className="line"></div>
        <div className="circle"></div>
        <div className="line"></div>
      </header>
      <h1 className="sagthallo">SAGT HALLO</h1>
      <form action="" className="contact-form">
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Message</label>
        <textarea name="" id=""></textarea>
        <button className="contact-button">SEND</button>
      </form>
    </>
  )
}