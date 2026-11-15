import RestaurantResult from './restaurantSelectionResult';
import restaurantData from './restaurantData';
import './restaurant.css';

function RestaurantSelection() {
    return (


        <section className="restaurant-selection">
            <div className="searchOptions">
                {/* vakantiepark, KM range, submit */}
                <form className="P-2">
                    <input type="text" id="vakantieparkSelector" name="vakantieparkSelector" placeholder="vacation park"></input>

                    <select id="searchRadius">
                        <option value="option1">On Park</option>
                        <option value="option2">10 KM</option>
                        <option value="option3">25 KM</option>
                    </select>

                    <input type="submit" id="RestaurantSelectionSubmit" value="Submit"></input>
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
