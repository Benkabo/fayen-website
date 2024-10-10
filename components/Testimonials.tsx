import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Fayen Travel Agency made booking my flights so easy! I was struggling to find the right connection for my business trip, but their team found the perfect option, saving me both time and money. The whole process was smooth, and I received all my confirmations right away. I’ll definitely use their service again for future travels!",
      author: "Benedict",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      text: "I rented a car through Fayen Travel Agency for a family road trip, and I couldn’t be happier with the service. The car was in great condition, and they provided plenty of options to suit our needs. The booking process was simple, and their customer support was top-notch. We had a hassle-free experience from start to finish!",
      author: "Khalid Aucho",
      photo:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      text: "I was nervous about the visa process for my upcoming trip, but Fayen Travel Agency took care of everything. They guided me through each step, ensuring all my paperwork was in order. Thanks to their expertise, I received my visa on time without any issues. I highly recommend their visa registration service!",
      author: "Declan Rice",
      photo:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];
  return (
    <div id="testimonial" className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#01306A] mb-12">
          What Our Clients Say
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {testimonial.author}
                  </h3>
                </div>
                <p className="text-gray-600 italic">
                  <FaQuoteLeft className="inline-block mr-2 text-[#01306A]" />
                  {testimonial.text}
                  <FaQuoteRight className="inline-block ml-2 text-[#01306A]" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
