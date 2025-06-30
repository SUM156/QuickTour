import React from 'react';

const visits = [
  {
    id: 1,
    title: 'Hunza Valley',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/River_Swat_Pakistan_3.jpg',
    description: 'Explore the breathtaking mountains of Hunza, perfect for nature lovers.',
    amount: 'Rs. 15,000',
  },
  {
    id: 2,
    title: 'Skardu Lakes',
    image: 'https://www.shutterstock.com/image-photo/river-swat-valley-pakistan-northern-260nw-2310880533.jpg',
    description: 'Visit the magical lakes of Skardu, with serene views and crystal waters.',
    amount: 'Rs. 20,000',
  },
  {
    id: 3,
    title: 'Swat Valley',
    image: 'https://www.exploria.pk/wp-content/uploads/2024/08/swat-tour-3-edited.jpg',
    description: 'Experience Swat’s lush greenery, often called the Switzerland of Pakistan.',
    amount: 'Rs. 12,000',
  },
  {
    id: 4,
    title: 'Murree Hills',
    image: 'https://media.istockphoto.com/id/1277791195/photo/kalam-valley-pakistan.jpg?s=612x612&w=0&k=20&c=R0yCcBmMQbLCG0_zs6EmtVDBAZ9wb0RddmVkTxkCD_o=',
    description: 'Murree offers a quick escape with fresh air and beautiful pine forests.',
    amount: 'Rs. 8,000',
  },
  {
    id: 5,
    title: 'Gorakh Hill Station',
    image: 'https://media.istockphoto.com/id/1303833000/photo/meadows-of-kalam.jpg?s=612x612&w=0&k=20&c=izfHDCqjvy4YebjuFV54dpOeYjNwLQIj2a46VaL-KvU=',
    description: 'Sindh’s hill station escape with starry skies and peaceful nights.',
    amount: 'Rs. 10,000',
  }
];

function Visit() {
  return (
    <div className="min-h-screen bg-blue-100 py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold text-blue-500 text-center mb-10">Visit Pakistan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visits.map((place) => (
          <div key={place.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={place.image} alt={place.title} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-blue-600 mb-2">{place.title}</h2>
              <p className="text-gray-700 mb-4">{place.description}</p>
              <p className="text-lg font-bold text-green-600 mb-4">{place.amount}</p>
              <a
                href="https://wa.me/92 321 3819909"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
              >
                Book Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visit;
