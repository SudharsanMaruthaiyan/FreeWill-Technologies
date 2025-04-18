const ContactSection = () => {
    return (
      <div className="w-[95%] lg:w-[90%] mx-auto py-16 font-nunito">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl lg:text-3xl font-bold text-primary mb-6">Get in Touch</h2>
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
              <button
                type="submit"
                className="bg-secondary hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
  
          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              title="FreeWill Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.720158684828!2d78.68702687481633!3d10.815936158750836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b006fba9c50cb01%3A0x2e0be57ce4fefed6!2sSt.%20Joseph&#39;s%20College%2C%20Tiruchirappalli!5e0!3m2!1sen!2sin!4v1713444320844!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactSection;
  