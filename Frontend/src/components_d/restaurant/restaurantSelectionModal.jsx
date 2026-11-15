
import RestaurantResult from './restaurantSelectionResult';
import restaurantData from './restaurantData';

function RestaurantSelection() {
    return (


        <section className="restaurant-selection">
            <div>
                {/* vakantiepark, KM range, submit */}
                <form className="P-2">
                    <input type="text" id="vakantiepark" name="vakantiepark" placeholder="vacation parc"></input>

                    <select>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </select>
                </form>
            </div>            
            <h2>Selecteer een restaurant</h2>

            <div className="restaurant-results">
                {restaurantData.map(restaurant => (
                    <RestaurantResult
                        key={restaurant.id}
                        restaurant={restaurant}
                    />
                ))}
            </div>
        </section>
    );
}

export default RestaurantSelection;
