import React from "react";

export default function StemGuide() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 bg-white shadow">
        <div className="text-2xl font-bold">
          STEM<span className="text-blue-500">Guide</span>
        </div>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#about">About STEM</a></li>
            <li><a href="#majors">Majors</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="#" className="text-gray-600"><i className="fas fa-search"></i></a></li>
          </ul>
        </nav>
      </header>

      <section className="hero text-center py-20 bg-gray-100">
        <h2 className="text-4xl font-semibold mb-4">Discover Your Future in STEM</h2>
        <p className="text-lg mb-6">Explore exciting majors in Science, Technology, Engineering, and Mathematics</p>
        <a href="#majors" className="px-6 py-2 bg-blue-600 text-white rounded-full">Explore Majors</a>
      </section>

      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What Are STEM Majors?</h2>
          <p className="mb-4">STEM stands for Science, Technology, Engineering, and Mathematics. These fields focus on solving problems and innovation.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
            {['Science', 'Technology', 'Engineering', 'Mathematics'].map((field, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold">{field.charAt(0)}</h3>
                <p>{field}</p>
              </div>
            ))}
          </div>

          <p>STEM majors build skills in critical thinking, problem-solving, data analysis, and technology.</p>
        </div>
      </section>

      <section id="majors" className="py-16 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Explore STEM Fields</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Science Majors', img: 'SCIENCE.jpeg', list: ['Biology', 'Chemistry', 'Physics', 'Environmental Science', 'Neuroscience'] },
              { title: 'Technology Majors', img: 'TECHNOLOGY.jpeg', list: ['Computer Science', 'Information Technology', 'Data Science', 'Cybersecurity', 'Artificial Intelligence'] },
              { title: 'Engineering Majors', img: 'ENGINEERING.jpeg', list: ['Mechanical Engineering', 'Electrical Engineering', 'Civil Engineering', 'Biomedical Engineering', 'Aerospace Engineering'] },
              { title: 'Mathematics Majors', img: 'MATH.jpeg', list: ['Applied Mathematics', 'Statistics', 'Actuarial Science', 'Computational Mathematics', 'Financial Mathematics'] }
            ].map((field, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow">
                <img src={field.img} alt={field.title} className="w-full h-40 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold mb-2">{field.title}</h3>
                <ul className="mb-2 list-disc list-inside text-sm">
                  {field.list.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <a href="#" className="text-blue-600 text-sm font-medium flex items-center">Learn More <i className="fas fa-arrow-right ml-2"></i></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="careers" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">STEM Career Outlook</h2>
          <p className="mb-6">STEM careers are growing fast and pay well. Here's a quick look:</p>
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Field</th>
                  <th className="border p-2">Example Careers</th>
                  <th className="border p-2">Average Salary</th>
                  <th className="border p-2">Growth Outlook</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Science', 'Biochemist, Environmental Scientist, Physicist', '$80,000 - $120,000', '5-8%'],
                  ['Technology', 'Software Developer, Data Scientist, Cybersecurity Analyst', '$90,000 - $150,000', '22%'],
                  ['Engineering', 'Civil Engineer, Mechanical Engineer, Electrical Engineer', '$85,000 - $130,000', '4-7%'],
                  ['Mathematics', 'Statistician, Actuary, Data Analyst', '$75,000 - $110,000', '30-33%'],
                ].map(([field, careers, salary, growth], idx) => (
                  <tr key={idx}>
                    <td className="border p-2">{field}</td>
                    <td className="border p-2">{careers}</td>
                    <td className="border p-2">{salary}</td>
                    <td className="border p-2">{growth}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-center">
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-2xl font-bold">31%</h3>
              <p>Projected STEM job growth by 2030</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-2xl font-bold">2x</h3>
              <p>STEM jobs pay nearly double the national average</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow">
              <h3 className="text-2xl font-bold">3.5M</h3>
              <p>STEM jobs that will need to be filled by 2025</p>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">STEM Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              ['fa-graduation-cap', 'Scholarships', 'Find financial aid opportunities for STEM students'],
              ['fa-laptop-code', 'Online Courses', 'Free and paid courses to boost your STEM skills'],
              ['fa-briefcase', 'Internships', 'Gain real-world experience in STEM fields'],
            ].map(([icon, title, desc], idx) => (
              <div key={idx} className="bg-white p-4 text-center rounded shadow">
                <i className={`fas ${icon} text-3xl text-blue-500 mb-2`}></i>
                <h3 className="text-xl font-bold mb-1">{title}</h3>
                <p className="text-sm mb-2">{desc}</p>
                <a href="#" className="text-blue-600 text-sm font-medium">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-white py-8 border-t mt-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
          <div>
            <h3 className="text-xl font-bold mb-2">STEMGuide</h3>
            <p>Your comprehensive resource for exploring STEM majors and careers.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li><a href="#about">About STEM</a></li>
              <li><a href="#majors">Majors</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="about.html">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Connect</h3>
            <div className="flex gap-4 text-lg">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((platform, idx) => (
                <a key={idx} href="#"><i className={`fab fa-${platform}`}></i></a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-6">&copy; 2025 STEMGuide. All rights reserved.</div>
      </footer>
    </div>
  );
}
