import React from 'react';

const BrewingGuide: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Brewing Guide</h1>
      
      <div className="space-y-12 max-w-4xl">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Pour Over</h2>
          <p className="text-gray-600 mb-4">
            The pour over method highlights the delicate flavors and aromas of specialty coffee.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Coffee-to-water ratio: 1:16 (e.g., 20g coffee to 320g water)</li>
            <li>Water temperature: 200°F (93°C)</li>
            <li>Grind size: Medium (like kosher salt)</li>
            <li>Brew time: 3-4 minutes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">French Press</h2>
          <p className="text-gray-600 mb-4">
            A full-bodied brewing method that emphasizes the coffee's natural oils and flavors.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Coffee-to-water ratio: 1:15 (e.g., 30g coffee to 450g water)</li>
            <li>Water temperature: 200°F (93°C)</li>
            <li>Grind size: Coarse (like sea salt)</li>
            <li>Brew time: 4 minutes</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default BrewingGuide;