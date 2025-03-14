import React from 'react';

export const Filters = ({
  priceRange,
  onPriceRangeChange,
  selectedType,
  onTypeChange,
}) => {
  const types = ['All', 'Basmati Rice', 'Jasmine Rice', 'Sushi Rice',  'Brown Rice', 'Wild Rice'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      <div className="space-y-6">
        {/* Price Range Filter */}
        <div>
          <h3 className="font-medium mb-2">Price Range</h3>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange[1]}
              onChange={(e) =>
                onPriceRangeChange([priceRange[0], Number(e.target.value)])
              }
              className="w-full"
            />
            <span className="text-sm text-gray-600">
              ${priceRange[0]} - ${priceRange[1]}
            </span>
          </div>
        </div>

        {/* Type Filter */}
        <div>
          <h3 className="font-medium mb-2">Type</h3>
          <div className="space-y-2">
            {types.map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={selectedType === type}
                  onChange={(e) => onTypeChange(e.target.value)}
                  className="text-green-600"
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};