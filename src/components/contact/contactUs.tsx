interface Props {
}

export default function ContactUsForm({
}: Props) {

  return (
    <>
      <section className="bg-gray-100 px-2">
        <div className="row">
          <div className="col-12 col-lg-12 p-3 p-md-5">
            <h5 className="mb-4">Contact information</h5>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter your email address" />
            </div>
            <div className="form-group">
              <label>Phone number</label>
              <input type="text" className="form-control" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea className="form-control" placeholder="Enter your message" rows={10} />
            </div>

            <button className="btn btn-dark w-100 mt-4">Submit</button>        
          </div>
        </div>
      </section>
    </>
  );
};

