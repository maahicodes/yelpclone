const apiKey = '9HKRzxwyRS6hNaa15BPUOKSUNnAARqJ6AJCa0QJdusbzomqGIvlErZxnFnkNJTpi0OoO-Kt2OntBaYXrhC9_lJbNCY-UOAPEV-xZ9EUQA3zWMa0CoQ5EfSnIsXjfW3Yx'; // Insert your API key here.

const Yelp = {
    search(term, location, sortBy) {
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
          headers: {
                Authorization: `Bearer ${apiKey}`, 
            },
      }).then((response) => {
          return response.json();
      }).then((jsonResponse) =>{
          if (jsonResponse.businesses) {
              return jsonResponse.businesses.map((business) => {
                  return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating:  business.rating,
                        reviewCount: business.review_count
                  };
              });
          }
      });
    }
};

export default Yelp;
