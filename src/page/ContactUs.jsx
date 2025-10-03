export default function ContactUs() {
  return (
     <div className="min-h-[100vh] text-black bg-white px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-4 text-gray-700">
        Have a question or need support? Feel free to reach out to us!
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Info */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Our Office</h2>
          <p className="text-gray-700">123 Cyber Street, Tech City</p>
          <p className="text-gray-700">Email: support@cyber.com</p>
          <p className="text-gray-700">Phone: +20 100 123 4567</p>
        </div>

        {/* Contact Form */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border px-4 py-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border px-4 py-2 rounded-md"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border px-4 py-2 rounded-md"
          ></textarea>
          <button className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
