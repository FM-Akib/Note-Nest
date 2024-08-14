import { useRef, useState } from 'react';
import pattern from '../../assets/pattern.jpg';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const notifySent = () => toast.success('Message Sent!');
const notifyFailed = (error) => toast.error(`Failed to send message: ${error}`);

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_94x30tj', 'template_06b7v0a', form.current, {
        publicKey: 'HAi1u0NDcBzUF2wYy',
      })
      .then(
        () => {
          setLoading(false);
          notifySent();
        },
        (error) => {
          setLoading(false);
          notifyFailed(error.text);
        }
      );
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="relative text-center my-8">
                <h1 className="text-3xl font-extrabold text-gray-700 bg-gray-700/10">
                  Get In Touch
                  <span className="absolute inset-0 flex items-end justify-center">
                    <span className="text-6xl md:text-7xl text-transparent bg-clip-text bg-black opacity-30">
                      Contact Us
                    </span>
                  </span>
                </h1>
              </div>

              <p className="max-w-xl text-lg text-justify">
                We welcome any queries, suggestions, or constructive criticism you may have. If you
                encounter any bugs or issues, please do not hesitate to let us know. Our team is committed
                to addressing your concerns, and we will respond promptly to your email.
              </p>

              <div className="mt-8">
                <a href="tel:01701741656" className="text-2xl font-bold text-pink-600">
                  0170 174 1656
                </a>
                <address className="mt-2 not-italic">IIUC, Kumira, Chittagong, Bangladesh</address>
              </div>
            </div>

            <div
              className="lg:col-span-3 bg-cover shadow-lg bg-center rounded-lg"
              style={{ backgroundImage: `url(${pattern})` }}
            >
              <div className="p-8 lg:p-12 bg-white/55">
                <form className="space-y-4" ref={form} onSubmit={sendEmail}>
                  <div>
                    <label className="sr-only">Name</label>
                    <input
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      name="user_name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only">Email</label>
                      <input
                        className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        name="user_email"
                        required
                      />
                    </div>

                    <div>
                      <label className="sr-only">Phone</label>
                      <input
                        className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        name="user_phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only">Message</label>
                    <textarea
                      className="w-full rounded-lg border-gray-200 border p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      name="message"
                      required
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-[#9A031E] hover:bg-[#9a031fcf] px-5 py-3 font-medium text-white sm:w-auto"
                      disabled={loading}
                    >
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
