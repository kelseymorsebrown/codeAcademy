const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;

const yelpAPI = {
  /**
   *
   * @param {string} searchTerm
   * @param {string} location String indicating the geographic area to be used when searching for businesses.
   * @param {string} sortBy 'best_match', 'rating', or 'review_count'
   * @returns {object[]}
   */
  getBusinessListings(term, location, sortBy) {
    console.log(`Client: ${YELP_API_KEY}`);
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);

    return fetch(
      `http://localhost:3001/yelp/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorResponse) => {
            console.error('API error:', errorResponse);
            throw new Error('API error');
          });
        }
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          const businessList = jsonResponse.businesses.map((businesses) => {
            return {
              image: businesses.image_url,
              name: businesses.name,
              address: businesses.location.address1,
              city: businesses.location.city,
              state: businesses.location.state,
              zipcode: businesses.location.zip_code,
              category: businesses.categories[0].title,
              rating: businesses.rating,
              review_count: businesses.review_count,
            };
          });

          console.log(businessList);
          return businessList;
        } else {
          console.log('No businesses found.');
        }
      })
      .catch((error) => {
        console.error('Error fetching and parsing data', error);
      });
  },
};

export default yelpAPI;
