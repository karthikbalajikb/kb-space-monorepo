const Category = ({ categories }) => (
  <div className="flex">
    {categories.map((category) => {
      const shadow = category.selected ? 'shadow-neu1-inset' : 'shadow-neu3';
      const bg = category.selected ? 'bg-surface' : 'bg-primary-light';
      return (
      <div className={`grid p-2 mr-12 w-40 h-48 rounded-category bg-surface ${shadow}`}>
        <div className={`p-2 ${bg} rounded-category`}>
          <div className="flex justify-center items-center w-20 h-20 bg-surface rounded-full shadow-neu1-inset">
            <img src="/icons/038-trousers-4.svg" className="w-12" />
          </div>
          <div className="flex justify-center items-center">
            <p className="text-md text-product-card-info-text font-normal pt-4">
              {category.name}
            </p>
          </div>
        </div>
      </div>
    );
    })}
  </div>
);

export default Category;
