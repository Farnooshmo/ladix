import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Snack from "./Snack";

function DietForm() {
  return (
    <div className="select_input_fields">
      <Breakfast />
      <Lunch />
      <Dinner />
      <Snack />
    </div>
  );
}

export default DietForm;
