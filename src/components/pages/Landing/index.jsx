import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

/**
 * Ticket 1:
 * Landing page with structure and styles matching the provided screenshot
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    window.open('https://www.humanrightsfirst.org', '_blank');
  };

  const handleViewData = () => {
    navigate('/graphs');
  };

  const handleDownloadData = () => {
    downloadCSV();
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>
      {/* Hero Section */}
      <section className='primary-c text-white py-16 px-8'>
        <div className='max-w-6xl mx-auto text-center'>
          <h1 className='text-4xl md:text-5xl font-serif mb-6'>
            Asylum Office Grant Rate Tracker
          </h1>
          <p className='text-base md:text-lg max-w-4xl mx-auto leading-relaxed'>
            The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions
          </p>
        </div>
      </section>

      {/* Data Visualization Cards Section */}
      <section className='py-16 px-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Bar Graph Card */}
            <div className='bg-white rounded-lg shadow-md p-6 flex flex-col items-center'>
              <img src={barGraph} alt='Bar Graph' className='w-full h-48 object-contain mb-4' />
              <h3 className='text-lg font-serif text-center mb-4'>
                Search Grant Rates By Office
              </h3>
            </div>

            {/* Pie Chart Card */}
            <div className='bg-white rounded-lg shadow-md p-6 flex flex-col items-center'>
              <img src={pieChart} alt='Pie Chart' className='w-full h-48 object-contain mb-4' />
              <h3 className='text-lg font-serif text-center mb-4'>
                Search Grant Rates By Nationality
              </h3>
            </div>

            {/* Line Graph Card */}
            <div className='bg-white rounded-lg shadow-md p-6 flex flex-col items-center'>
              <img src={lineGraph} alt='Line Graph' className='w-full h-48 object-contain mb-4' />
              <h3 className='text-lg font-serif text-center mb-4'>
                Search Grant Rates Over Time
              </h3>
            </div>
          </div>

          {/* Action Buttons */}
          <div className='flex justify-center gap-4 mt-8'>
            <button 
              onClick={handleViewData}
              className='bg-[#808070] hover:bg-[#6a6a5a] text-white px-6 py-2 rounded font-medium transition-colors'
            >
              View the Data
            </button>
            <button 
              onClick={handleDownloadData}
              className='bg-[#808070] hover:bg-[#6a6a5a] text-white px-6 py-2 rounded font-medium transition-colors'
            >
              Download the Data
            </button>
          </div>
        </div>
      </section>

      {/* Paper Stack Section with Description */}
      <section className='py-16 px-8 bg-white'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            {/* Paper Stack Image */}
            <div className='flex justify-center'>
              <img 
                src={paperStack} 
                alt='Stack of papers' 
                className='rounded-lg shadow-lg max-w-full h-auto'
              />
            </div>

            {/* Description Text */}
            <div className='flex flex-col justify-center'>
              <p className='text-base md:text-lg leading-relaxed text-gray-700'>
                Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Systemic Disparity Insights Section */}
      <section className='py-16 px-8'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl md:text-4xl font-serif text-center mb-12'>
            Systemic Disparity Insights
          </h2>

          {/* Statistics Grid */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
            {/* 36% Statistic */}
            <div className='text-center'>
              <div className='text-5xl md:text-6xl font-serif mb-4'>36%</div>
              <p className='text-sm md:text-base text-gray-700 leading-relaxed px-4'>
                By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 20202.
              </p>
            </div>

            {/* 5% Statistic */}
            <div className='text-center'>
              <div className='text-5xl md:text-6xl font-serif mb-4'>5%</div>
              <p className='text-sm md:text-base text-gray-700 leading-relaxed px-4'>
                The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.
              </p>
            </div>

            {/* 6x Lower Statistic */}
            <div className='text-center'>
              <div className='text-5xl md:text-6xl font-serif mb-4'>6x Lower</div>
              <p className='text-sm md:text-base text-gray-700 leading-relaxed px-4'>
                Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.
              </p>
            </div>
          </div>

          {/* Read More Button */}
          <div className='flex justify-center mb-8'>
            <button 
              onClick={handleReadMore}
              className='bg-[#808070] hover:bg-[#6a6a5a] text-white px-6 py-2 rounded font-medium transition-colors'
            >
              Read More
            </button>
          </div>

          {/* Back to Top Link */}
          <div className='flex justify-center'>
            <button 
              onClick={scrollToTop}
              className='text-gray-600 hover:text-gray-800 text-sm transition-colors'
            >
              Back To Top ↑
            </button>
          </div>
        </div>
      </section>

      {/* Hidden decode message for Canvas submission */}
      <div className='hidden'>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div>
    </div>
  );
};
